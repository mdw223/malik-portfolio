import express from "express";
import serveStaticMiddleware from "serve-static";
import fs from "fs";
import path from "path";

export function serveStatic(app: express.Application) {
  const buildDir = path.resolve(__dirname, "public");
  
  // Check if the build directory exists
  if (!fs.existsSync(buildDir)) {
    console.warn(`⚠️  Frontend build directory not found: ${buildDir}`);
    console.warn("   Skipping static file serving.");
    console.warn("   If this is intentional (backend-only deploy), set BACKEND_ONLY=true");
    return;
  }

  console.log(`✅ Serving static files from: ${buildDir}`);
  
  // Serve static files
  app.use(serveStaticMiddleware(buildDir));
  
  // SPA fallback - serve index.html for all non-API routes
  app.use("*", (req, res) => {
    res.sendFile(path.resolve(buildDir, "index.html"));
  });
}