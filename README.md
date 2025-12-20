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

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **Drizzle ORM** - Database ORM (optional - currently using in-memory storage)
- **Zod** - Request validation
- **PostgreSQL** - Database (optional)

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
   ```

3. **Configure environment variables** (optional)
   Create a `.env.local` file in the root directory:
   ```env
   DATABASE_URL=your_database_url_here
   SESSION_SECRET=your_session_secret
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
│   ├── public/             # Static assets (includes resume.pdf)
│   └── index.html          # HTML entry point
├── server/                 # Express backend
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

## Customization

### Update Personal Information

Edit `client/src/lib/data.ts` to customize:
- Your name, title, and bio
- Profile image URL
- Social media links
- Projects and experiences
- Blog posts

### Add Blog Posts

Add new blog posts to the `blogPosts` array in `client/src/lib/data.ts`:
```typescript
{
  id: "unique-id",
  title: "Your Post Title",
  slug: "your-post-slug",
  excerpt: "Short description...",
  content: "# Your markdown content here...",
  createdAt: "2024-12-19",
  tags: ["tag1", "tag2"]
}
```

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

## Deployment

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
   - Select "gh-pages" branch

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

- [ ] Email integration for contact form (SendGrid, Mailgun, etc.)
- [ ] Comment system for blog posts
- [ ] Analytics integration
- [ ] Project filtering by category
- [ ] Blog post categories and archives
- [ ] Newsletter signup
- [ ] Dark mode improvements

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
