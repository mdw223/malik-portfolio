# Malik Portfolio

## Overview

A personal portfolio website for a Full Stack Software Developer built as a single-page application with a separate blog section. The site showcases projects, work experience, resume, and provides a contact form. It follows a modern developer portfolio aesthetic inspired by Linear and Vercel, with clean typography, strategic use of visual elements, and full dark/light theme support.

## User Preferences

Preferred communication style: Simple, everyday language.

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

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # React components (sections, UI)
│   │   ├── pages/        # Page components (Home, Blog)
│   │   ├── lib/          # Utilities, data, theme provider
│   │   └── hooks/        # Custom React hooks
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   └── storage.ts    # Data access layer
├── shared/           # Shared code between client/server
│   └── schema.ts     # Database schemas and TypeScript types
└── migrations/       # Drizzle database migrations
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