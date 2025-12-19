import type { Project, Experience, BlogPost, PersonalInfo } from "@shared/schema";

export const personalInfo: PersonalInfo = {
  name: "Malik Wensman",
  title: "Full Stack Developer",
  bio: "Passionate Senior in Computer Science and software engineer at startup where I build Axiom Workspace, an easy-to-use affordable CRM for small businesses.",
  profileImage: "https://avatars.githubusercontent.com/u/151095055?v=4",
  bullets: [
    "Full Stack Software Enginer at Axiom Software",
    "Senior in Computer Science, Norht Carolina State University",
    "Passionate about ethical tech, AI, and Cybersecurity",
    "Building impactful solutions"
  ],
  linkedIn: "https://linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
  youtube: "https://youtube.com/@johndoe",
  calendlyUrl: "https://calendly.com/tritechs",
  email: "malik.code@proton.me",
  axiomWorkspaceUrl: "https://axiomworkspace.com/"
};

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Code Assistant",
    description: "An intelligent code completion tool powered by GPT-4 that helps developers write better code faster. Features include real-time suggestions, code explanations, and bug detection.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
    demoUrl: "https://demo.example.com/ai-assistant",
    githubUrl: "https://github.com/johndoe/ai-code-assistant",
    blogUrl: "/blog/ai-code-assistant"
  },
  {
    id: "2",
    title: "TaskFlow Pro",
    description: "A modern project management application with Kanban boards, time tracking, and team collaboration features. Built with React and Node.js.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    demoUrl: "https://taskflow.example.com",
    githubUrl: "https://github.com/johndoe/taskflow-pro",
    blogUrl: "/blog/taskflow-pro"
  },
  {
    id: "3",
    title: "CryptoTracker",
    description: "Real-time cryptocurrency portfolio tracker with price alerts, market analysis, and portfolio performance insights.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop",
    demoUrl: "https://crypto.example.com",
    githubUrl: "https://github.com/johndoe/crypto-tracker"
  },
  {
    id: "4",
    title: "DevBlog Engine",
    description: "A minimalist blogging platform designed for developers. Supports markdown, syntax highlighting, and SEO optimization out of the box.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/johndoe/devblog-engine",
    blogUrl: "/blog/devblog-engine"
  },
  {
    id: "5",
    title: "Weather Widget",
    description: "A beautiful, customizable weather widget that can be embedded in any website. Features 5-day forecasts and location-based weather data.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    demoUrl: "https://weather.example.com",
    githubUrl: "https://github.com/johndoe/weather-widget"
  },
  {
    id: "6",
    title: "API Gateway",
    description: "A lightweight API gateway with rate limiting, authentication, and request logging. Perfect for microservices architectures.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/johndoe/api-gateway",
    blogUrl: "/blog/api-gateway"
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp Inc.",
    position: "Senior Software Engineer",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop",
    period: "Jan 2022 - Present",
    description: "Leading the frontend architecture team, building scalable React applications. Mentoring junior developers and establishing best practices for code quality and testing."
  },
  {
    id: "2",
    company: "StartupXYZ",
    position: "Full Stack Developer",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    period: "Jun 2019 - Dec 2021",
    description: "Built and maintained multiple microservices using Node.js and Python. Implemented CI/CD pipelines and improved deployment frequency by 300%."
  },
  {
    id: "3",
    company: "Digital Agency Co.",
    position: "Junior Developer",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17ber?w=100&h=100&fit=crop",
    period: "Aug 2017 - May 2019",
    description: "Developed responsive websites and web applications for various clients. Gained experience in JavaScript, React, and modern CSS frameworks."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    slug: "building-scalable-react-apps",
    excerpt: "Learn the best practices for building React applications that can scale to millions of users.",
    content: `# Building Scalable React Applications

When building large-scale React applications, there are several key principles to keep in mind.

## Component Architecture

The foundation of any scalable React app is a well-thought-out component architecture. Here are some tips:

### 1. Keep Components Small and Focused

Each component should do one thing and do it well. If a component is getting too large, break it down into smaller sub-components.

\`\`\`jsx
// Good: Small, focused component
function UserAvatar({ user }) {
  return (
    <img 
      src={user.avatarUrl} 
      alt={user.name}
      className="rounded-full w-10 h-10"
    />
  );
}
\`\`\`

### 2. Use Custom Hooks for Logic

Extract complex logic into custom hooks to keep your components clean and make logic reusable.

\`\`\`jsx
function useUserData(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUser(userId).then(data => {
      setUser(data);
      setLoading(false);
    });
  }, [userId]);
  
  return { user, loading };
}
\`\`\`

## State Management

For large applications, consider using:
- **React Context** for theme, auth, and other global state
- **TanStack Query** for server state
- **Zustand** or **Jotai** for complex client state

## Performance Optimization

- Use \`React.memo\` for expensive components
- Implement virtualization for long lists
- Code-split with \`React.lazy\`

Happy coding!`,
    createdAt: "2024-12-15",
    tags: ["React", "JavaScript", "Architecture"]
  },
  {
    id: "2",
    title: "Getting Started with TypeScript",
    slug: "getting-started-typescript",
    excerpt: "A beginner-friendly guide to TypeScript and why you should use it in your next project.",
    content: `# Getting Started with TypeScript

TypeScript has become the standard for building robust JavaScript applications. Here's why you should consider it.

## What is TypeScript?

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing and class-based object-oriented programming.

## Why Use TypeScript?

### 1. Catch Errors Early

TypeScript catches errors at compile time rather than runtime:

\`\`\`typescript
function greet(name: string) {
  return \`Hello, \${name}!\`;
}

greet(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
\`\`\`

### 2. Better IDE Support

With TypeScript, you get:
- Intelligent code completion
- Inline documentation
- Refactoring support

### 3. Self-Documenting Code

Types serve as documentation:

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

function createUser(data: Omit<User, 'id' | 'createdAt'>): User {
  return {
    ...data,
    id: generateId(),
    createdAt: new Date()
  };
}
\`\`\`

## Getting Started

1. Install TypeScript: \`npm install typescript\`
2. Create a tsconfig.json
3. Start writing .ts files!

Happy typing!`,
    createdAt: "2024-12-10",
    tags: ["TypeScript", "JavaScript", "Tutorial"]
  },
  {
    id: "3",
    title: "Modern CSS Techniques",
    slug: "modern-css-techniques",
    excerpt: "Explore the latest CSS features that will change how you style your websites.",
    content: `# Modern CSS Techniques

CSS has evolved significantly. Let's explore some modern techniques.

## CSS Grid

CSS Grid is perfect for two-dimensional layouts:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

## CSS Custom Properties

Variables in CSS are now a reality:

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --spacing-unit: 8px;
}

.button {
  background: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
}
\`\`\`

## Container Queries

Style elements based on their container size:

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}
\`\`\`

## The :has() Selector

Finally, a parent selector in CSS:

\`\`\`css
/* Style form when it contains an invalid input */
form:has(input:invalid) {
  border-color: red;
}
\`\`\`

These techniques will help you write cleaner, more maintainable CSS!`,
    createdAt: "2024-12-05",
    tags: ["CSS", "Web Development", "Design"]
  },
  {
    id: "4",
    title: "AI Code Assistant Deep Dive",
    slug: "ai-code-assistant",
    excerpt: "How I built an AI-powered code assistant using GPT-4 and what I learned along the way.",
    content: `# Building an AI Code Assistant

In this post, I'll share my experience building an AI-powered code assistant.

## The Vision

I wanted to create a tool that could:
- Provide intelligent code completions
- Explain complex code
- Detect potential bugs
- Suggest improvements

## Technical Stack

- **Frontend**: React with Monaco Editor
- **Backend**: Node.js with Express
- **AI**: OpenAI GPT-4 API
- **Database**: PostgreSQL for user sessions

## Key Challenges

### 1. Context Management

The biggest challenge was managing context. GPT-4 has a token limit, so we needed to be smart about what context to include.

### 2. Latency

AI responses can be slow. We implemented streaming responses to improve perceived performance.

### 3. Cost Optimization

API calls add up quickly. We implemented caching and request batching to reduce costs.

## Results

The tool has helped developers:
- Write code 40% faster
- Reduce bugs by 25%
- Learn new patterns and best practices

Check out the demo to see it in action!`,
    createdAt: "2024-11-28",
    tags: ["AI", "GPT-4", "Developer Tools"]
  }
];
