// script/build-backend.mjs
import { build } from "esbuild";
import { readFile, mkdir } from "fs/promises";

const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildBackend() {
  console.log("Building backend for Render...");
  
  // Ensure dist directory exists
  await mkdir("dist", { recursive: true });
  
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await build({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: [
      ...externals,
      "vite",
      "@vitejs/*",
      "@replit/*",
      "@babel/*",
      "lightningcss",
    ],
    logLevel: "info",
  });
  
  console.log("✅ Backend built successfully at dist/index.cjs");
}

buildBackend().catch((err) => {
  console.error("❌ Build failed:", err);
  process.exit(1);
});