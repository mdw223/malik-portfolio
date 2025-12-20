import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { Resend } from "resend"; //https://resend.com/api-keys
import { contactRateLimiter } from "./middleware/rateLimiter";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmailNotification(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  await resend.emails.send({
    from: `Contact Form <onboarding@resend.dev>`,
    to: process.env.NOTIFICATION_EMAIL!,
    replyTo: data.email,
    subject: `New Contact Form: ${data.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <h3>Message:</h3>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `,
  });
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", contactRateLimiter, async (req, res) => {
    try {
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          message: validationError.message 
        });
      }

      const message = await storage.createContactMessage(result.data);
      
      console.log("Contact form submission received:", {
        name: message.name,
        email: message.email,
        subject: message.subject,
        createdAt: message.createdAt,
      });

      // Send email notification
      try {
        await sendEmailNotification(result.data);
        console.log("Email notification sent successfully");
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Don't fail the request if email fails - message is still saved
      }

      res.status(201).json({ 
        success: true, 
        message: "Message sent successfully",
        id: message.id 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        error: "Failed to send message",
        message: "Please try again later" 
      });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  return httpServer;
}
