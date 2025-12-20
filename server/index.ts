import 'dotenv/config';
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import cors from 'cors'; 
// This is the main server initialization file for a full-stack React application, handling server setup, middleware, routing, and environment-specific configurations.
const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:3000', // Local development
    'https://your-render-frontend-url.app', // Render frontend URL
    // Add any other allowed origins
  ],
  credentials: true // If you're using sessions or cookies
}));

app.use(
  express.json({ // Parse JSON request bodies
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies

export function log(message: string, source = "express") { // custom logging 
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Setup static file serving based on environment
  // In production on Render (backend-only), skip frontend serving
  // In development, use Vite dev server
  // In production with frontend build, serve static files
  const isBackendOnly = process.env.BACKEND_ONLY === "true";

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    if (isBackendOnly) {
      log("⚠️  Running in BACKEND_ONLY mode - frontend serving disabled");
      log("   Frontend should be deployed separately (e.g., GitHub Pages)");
      
      // Optional: Add a health check endpoint
      app.get("/", (_req, res) => {
        res.json({ 
          status: "ok", 
          message: "API server is running",
          mode: "backend-only"
        });
      });
    } else {
      log("📦 Attempting to serve static frontend files...");
      serveStatic(app);
    }
  } else {
    log("🔧 Setting up Vite dev server...");
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
  const NODE_ENV = process.env.NODE_ENV || 'production';

  httpServer.listen(port, () => {
    log(`🚀 Server running in ${NODE_ENV} mode on port ${port}`);
    if (isBackendOnly) {
      log(`   API available at: http://localhost:${port}/`);
    }
  });
})();
