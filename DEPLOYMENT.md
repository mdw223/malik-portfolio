# Deployment Guide

This document provides detailed instructions for deploying your portfolio to GitHub Pages and other platforms.

## Table of Contents

1. [GitHub Pages Deployment](#github-pages-deployment)
2. [Backend Deployment](#backend-deployment)
3. [Custom Domain](#custom-domain)
4. [Troubleshooting](#troubleshooting)

## GitHub Pages Deployment

### Prerequisites

- GitHub account with a repository
- Git installed locally
- Node.js 20+ installed

### Automated Deployment with GitHub Actions (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages whenever you push to the main branch.

**Setup Steps:**

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Enable GitHub Pages in repository settings**
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose "gh-pages" branch (it will be created automatically after first deployment)
   - Save

3. **Wait for deployment**
   - Go to the Actions tab in your repository
   - Watch the workflow run
   - Once complete, your site will be available at: `https://yourusername.github.io/portfolio/`

4. **Verify deployment**
   - Check the GitHub Pages URL after a few moments
   - The site should be live with your changes

### Manual Deployment with gh-pages CLI

If you prefer manual control:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## Backend Deployment

The Express backend needs separate hosting since GitHub Pages only serves static files.

### Option 1: Render (Recommended for Beginners)

1. **Create account at [render.com](https://render.com)**

2. **Connect GitHub repository**
   - Click "New +" → "Web Service"
   - Connect your GitHub account and select the repository

3. **Configure the service**
   - **Name**: portfolio-api
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Region**: Choose closest to you

4. **Add environment variables**
   - Click "Environment" in settings
   - Add: `SESSION_SECRET=your_random_secret_here`
   - If using database: `DATABASE_URL=your_postgres_url`

5. **Deploy**
   - Click "Deploy" and wait for build to complete

### Option 2: Railway

1. **Create account at [railway.app](https://railway.app)**

2. **Create new project**
   - Click "New Project" → "Deploy from GitHub"
   - Select your repository

3. **Configure environment**
   - Railway auto-detects Node.js
   - Add environment variables in Variables tab

4. **Deploy**
   - Automatic deployment when you push to GitHub

### Option 3: Fly.io

```bash
# Install flyctl
curl -L https://fly.io/install.sh | sh

# Login
flyctl auth login

# Launch app
flyctl launch

# Deploy
flyctl deploy
```

### Option 4: Heroku

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login and create app**
   ```bash
   heroku login
   heroku create your-app-name
   ```

3. **Add PostgreSQL (optional)**
   ```bash
   heroku addons:create heroku-postgresql:hobby-dev
   ```

4. **Set environment variables**
   ```bash
   heroku config:set SESSION_SECRET=your_secret
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

## Custom Domain

### Setup Custom Domain on GitHub Pages

1. **Add domain to GitHub**
   - Go to repository Settings → Pages
   - Under "Custom domain", enter your domain (e.g., `myportfolio.com`)

2. **Configure DNS records**
   
   For `example.com`:
   ```
   A record:
   - Name: @
   - Type: A
   - Value: 185.199.108.153
            185.199.109.153
            185.199.110.153
            185.199.111.153
   
   AAAA records:
   - Name: @
   - Type: AAAA
   - Value: 2606:50c0:8000::153
            2606:50c0:8001::153
            2606:50c0:8002::153
            2606:50c0:8003::153
   ```

   For `www.example.com`:
   ```
   CNAME record:
   - Name: www
   - Type: CNAME
   - Value: yourusername.github.io
   ```

3. **Verify DNS**
   ```bash
   dig yourdomain.com +nostats +nocomments +nocmd
   ```

### Setup Custom Domain for Backend

If your backend is on Render/Railway/Heroku, add a CNAME record:
```
api.example.com CNAME render.example.com (or your provider's URL)
```

Then update your API calls in the frontend to use the custom domain.

## Environment Variables

### Frontend Environment Variables

Frontend variables must be prefixed with `VITE_` to be available in the browser.

Create `.env.local` in root:
```env
VITE_API_URL=https://your-backend.com
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Backend Environment Variables

Set these on your hosting platform:

- `SESSION_SECRET` - Random 32+ character string (generate with `openssl rand -base64 32`)
- `DATABASE_URL` - PostgreSQL connection string (if using database)
- `NODE_ENV` - Set to "production"

## Troubleshooting

### GitHub Pages shows 404

1. Check if gh-pages branch exists
2. Verify GitHub Pages is enabled in Settings
3. Clear browser cache and hard refresh
4. Check that `dist` folder is built: `npm run build`

### GitHub Actions fails

1. Go to Actions tab and check the error log
2. Common issues:
   - `npm install` fails - clear cache: `npm ci`
   - Build fails - check for TypeScript errors: `npm run build`
   - Node version mismatch - update Node to 20+

### Backend API not accessible

1. Verify backend is deployed and running
2. Check CORS settings if calling from different domain
3. Verify environment variables are set
4. Check network tab in browser dev tools for actual error

### Blank page on deployment

1. Check browser console for errors (F12)
2. Check that relative paths don't need updates
3. Verify build completed successfully
4. Clear browser cache

### Database connection errors

1. Verify `DATABASE_URL` is correct
2. Check if PostgreSQL is running (for local dev)
3. Ensure database user has correct permissions
4. Test connection: `psql $DATABASE_URL`

## Performance Tips

1. **Enable GZIP compression** on your hosting
2. **Use CDN** for static assets (Cloudflare, AWS CloudFront)
3. **Monitor Core Web Vitals** with Lighthouse
4. **Set up monitoring** with:
   - Sentry for error tracking
   - New Relic for performance monitoring
   - LogRocket for session replay

## Security Checklist

- [ ] Set `SESSION_SECRET` to a long random string
- [ ] Use HTTPS everywhere (automatic on GitHub Pages/Render)
- [ ] Set secure headers (HSTS, CSP, etc.)
- [ ] Validate all form inputs on backend
- [ ] Use environment variables for sensitive data
- [ ] Keep dependencies updated: `npm audit fix`
- [ ] Enable branch protection rules on GitHub

## Next Steps

After deployment:

1. **Test everything**
   - Test all forms
   - Check responsiveness on mobile
   - Verify links work
   - Test blog post loading

2. **Setup analytics**
   - Google Analytics
   - Vercel Analytics
   - Plausible Analytics

3. **Monitor performance**
   - Set up error tracking
   - Monitor page load times
   - Track user engagement

4. **Maintain**
   - Update dependencies monthly
   - Review and respond to contact form submissions
   - Add new projects and blog posts

---

For more help, check:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Render Documentation](https://render.com/docs)
- [Railway Documentation](https://docs.railway.app)
