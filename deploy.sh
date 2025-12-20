#!/bin/bash

# GitHub Pages Deployment Script
# This script builds the React frontend and prepares it for GitHub Pages deployment

set -e

echo "🚀 Starting GitHub Pages deployment..."

# Build the React frontend
echo "📦 Building React frontend..."
npm run build

# Create a CNAME file if you have a custom domain (optional)
# echo "yourdomain.com" > dist/CNAME

echo "✅ Build complete! The dist folder is ready for deployment."
echo ""
echo "📋 Next steps:"
echo "1. Commit your code: git add -A && git commit -m 'Deploy to GitHub Pages'"
echo "2. Push to GitHub: git push origin main"
echo ""
echo "Then, to deploy the static files:"
echo "  Option A - Using GitHub Pages Settings:"
echo "    - Go to your repository Settings > Pages"
echo "    - Set source to 'GitHub Actions' or 'Deploy from branch'"
echo "    - Choose the 'main' branch and '/root' directory"
echo ""
echo "  Option B - Using gh-pages package:"
echo "    - Run: npx gh-pages -d dist"
echo ""
echo "⚠️  Note: The Express backend needs to be deployed separately."
echo "    You can deploy it to: Render, Railway, Heroku, Fly.io, etc."
