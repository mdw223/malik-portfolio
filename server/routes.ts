import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
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
