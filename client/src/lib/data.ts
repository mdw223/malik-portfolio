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
  linkedIn: "https://www.linkedin.com/in/malik-wensman/",
  github: "https://github.com/mdw223",
  youtube: "https://www.youtube.com/@MalikDiallo223",
  calendlyUrl: "https://calendly.com/tritechs",
  email: "malik.code@proton.me",
  axiomWorkspaceUrl: "https://axiomworkspace.com/"
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Calendly API Endpoint Security",
    description: "Developed a complete Calendly integration with secure signature verification for an enterprise Axiom Workspace CRM.",
    image: "https://i9.ytimg.com/vi/eilpiJ-940U/mqdefault.jpg?v=69348dc6&sqp=CLTIlsoG&rs=AOn4CLATQpoF4TE6EfS4lnMgLH4ZHxqTIg",
    demoUrl: "https://youtu.be/eilpiJ-940U",
    githubUrl: "",
    blogUrl: "",
    linkedInPostUrl: "https://www.linkedin.com/posts/malik-wensman_calendly-api-endpoint-security-activity-7403165773868986369-z5Wu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAT0DkBVrs7qFEEM0SXcuYm5yaUhOp2fkg"
  },
  {
    id: "2",
    title: "Gmail Pubsub Api Endpoint Security",
    description: "Robust security for Axiom Workspace CRM's Gmail Pubsub Api endpoint, protecting our real-time email notifications.",
    image: "https://i9.ytimg.com/vi/rWLARWdb5Cg/mqdefault.jpg?v=69338907&sqp=CIzNlsoG&rs=AOn4CLBTjLdmm-jV6LSwYonhIJ51SPKYPg",
    demoUrl: "https://youtu.be/rWLARWdb5Cg",
    githubUrl: "",
    blogUrl: "",
    linkedInPostUrl: "https://www.linkedin.com/posts/malik-wensman_gmail-pubsub-api-endpoint-security-activity-7402886209502609409-8CBX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAT0DkBVrs7qFEEM0SXcuYm5yaUhOp2fkg"
  },
  {
    id: "3",
    title: "Gmail Integration",
    description: "implemented Gmail API in Axiom Workspace, from sending emails, contact syncing, database, pubsub, Oauth2, and hangfire.",
    image: "https://i9.ytimg.com/vi_webp/jEafSZkSwiw/mq1.webp?sqp=CLjPlsoG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBMgEyh_MA8=&rs=AOn4CLBGOCKYuaRzY_aSjWn-41DEuH0xQg",
    demoUrl: "https://youtu.be/jEafSZkSwiw",
    linkedInPostUrl: "https://www.linkedin.com/posts/malik-wensman_gmail-api-full-stack-demo-activity-7400713996967833600-adt6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAT0DkBVrs7qFEEM0SXcuYm5yaUhOp2fkg"
  },
  {
    id: "4",
    title: "slice325 Learning Management System",
    description: "Built a learning management system, leveraged Hugo static site generator with markdown quiz plugins to create a maintainable, no-cost LMS solution at the Making Progress Charity Hackathon.",
    image: "https://slice325.org/wp-content/uploads/2019/05/cropped-SLICE325-Logo-1.png",
    githubUrl: "https://github.com/mdw223/slice325",
    demoUrl: "https://mdw223.github.io/slice325/",
    linkedInPostUrl: "https://www.linkedin.com/posts/malik-wensman_hackathon-webdevelopment-lms-activity-7394115962871959552-gxeE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAT0DkBVrs7qFEEM0SXcuYm5yaUhOp2fkg"
  },
  {
    id: "5",
    title: "LangChain AI Chatbot",
    description: "Built a beginner-friendly AI chatbot using LangChain and LangGraph that connects to Google's Gemini AI model for conversational interactions.",
    image: "https://media.licdn.com/dms/image/sync/v2/D4E27AQEcMLb22Gecbw/articleshare-shrink_480/B4EZqeaH_kIQAo-/0/1764807834965?e=1766768400&v=beta&t=iff_BWlAdmHUpndRWieCvcttnyVnTl1sZrdWoFEIdkM",
    demoUrl: "",
    githubUrl: "https://github.com/mdw223/langchain_chatbot",
    linkedInPostUrl: "https://www.linkedin.com/posts/malik-wensman_github-mdw223langchainchatbot-activity-7397050529106780160-A_XX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAT0DkBVrs7qFEEM0SXcuYm5yaUhOp2fkg"
  },
  {
    id: "6",
    title: "Calendly Integration",
    description: "Built complete Calendly integration with webhook subscription management with comprehensive event lifecycle management (creation, rescheduling, cancellation)",
    image: "https://i9.ytimg.com/vi/jxsZmXSKSRE/mqdefault.jpg?v=68efd94e&sqp=CJDUlsoG&rs=AOn4CLDCl9KZ8P4I45eyLtz-na_fUltChw",
    demoUrl: "https://youtu.be/jxsZmXSKSRE"
  },
  {
    id: "7",
    title: "Enterprise CRM Favorites System Implementation",
    description: "Developed a multi-entity favorites system with scalable, full-stack architecture and an intuitive star-based UI for improved user interaction.",
    image: "https://i9.ytimg.com/vi_webp/-unKlswz4zU/mq3.webp?sqp=CLzWlsoG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGMgYyhjMA8=&rs=AOn4CLBFDZELOKIpidOI62-80LTbGBfYXw",
    demoUrl: "https://youtu.be/-unKlswz4zU",
    linkedInPostUrl: "https://www.linkedin.com/posts/malik-wensman_axiomsoftware-fullstackdevelopment-angular-activity-7358667071192190976-6owY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAT0DkBVrs7qFEEM0SXcuYm5yaUhOp2fkg"
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Axiom Software",
    position: "Full-Stack Software Developer",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEgJOq9lM-34Q/company-logo_100_100/company-logo_100_100/0/1630605341915?e=1767830400&v=beta&t=pUcLuD7hA4uvxggdm9iheTPU_pyWjYx_9Uly9Nfocd0",
    period: "Feb 2025 - Present",
    description: "Developed a sophisticated CRM enhancement with multi-module integrations using Angular, C#, and SQL Server, featuring advanced webhooks, authentication, and scalable database architectures. Implemented complex features including Google, Microsoft, and Calendly integrations."
  },
  {
    id: "2",
    company: "North Carolina State University",
    position: "Computer Science (BS)",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGaD7AuaL571Q/company-logo_100_100/company-logo_100_100/0/1645128364859/north_carolina_state_university_logo?e=1767830400&v=beta&t=XoZUnLQ2fIcvOm6wtv1uIfvxVVpb3FWW9IrV9RU4vIs",
    period: "Aug 2022 - Present",
    description: "A Senior, focusing on software development, programming languages, database management, and cybersecurity."
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
