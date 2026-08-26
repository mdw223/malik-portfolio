# Malik Wensman - Personal Portfolio Website

A modern, full-featured personal portfolio website built with React, TypeScript, and Express. Showcases projects, work experience, resume, blog posts, and provides a contact form.

## Features

- 🎨 **Dark/Light Theme Toggle** - Persistent theme preference with smooth transitions
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 📝 **Markdown Blog** - Write blog posts in Markdown with syntax highlighting
- 🔍 **Blog Search** - Full-text search across blog posts and tags
- 📬 **Contact Form** - Backend-powered contact form with email integration
- 🎯 **Smooth Scrolling Navigation** - Auto-highlighting navigation based on scroll position
- ⚡ **Fast Performance** - Built with Vite for optimal build times and lazy loading
- 🔐 **Type Safe** - Full TypeScript support across frontend and backend

## Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool with HMR
- **Wouter** - Lightweight client-side routing
- **TanStack React Query** - Server state management
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **shadcn/ui** - High-quality UI components
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Icon library
- **React Icons** - Additional icon sets
- **React Markdown** - Markdown rendering
- **Remark GFM** - GitHub Flavored Markdown support
- **React Syntax Highlighter** - Code block syntax highlighting
- **Toast** - notification management system
- **GitHub Pages** - front end hosting with GitHub Actions

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **Drizzle ORM** - Database ORM (optional - currently using in-memory storage)
- **Zod** - Request validation
- **PostgreSQL** - Database (optional)
- **Render** - Hosting backend
- **Express Rate Limiting** 

### Build & Deployment
- **Vite** - Frontend bundler
- **tsx** - TypeScript execution
- **esbuild** - Production bundling

## Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm install resend
   npm install express-rate-limit
   npm install dotenv
   npm install cors
   npm install @types/cors -D
   ```

3. **Configure environment variables** (optional)
   Create a `.env.local` file in the root directory:
   ```env
   DATABASE_URL=your_database_url_here
   SESSION_SECRET=your_session_secret
   RESEND_API_KEY=_your_resend_api_key
   NOTIFICATION_EMAIL=your_email
   VITE_RENDER_URL=your_backend_deployment_url
   ```

### GitHub Pages Deployment for React with Environment Variables (Sample GitHub Actions Workflow with Secrets)

GitHub Secrets provide the most secure way to handle environment variables for GitHub Pages

1. Go to your repository
2. Click "Settings"
3. Select "Secrets and variables"
4. Choose "Actions"
5. Click "New repository secret"
6. Write a deploy.yml in .github/workflows/ folder

### MY GITHUB ACTIONS deploy.yml
```yaml
name: Deploy to GitHub Pages

on:
  push: # Runs on pushes targeting the default branch
    branches: ["prod"]
  pull_request:
    branches: ["prod"]

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs: # the job that occurs when we deploy
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Set Environment Variables
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
          SESSION_SECRET: ${{ secrets.SESSION_SECRET }}
          FRONTEND_URL: ${{ secrets.FRONTEND_URL }}
          RESEND_API_KEY: ${{ secrets.RESEND_API_KEY }}
          NOTIFICATION_EMAIL: ${{ secrets.NOTIFICATION_EMAIL }}
          VITE_RENDER_URL: ${{ secrets.VITE_RENDER_URL }}
        run: |
          echo "REACT_APP_EMAIL_SERVICE_ID=$REACT_APP_EMAIL_SERVICE_ID" >> .env.production
          echo "REACT_APP_EMAIL_TEMPLATE_ID=$REACT_APP_EMAIL_TEMPLATE_ID" >> .env.production
          echo "REACT_APP_EMAIL_PUBLIC_KEY=$REACT_APP_EMAIL_PUBLIC_KEY" >> .env.production
          echo "VITE_RENDER_URL=$VITE_RENDER_URL" >> .env.production

      - name: Copy index.html from client to dist
        run: |
          mkdir -p dist
          cp client/index.html dist/
          echo "Copied index.html to dist folder"
          ls -la dist/

      - name: Build frontend
        run: |
          npm run build:pages

      - name: List build output
        run: ls -la ./dist/public

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifacts
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./dist/public" # Upload public folder

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest
    needs: build

    if: github.event_name == 'push' && github.ref == 'refs/heads/prod'

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

- Frontend: Hot Module Replacement (HMR) enabled for instant updates
- Backend: Automatically reloads on file changes

### Building for Production

Build the React frontend:
```bash
npm run build
```

The compiled frontend will be in the `dist` directory.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with CSS variables for theming (dark/light mode)
- **Component Library**: shadcn/ui (New York style) built on Radix UI primitives
- **State Management**: React Query (TanStack Query) for server state, React Context for theme
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Validation**: Zod with drizzle-zod for type-safe schemas

### Data Storage
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Development Fallback**: In-memory storage (MemStorage class) when database is not available
- **Schema Location**: `shared/schema.ts` contains all database table definitions

## Project Structure

```
portfolio/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components (Home, Blog)
│   │   ├── lib/            # Utilities, theme, data
│   │   ├── hooks/          # Custom React hooks
│   │   ├── App.tsx         # Main app component
│   │   └── index.css       # Global styles
│   ├── public/             # Static assets (resume PDF, 404.html)
│   └── index.html          # HTML entry point
├── server/                 # Express backend
|   |── middleware/
|       └── rateLimiter.ts  # rate limiting for emails
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API route definitions
│   ├── storage.ts          # Data access layer
│   └── vite.ts             # Vite integration
├── shared/                 # Shared code
│   └── schema.ts           # Data models & validation schemas
├── migrations/             # Database migrations (if using DB)
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

### Key Design Patterns
- **Monorepo Structure**: Client and server share types via `@shared/*` path alias
- **Schema-First Approach**: Database schemas generate both TypeScript types and Zod validators
- **Component-Driven UI**: Reusable shadcn/ui components with consistent styling
- **CSS Variables Theming**: Theme colors defined in CSS variables for easy dark/light switching

## External Dependencies

### UI Components & Styling
- **Radix UI**: Full suite of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets (LinkedIn, GitHub, YouTube)

### Data & Forms
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **drizzle-zod**: Zod schema generation from Drizzle schemas

### Blog Rendering
- **React Markdown**: Markdown content rendering
- **remark-gfm**: GitHub Flavored Markdown support
- **react-syntax-highlighter**: Code block syntax highlighting with Prism

### Database & Backend
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **PostgreSQL**: Primary database (via `pg` driver)
- **connect-pg-simple**: Session storage for PostgreSQL
- **express-session**: Session middleware

### External Services (Configured via Environment)
- **Calendly**: Meeting scheduling (URL stored in data)
- **Email Integration**: Contact form submissions (planned via API)

### Development Tools
- **Vite**: Frontend build tool with HMR
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Production server bundling
- **Replit Plugins**: Dev banner, cartographer, runtime error overlay

## Content Source of Truth

All portfolio content lives in the repo as static data — no database or admin panel required for updates.

| Content | File | What to edit |
|---------|------|--------------|
| Name, title, bio, social links | [`client/src/lib/data.ts`](client/src/lib/data.ts) → `personalInfo` | Profile text and links |
| Featured projects | [`client/src/lib/data.ts`](client/src/lib/data.ts) → `projects` | Project cards on homepage |
| Work experience | [`client/src/lib/data.ts`](client/src/lib/data.ts) → `experiences` | Experience timeline |
| Blog posts | [`client/src/lib/data.ts`](client/src/lib/data.ts) → `blogPosts` | Full post content (markdown) |
| Resume PDF | [`client/public/Malik_Wensman___Resume (p).pdf`](client/public/) | Replace the PDF file |
| Resume preview card | [`client/src/components/ResumeSection.tsx`](client/src/components/ResumeSection.tsx) | Hardcoded preview text (optional) |
| Field types & validation | [`shared/schema.ts`](shared/schema.ts) | `Project`, `Experience`, `BlogPost`, `PersonalInfo` interfaces |

After any content change: `npm run dev` to preview locally, then push to `prod` to deploy via GitHub Actions.

---

## Dynamic Portfolio Plan (Phase 1 & Phase 2)

A full custom CMS (login, database, VPS admin panel) is **not needed right now**. These phases give you fast, consistent updates without that overhead.

### Phase 1: Structured Manual Updates (do this now)

**Goal:** Update resume, text, projects, and blogs in under 10 minutes with a repeatable checklist.

**What you build:**
- Use the [Quick Update Playbook](#quick-update-playbook) below for every change
- Keep one canonical entry template for projects and blogs (copy-paste, fill in fields)
- Optional: Obsidian checklist in your vault to capture project/blog details before editing `data.ts`

**What you skip for now:**
- Admin login page
- Database
- VPS / nginx routing for portfolio editing

**Time budget:** 1–4 hours to learn the workflow once; ~5–10 min per update after that.

### Phase 2: Guided Automation (next step)

**Goal:** Remove "blank page" friction when starting a new project or blog entry.

**What you add:**
1. **Cursor skill or command** — asks guided questions (title, stack, impact, links, tags) and outputs a ready-to-paste block for `data.ts`
2. **Obsidian template** — same questions as a form you fill in Obsidian, then paste into the repo
3. **Optional CLI script** (e.g. `npm run content:new-project`) — prompts in terminal and appends a validated entry to `data.ts`

**Still static-first:** Generated content commits to git; GitHub Pages deploys as today. No backend required unless Phase 3 triggers apply.

### Phase 3 (later): When to upgrade to CMS / backend

Only invest in admin panel + database + VPS when **2 or more** of these are true:

- You update content more than 3× per week consistently
- You need in-browser image uploads (not URL links)
- You want edit history / rollback in a UI (not git)
- Someone else needs to edit content without touching the repo
- Managing `data.ts` file size or merge conflicts becomes painful

Until then, file-based updates + guided automation are faster and cheaper to maintain.

---

## Quick Update Playbook

Use this every time you ship something new. Order matters for the fastest path.

### Update Resume in under 5 minutes

1. Export your latest resume as PDF.
2. Replace [`client/public/Malik_Wensman___Resume (p).pdf`](client/public/) (keep the exact filename — links depend on it).
3. Optionally sync the preview card in [`client/src/components/ResumeSection.tsx`](client/src/components/ResumeSection.tsx) (name, title, skills snippet).
4. Run `npm run dev` → open `#resume` → click **View Full Resume** and **Download PDF**.
5. Push to `prod` when links work.

### Update Site Text in under 5 minutes

Edit `personalInfo` in [`client/src/lib/data.ts`](client/src/lib/data.ts):

```typescript
export const personalInfo: PersonalInfo = {
  name: "...",
  title: "...",
  bio: "...",
  profileImage: "https://...",
  bullets: ["...", "..."],
  linkedIn: "https://...",
  github: "https://...",
  youtube: "https://...",
  calendlyUrl: "https://...",
  email: "...",
  axiomWorkspaceUrl: "https://..."
};
```

**Checklist:**
- [ ] `bio` is one clear sentence (what you do + current focus)
- [ ] `bullets` are scannable (role, school, interests)
- [ ] All URLs open correctly
- [ ] Preview on mobile (hero + about section)

For experience timeline text, edit the `experiences` array in the same file.

### Add or Update a Featured Project

Add an entry to the `projects` array in [`client/src/lib/data.ts`](client/src/lib/data.ts). Use the next unused `id` (string).

**Template:**

```typescript
{
  id: "8",
  title: "Project Name",
  description: "One sentence: what you built and the outcome.",
  image: "https://...",           // thumbnail URL (YouTube maxres, GitHub social, etc.)
  demoUrl: "https://youtu.be/...",         // optional — video demo (YouTube, etc.)
  liveWebsiteUrl: "https://...",           // optional — deployed site
  githubUrl: "https://...",       // optional
  blogUrl: "/blog/your-slug",     // optional — must match a blog slug if set
  linkedInPostUrl: "https://..."  // optional
}
```

**Checklist:**
- [ ] `description` states impact, not just tech stack
- [ ] `image` loads (test URL in browser)
- [ ] At least one of: `liveWebsiteUrl`, `demoUrl`, `githubUrl`, `blogUrl`, `linkedInPostUrl`
- [ ] New projects appear at the top of the array if you want them featured first
- [ ] Card renders on homepage projects section

### Add a Blog Post

Add an entry to the `blogPosts` array in [`client/src/lib/data.ts`](client/src/lib/data.ts).

**Template:**

```typescript
{
  id: "unique-id",
  title: "Post Title",
  slug: "url-friendly-slug",      // lowercase, hyphens — used in /blog/slug
  excerpt: "1–2 sentence summary for the blog list.",
  content: `# Heading

Your markdown body here. Supports GFM and code blocks.`,
  createdAt: "2026-06-20",        // YYYY-MM-DD
  tags: ["tag1", "tag2"]
}
```

**Checklist:**
- [ ] `slug` is unique and matches any `blogUrl` on linked projects (e.g. `/blog/my-slug`)
- [ ] `excerpt` works as a standalone preview
- [ ] `createdAt` is correct for sort order
- [ ] `tags` are lowercase and consistent with existing posts
- [ ] Visit `/blog/your-slug` locally before deploy

### Pre-Deploy Quality Checklist

Run through this before pushing to `prod`:

- [ ] `npm run dev` — no console errors
- [ ] Homepage: hero, projects, experience, resume, contact all look correct
- [ ] New blog post opens and markdown renders (headings, code blocks, links)
- [ ] External links open in new tab where expected
- [ ] Mobile layout spot-check (nav, project cards, blog)
- [ ] `npm run build:pages` succeeds locally if you changed structure

**Deploy:** push to `prod` branch → GitHub Actions builds and publishes to GitHub Pages.

### Repeatable AI Prompt (Phase 2 starter)

Paste this into Cursor when you finish a project and want a consistent entry:

```
I'm updating my portfolio. Ask me these fields one at a time, then output:
1) a projects[] entry for client/src/lib/data.ts
2) an optional blogPosts[] entry if I want a write-up

Fields: title, one-line description, image URL, demo URL, GitHub URL, LinkedIn post URL, blog slug (optional), tech stack, key outcome, tags, post excerpt, post markdown outline.

Match existing style in data.ts. Use the next project id. Slug must be url-safe.
```

Save this as a Cursor skill or Obsidian template in Phase 2 so you never retype it.

---

## Customization

### Update Personal Information

See [Update Site Text](#update-site-text-in-under-5-minutes) and edit `personalInfo` in [`client/src/lib/data.ts`](client/src/lib/data.ts).

### Add Blog Posts

See [Add a Blog Post](#add-a-blog-post) for the full template and checklist.

### Customize Styling

- **Colors & Theme**: Edit CSS variables in `client/src/index.css`
- **Typography**: Update font families in `index.css` or `tailwind.config.ts`
- **Spacing**: Modify Tailwind config in `tailwind.config.ts`

### Add Contact Form Backend

To enable email sending, update the contact API in `server/routes.ts`:
```typescript
// Replace the console.log with actual email service
// Example: SendGrid, Nodemailer, Mailgun, etc.
const transporter = nodemailer.createTransport({...})
await transporter.sendMail({...})
```

### How I did Email Sending

I used [resend](https://resend.com). The free tier is 100 emails/day.
1. Sign up
2. Get your API key from the dashboard
3. Specify your keys in your environment or in github pages
Now emails will be sent TO your Proton email.
Works anywhere your app is deployed (Vercel, Railway, etc.)


## Deployment 

More documentation on deployment in DEPLOYMENT.md

### Option 1: Deploy Frontend to GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy static files**
   ```bash
   npx gh-pages -d dist
   ```

3. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Set source to "Deploy from a branch"
   - Select "gh-pages" or "main" or "prod" branch

**Quick Deploy Script:**
```bash
bash deploy.sh
```

### Option 2: Deploy Full Stack

For a complete deployment with backend:

**Frontend** - GitHub Pages, Vercel, or Netlify
- Build: `npm run build`
- Deploy the `dist` folder

**Backend** - Deploy Express server to:
- **Render** (Free tier available)
- **Railway** (Pay-as-you-go)
- **Fly.io** (Free tier available)
- **Heroku** (Paid)
- **AWS** (EC2, Lambda)

### How I hosted my backend  (⚠️Note: The Express backend needs to be deployed separately)
1. Log into Render.com
2. Click "New +" button
3. Select "Web Service"
4. Connect your GitHub repository
5. Configure deployment settings:
   Branch: Usually main or master
   Root Directory: /backend (if applicable)
   Build Command: npm install && npm run build:backend
   Start Command: npm start
6. Add environment varibles 

Environment variables to set on your hosting platform:
- `DATABASE_URL` - PostgreSQL connection string (if using database)
- `SESSION_SECRET` - Random string for session encryption

### Option 3: Docker Deployment

1. Create a `Dockerfile`:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

2. Build and run:
```bash
docker build -t portfolio .
docker run -p 5000:5000 portfolio
```

## Available Scripts

```bash
# Development
npm run dev              # Start dev server with hot reload

# Production
npm run build            # Build React frontend
npm start               # Start production server
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Lighthouse Score**: 90+

## SEO

- Semantic HTML structure
- Open Graph meta tags
- Responsive design (mobile-first)
- Fast page load times
- Accessible WCAG 2.1 AA compliant

## Contributing

This is a personal portfolio, but feel free to use it as a template for your own portfolio.

## License

MIT License - feel free to use this template for your personal portfolio.

## Support

For issues or questions, refer to:
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Express.js Guide](https://expressjs.com)
- [Vite Documentation](https://vitejs.dev)

## Roadmap

- [X] Email integration for contact form (SendGrid, Mailgun, etc.)
- [ ] Comment system for blog posts
- [ ] Analytics integration
- [ ] Project filtering by category
- [ ] Blog post categories and archives
- [ ] Newsletter signup

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
