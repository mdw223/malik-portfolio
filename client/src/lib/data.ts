import type { Project, Experience, BlogPost, PersonalInfo } from "@shared/schema";
import whisperBlogContent from "../content/faster-whisper-push-to-talk-setup-on-linux.md?raw";
import cursorfulBlogContent from "../content/how-i-implemented-a-linux-alternative-to-cursorful-screen-recording.md?raw";


export const personalInfo: PersonalInfo = {
  name: "Malik Wensman",
  title: "Full Stack Developer",
  bio: "Passionate Senior in Computer Science and software engineer at startup where I build Axiom Workspace, an easy-to-use affordable CRM for small businesses.",
  profileImage: "https://avatars.githubusercontent.com/u/151095055?v=4",
  bullets: [
    "Full Stack Software Enginer at Axiom Software",
    "Senior in Computer Science, North Carolina State University",
    "Passionate about Ethical AI, Automation, and Cybersecurity",
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
    id: "11",
    title: "blinkDoc",
    description: "Secure PDF viewer DRM for LMS integrations. PDFs are rasterized server-side into watermarked 256×256 tiles and served through a sandboxed iframe—the raw PDF never reaches the browser.",
    image: "/blinkdoc.png",
    liveWebsiteUrl: "https://blinkdoc.click/",
    githubUrl: "https://github.com/mdw223/blinkDoc",
  },
  {
    id: "10",
    title: "Islamic Calendar Sync",
    description: "Full-stack PWA that helps Muslims stay in sync with the Islamic calendar—generate Hijri events, export .ics files, or subscribe to live calendar feeds with OAuth, offline IndexedDB, and Docker deployment.",
    image: "/ics.png",
    liveWebsiteUrl: "https://www.islamiccalendarsync.com/",
    githubUrl: "https://github.com/mdw223/Islamic-Calendar-Sync",
  },
  {
    id: "9",
    title: "Local Whisper Push-to-Talk on Linux",
    description: "Built offline voice-to-text on Linux with faster-whisper: hotkey to record, transcribe locally, and deliver text via clipboard on Wayland or auto-paste on X11—no API costs.",
    image: "https://i.ytimg.com/vi/dNKCJZ8kjkw/maxresdefault.jpg",
    demoUrl: "https://youtu.be/dNKCJZ8kjkw?si=BAJBM1K4HlXzveOU",
    blogUrl: "/blog/faster-whisper-push-to-talk-setup-on-linux",
    linkedInPostUrl: "https://www.linkedin.com/posts/malik-wensman_linux-opensource-whisper-ugcPost-7474239216336474112-2rx6/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAT0DkBVrs7qFEEM0SXcuYm5yaUhOp2fkg"
  },
  {
    id: "8",
    title: "Linux Autozoom Screen Recording",
    description: "Found a Cursorful-style autozoom workflow on Linux after weeks of Wayland/X11 troubleshooting—Screenix for native desktop demos and Cursorfly for browser recordings.",
    image: "/cursorfly.png",
    blogUrl: "/blog/how-i-implemented-a-linux-alternative-to-cursorful-screen-recording",
    linkedInPostUrl: "https://www.linkedin.com/posts/malik-wensman_linux-wayland-x11-share-7474235842400694272-5-n8/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAT0DkBVrs7qFEEM0SXcuYm5yaUhOp2fkg",
  },
  {
    id: "7",
    title: "Calendly API Endpoint Security",
    description: "Developed a complete Calendly integration with secure signature verification for an enterprise Axiom Workspace CRM.",
    image: "https://i.ytimg.com/vi/eilpiJ-940U/maxresdefault.jpg",
    demoUrl: "https://youtu.be/eilpiJ-940U",
    linkedInPostUrl: "https://www.linkedin.com/posts/malik-wensman_calendly-api-endpoint-security-activity-7403165773868986369-z5Wu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAT0DkBVrs7qFEEM0SXcuYm5yaUhOp2fkg",
  },
  {
    id: "6",
    title: "Gmail Pub/Sub API Endpoint Security",
    description: "Robust security for Axiom Workspace CRM's Gmail Pub/Sub API endpoint, protecting real-time email notifications.",
    image: "https://i.ytimg.com/vi/rWLARWdb5Cg/maxresdefault.jpg",
    demoUrl: "https://youtu.be/rWLARWdb5Cg",
    linkedInPostUrl: "https://www.linkedin.com/posts/malik-wensman_gmail-pubsub-api-endpoint-security-activity-7402886209502609409-8CBX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAT0DkBVrs7qFEEM0SXcuYm5yaUhOp2fkg",
  },
  {
    id: "5",
    title: "Gmail Integration",
    description: "Implemented Gmail API in Axiom Workspace—from sending emails and contact syncing to database design, Pub/Sub, OAuth2, and Hangfire.",
    image: "https://i.ytimg.com/vi/jEafSZkSwiw/maxresdefault.jpg",
    demoUrl: "https://youtu.be/jEafSZkSwiw",
    linkedInPostUrl: "https://www.linkedin.com/posts/malik-wensman_gmail-api-full-stack-demo-activity-7400713996967833600-adt6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAT0DkBVrs7qFEEM0SXcuYm5yaUhOp2fkg",
  },
  {
    id: "4",
    title: "slice325 Learning Management System",
    description: "Built a learning management system with Hugo and markdown quiz plugins to create a maintainable, no-cost LMS at the Making Progress Charity Hackathon.",
    image: "https://slice325.org/wp-content/uploads/2019/05/cropped-SLICE325-Logo-1.png",
    githubUrl: "https://github.com/mdw223/slice325",
    liveWebsiteUrl: "https://mdw223.github.io/slice325/",
    linkedInPostUrl: "https://www.linkedin.com/posts/malik-wensman_hackathon-webdevelopment-lms-activity-7394115962871959552-gxeE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAT0DkBVrs7qFEEM0SXcuYm5yaUhOp2fkg",
  },
  {
    id: "3",
    title: "LangChain AI Chatbot",
    description: "Built a beginner-friendly AI chatbot using LangChain and LangGraph that connects to Google's Gemini AI model for conversational interactions.",
    image: "https://media.licdn.com/dms/image/sync/v2/D4E27AQEcMLb22Gecbw/articleshare-shrink_800/B4EZqeaH_kIQAI-/0/1767263009271?e=2147483647&v=beta&t=J0qRucSLIT75A7NI63iWA6SJh85kEd29H7Rx0HepL18",
    githubUrl: "https://github.com/mdw223/langchain_chatbot",
    linkedInPostUrl: "https://www.linkedin.com/posts/malik-wensman_github-mdw223langchainchatbot-activity-7397050529106780160-A_XX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAT0DkBVrs7qFEEM0SXcuYm5yaUhOp2fkg",
    blogUrl: "/blog/learning-ai-ibm-orlando",
  },
  {
    id: "2",
    title: "Calendly Integration",
    description: "Built complete Calendly integration with webhook subscription management and comprehensive event lifecycle handling (creation, rescheduling, cancellation).",
    image: "https://i.ytimg.com/vi/jxsZmXSKSRE/maxresdefault.jpg",
    demoUrl: "https://youtu.be/jxsZmXSKSRE",
    blogUrl: "/blog/calendly-web-app-integration",
  },
  {
    id: "1",
    title: "Enterprise CRM Favorites System",
    description: "Developed a multi-entity favorites system with scalable full-stack architecture and an intuitive star-based UI for improved user interaction.",
    image: "https://i.ytimg.com/vi/-unKlswz4zU/maxresdefault.jpg",
    demoUrl: "https://youtu.be/-unKlswz4zU",
    linkedInPostUrl: "https://www.linkedin.com/posts/malik-wensman_axiomsoftware-fullstackdevelopment-angular-activity-7358667071192190976-6owY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAT0DkBVrs7qFEEM0SXcuYm5yaUhOp2fkg",
  },
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
    title: "Barakah Tech Journey",
    slug: "barakah-tech-journey",
    excerpt: "My goal in my tech journey and what it means to have barakah in your career.",
    content: `# Building a Meaningful Career in Tech with Purpose, Values, and Excellence

This is a blog post about my journey in seeking barakah - where technical excellence meets intentional purpose, and career growth aligns with community impact.

## What is Barakah?

**Barakah** (بركة) is an Arabic word that translates to "blessing" or "divine abundance." But it's so much more than material prosperity. Barakah represents a spiritual richness that permeates our work, relationships, and daily lives. It's the quality that makes little feel like much, transforms ordinary efforts into lasting impact, and brings contentment that no salary can buy.

When we have barakah in our work, our efforts multiply in ways we never imagined. Time feels more productive, challenges become opportunities for growth, and our contributions ripple outward to benefit our communities in meaningful ways.

## The Crisis of Purpose in Tech

Today's job market has left many young professionals in tech feeling desperate—willing to work anywhere, for anyone, doing anything, just to get that first role or next opportunity. I've felt this pressure myself. The tech industry's materialistic culture constantly pushes us to chase higher salaries, prestigious titles, and impressive company names, often at the expense of our core values and principles.

We're told to optimize our resumes, game the interview process, and maximize our compensation packages. But somewhere in this race, many of us lose sight of a fundamental question: *What are we actually building, and who are we building it for?*

## My Choice: Purpose Over Prestige

Currently, I'm a Computer Science senior at NC State University and I work as a Full-Stack Software Engineer at Axiom Software—a startup you've probably never heard of. When I had the opportunity to join Axiom, I made a deliberate choice that went against conventional wisdom in tech recruiting.

I chose to work for a startup that has a clear vision: **to help build and invest in the Muslim community**. While others were chasing FAANG offers and unicorn startups, I found something more valuable—a company that aligns with my values and contributes to the growth and empowerment of my community.

At Axiom, I'm not just building features; I'm creating tools that help organizations serve our community better. Whether it's developing CRM integrations, building email campaign systems, or implementing prospect management dashboards, every line of code serves a higher purpose.

## Three Pillars of Barakah in Work

Through my journey, I've learned that seeking barakah in our careers requires commitment to three fundamental principles:

### 1. Positively Impact Your Community
Our work should serve something greater than ourselves. Whether we're building software, teaching, or serving in any capacity, we should ask: *How does this benefit the people around me? How does this strengthen my community?* 

Technology has immense power to uplift communities, but only when we intentionally direct it toward that purpose.

### 2. Never Compromise Your Values
The pressure to compromise is real. The job market will tempt you to work on projects that contradict your principles, to accept cultures that erode your character, or to chase opportunities that enrich your bank account while impoverishing your soul.

Seeking barakah means drawing clear lines and having the courage to say no—even when it's difficult, even when others don't understand.

### 3. Strive for Excellence (Ihsan)
**Ihsan** (إحسان) means excellence, perfection, and doing beautiful work—as if you're being watched by the Divine. It's the principle of giving your absolute best in everything you do, not for recognition or reward, but because excellence itself is an act of worship.

In tech, this means writing clean code, thinking deeply about user experience, mentoring others generously, and approaching every task with integrity and craftsmanship.

## What This Blog Is About

This blog is my attempt to document the journey of seeking barakah while building a career in tech. I'll write about:

- **Technical lessons** from my work at Axiom—the challenges of full-stack development, API integrations, database design, and real-world problem-solving
- **Career reflections** on navigating the tech industry with intentionality and values
- **Community building** and how technology can serve as a tool for positive impact
- **Personal growth** as I learn to balance ambition with contentment, progress with principle

I won't pretend to have all the answers. I'm still early in my journey, still learning, still making mistakes. But I'm committed to pursuing a path that prioritizes meaning over money, purpose over prestige, and barakah over the hollow metrics of success that our industry celebrates.

## Join the Journey

If you're also trying to find barakah in your work—whether in tech or any other field—I hope these reflections resonate with you. Let's build careers that don't just advance our own interests, but elevate our communities and honor our values.

May our work be filled with barakah, and may we find success in both this life and the next.
`,
    createdAt: "2025-10-10",
    tags: ["Purpose", "Motivation", "Intention"]
  },
  {
    id: "2",
    title: "Calendly Web App Integration",
    slug: "calendly-web-app-integration",
    excerpt: "How to Implement Calendly Integration into Your Web Application.",
    content: `# How to Implement Calendly Integration into Your Web Application
Integrating Calendly into your web application can streamline meeting scheduling and automatically sync calendar events with your CRM or internal systems. This guide walks through the complete implementation process, from OAuth authentication to webhook processing.

## Overview

A complete Calendly integration involves three main phases:
1. **OAuth Authentication** - Authorize your application to access Calendly data
2. **Webhook Subscription** - Set up real-time notifications for calendar events
3. **Webhook Processing** - Receive and process event data in your application

## Phase 1: Setting Up Your Calendly Application

### Create a Developer Account

First, you'll need to create a Calendly developer account and register your application:

1. Sign up for a developer account at [Calendly Developer Console](https://developer.calendly.com/console/apps)
2. Create a new OAuth application and configure:
   - **Application Name**: Your app's name
   - **Application Type**: Web or Native
   - **Environment**: Start with Sandbox for development, then create a Production app when ready
   - **Redirect URI**: 
     - Sandbox: HTTP with localhost is allowed (e.g., \`http://localhost:1234\`)
     - Production: Must use HTTPS (e.g., \`https://yourdomain.com/auth/calendly\`)

3. Save your credentials - you'll receive:
   - Client ID
   - Client Secret
   - Webhook Signing Key (critical for security - you can only view this once!)

**Documentation**: [Create a Developer Account](https://developer.calendly.com/create-a-developer-account)

## Phase 2: Implementing OAuth Authentication

### Step 1: Get Authorization Code

Redirect users to Calendly's authorization page to grant access to your application:

\`\`\`
https://auth.calendly.com/oauth/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=https://yourdomain.com/auth/calendly
\`\`\`

**Parameters**:
- \`client_id\` - Your application's Client ID
- \`response_type\` - Always "code"
- \`redirect_uri\` - Must match the URI registered in your app settings

When users grant access, Calendly redirects to your specified URI with the authorization code:

\`\`\`
https://yourdomain.com/auth/calendly?code=f04281d639d8248435378b0365de7bd1f53bf452eda187d5f1e07ae7f04546d6
\`\`\`

**Documentation**: [Get Authorization Code](https://developer.calendly.com/api-docs/60a14408d6743-get-authorization-code)

### Step 2: Exchange Code for Access Token

Make a POST request to exchange the authorization code for an access token:

**Endpoint**: \`POST https://auth.calendly.com/oauth/token\`

**Request Body**:
\`\`\`json
{
  "grant_type": "authorization_code",
  "code": "AUTHORIZATION_CODE_FROM_STEP_1",
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET",
  "redirect_uri": "https://yourdomain.com/auth/calendly"
}
\`\`\`

**Response**:
\`\`\`json
{
  "access_token": "eyJraWQiOiIxY2UxZTEzNjE...",
  "refresh_token": "eyJraWQiOiIxY2UxZTEzNjE...",
  "token_type": "Bearer",
  "expires_in": 7200,
  "scope": "default"
}
\`\`\`

Store the access token securely - you'll need it for all subsequent API calls.

## Phase 3: Creating a Webhook Subscription

### Subscribe to Calendar Events

Create a webhook subscription to receive real-time notifications when meetings are scheduled, canceled, or modified.

**Endpoint**: \`POST https://api.calendly.com/webhook_subscriptions\`

**Headers**:
\`\`\`
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
\`\`\`

**Request Body**:
\`\`\`json
{
  "url": "https://yourdomain.com/api/webhook/calendly",
  "events": [
    "invitee.created",
    "invitee.canceled",
    "invitee_no_show.created",
    "invitee_no_show.deleted"
  ],
  "organization": "https://api.calendly.com/organizations/AAAAAAAAAAAAAAAA",
  "user": "https://api.calendly.com/users/BBBBBBBBBBBBBBBB",
  "scope": "user",
  "signing_key": "YOUR_WEBHOOK_SIGNING_KEY"
}
\`\`\`

**Key Parameters**:
- \`url\` - Your server endpoint that will receive webhook notifications
- \`events\` - Array of events to subscribe to:
  - \`invitee.created\` - New meeting bookings
  - \`invitee.canceled\` - Meeting cancellations
  - \`invitee_no_show.created\` - No-show events
  - \`routing_form_submission.created\` - Routing form submissions (organization scope only)
- \`scope\` - Either "user" (individual events) or "organization" (all team events)
- \`signing_key\` - Your webhook signing key for payload verification

**Documentation**: 
- [Create Webhook Subscription](https://developer.calendly.com/api-docs/c1ddc06ce1f1b-create-webhook-subscription)
- [Webhook Subscriptions Guide](https://developer.calendly.com/receive-data-from-scheduled-events-in-real-time-with-webhook-subscriptions)

## Phase 4: Processing Webhook Notifications

### Webhook Payload Structure

When an event occurs, Calendly sends a POST request to your webhook URL with this structure:

\`\`\`json
{
  "created_at": "2020-11-23T17:51:19.000000Z",
  "created_by": "https://api.calendly.com/users/AAAAAAAAAAAAAAAA",
  "event": "invitee.created",
  "payload": {
    "uri": "https://api.calendly.com/scheduled_events/AAAAAAAAAAAAAAAA/invitees/AAAAAAAAAAAAAAAA",
    "email": "test@example.com",
    "name": "John Doe",
    "status": "active",
    "timezone": "America/New_York",
    "scheduled_event": {
      "uri": "https://api.calendly.com/scheduled_events/GBGBDCAADAEDCRZ2",
      "name": "15 Minute Meeting",
      "status": "active",
      "start_time": "2019-08-24T14:15:22.123456Z",
      "end_time": "2019-08-24T14:15:22.123456Z",
      "location": {
        "type": "physical",
        "location": "string"
      },
      "event_memberships": [
        {
          "user": "https://api.calendly.com/users/GBGBDCAADAEDCRZ2",
          "user_email": "user@example.com",
          "user_name": "John Smith"
        }
      ],
      "event_guests": []
    }
  }
}
\`\`\`

**Documentation**: [Webhook Payload](https://developer.calendly.com/api-docs/69c58da556b61-webhook-payload)

### Verifying Webhook Signatures

**Critical**: Always verify webhook signatures to ensure requests are authentic and haven't been tampered with.

Calendly includes a \`Calendly-Webhook-Signature\` header with each webhook:

\`\`\`
Calendly-Webhook-Signature: t=1492774577,v1=5257a869e7ecebeda32affa62cdca3fa51cad7e77a0e56ff536d0ce8e108d8bd
\`\`\`

**Verification Steps**:

1. Extract the timestamp (\`t\`) and signature (\`v1\`) from the header
2. Create the signed payload: \`timestamp + "." + JSON.stringify(requestBody)\`
3. Compute HMAC-SHA256 hash using your signing key
4. Compare the computed signature with the received signature
5. Verify the timestamp is within your tolerance window (e.g., 3 minutes)

**Example Implementation (Node.js)**:

\`\`\`javascript
const crypto = require('crypto');

const webhookSigningKey = process.env.WEBHOOK_SIGNING_KEY;
const calendlySignature = req.get('Calendly-Webhook-Signature');

// Parse signature header
const { t, signature } = calendlySignature.split(',').reduce((acc, current) => {
  const [key, value] = current.split('=');
  if (key === 't') acc.t = value;
  if (key === 'v1') acc.signature = value;
  return acc;
}, { t: '', signature: '' });

// Create signed payload
const data = t + '.' + JSON.stringify(req.body);

// Compute expected signature
const expectedSignature = crypto
  .createHmac('sha256', webhookSigningKey)
  .update(data, 'utf8')
  .digest('hex');

// Verify signature matches
if (expectedSignature !== signature) {
  throw new Error('Invalid Signature');
}

// Prevent replay attacks - reject old timestamps
const threeMinutes = 180000;
const timestampMilliseconds = Number(t) * 1000;

if (timestampMilliseconds < Date.now() - threeMinutes) {
  throw new Error('Signature timestamp outside tolerance zone');
}
\`\`\`

**Documentation**: [Webhook Signatures](https://developer.calendly.com/api-docs/4c305798a61d3-webhook-signatures)

## Phase 5: Processing Event Data

### Extracting Useful Information

From the webhook payload, you can extract:

**Event Details**:
- Meeting title (\`payload.scheduled_event.name\`)
- Start/end times (\`payload.scheduled_event.start_time\`, \`end_time\`)
- Location (\`payload.scheduled_event.location\`)
- Meeting notes (\`payload.scheduled_event.meeting_notes_plain\`)

**Invitee Information**:
- Name and email (\`payload.name\`, \`payload.email\`)
- First/last name (if configured separately)
- Timezone (\`payload.timezone\`)
- Custom question responses (\`payload.questions_and_answers\`)

**Host/Attendee Details**:
- Event memberships (\`payload.scheduled_event.event_memberships\`)
- Additional guests (\`payload.scheduled_event.event_guests\`)

### Common Implementation Patterns

**1. Contact Management**: Create or update contacts in your CRM from invitee data

**2. Calendar Synchronization**: Store events in your database with:
- URI-based unique identification (handles rescheduling)
- IsActive flags for soft deletion of canceled events
- Proper host/invitee relationship tracking

**3. Activity Logging**: Generate activity records for all event participants

**4. User Interface Integration**: Display events in:
- Main calendar views
- Contact activity feeds
- Dashboard widgets

## Architecture Recommendations

### Backend Components

**1. Webhook Controller**: 
- Validate signatures
- Deserialize payloads
- Route to appropriate handlers

**2. Event Manager**:
- Process event lifecycle (create, reschedule, cancel)
- Manage recipients and relationships
- Handle URI-based event tracking

**3. Data Layer**:
- Store calendar events
- Track event recipients (hosts, invitees, guests)
- Maintain integration settings

### Database Schema

Consider these tables:

**CalendarEvent**:
- URI (unique identifier)
- Title, start/end times, location
- Integration source
- IsActive flag for soft deletion

**CalendarEventRecipient**:
- Event relationship
- Contact information
- Role (host/invitee/guest)

**IntegrationSite**:
- User/organization association
- OAuth credentials
- Webhook signing keys (encrypted)

## Security Best Practices

1. **Always verify webhook signatures** - Never trust unverified webhooks
2. **Implement replay attack prevention** - Use timestamp validation
3. **Encrypt sensitive data** - Store API keys and signing keys encrypted
4. **Use HTTPS** - Required for production webhook endpoints
5. **Rate limiting** - Implement rate limits on your webhook endpoint
6. **Error handling** - Log errors but avoid exposing sensitive information

## Testing Your Integration

### Development Tips

1. Start with Calendly's **Sandbox environment** for testing
2. Use tools like **ngrok** to expose localhost for webhook testing
3. Log all webhook payloads during development
4. Test all event types: create, reschedule, cancel, no-show

### Common Gotchas

- **Rescheduling creates new events**: Use URI-based tracking to link rescheduled events
- **Signature verification timing**: Always validate before processing
- **Timezone handling**: Store times in UTC, display in user's timezone
- **Multiple guests**: Process both event_memberships and event_guests arrays

## Conclusion

Implementing Calendly integration provides seamless calendar synchronization and eliminates manual data entry. By following OAuth best practices, properly verifying webhooks, and handling all event types, you can build a robust integration that enhances your application's scheduling capabilities.

### Key Takeaways

- Register your app in Calendly Developer Console
- Implement proper OAuth flow with secure token storage
- Create webhook subscriptions for real-time event notifications
- Always verify webhook signatures to ensure authenticity
- Handle all event lifecycle stages (create, reschedule, cancel)
- Store events with URI-based unique identification

### Additional Resources

- [Calendly API Documentation](https://developer.calendly.com)
- [Developer Console](https://developer.calendly.com/console/apps)
- [API Reference](https://developer.calendly.com/api-docs)
- [Community Forum](https://community.calendly.com)

Happy integrating! 🚀
`,
    createdAt: "2025-10-12",
    tags: ["Calendly", "Integration", "API", "Documentation"]
  },
  {
    id: "3",
    title: "Learning AI at IBM TechXchange Orlando 2025",
    slug: "learning-ai-ibm-orlando",
    excerpt: "Key Learnings & AI Agent Development Guide from IBM TechXchange Orlando 2025",
    content: `# Key Learnings & AI Agent Development Guide

## Page 1: Core Insights and Industry Trends

### Career Development & Technology Adaptation
**Always learn new technology and stay ahead. Be flexible to change paths.**

The rapidly evolving AI landscape demands continuous learning and adaptability. Success in this field requires staying current with emerging frameworks, tools, and methodologies.

### AI Security
**Security in AI: How to make AI systems resistant to hacking**

As AI systems become more prevalent, securing them against adversarial attacks, prompt injection, and data poisoning becomes critical. This includes implementing proper authentication, input validation, and monitoring systems.

### The Big Opportunity: Infrastructure Integration
**Generative AI Integration into Existing Infrastructure**

The partnership between Anthropic and IBM focuses on this exact challenge: helping enterprises integrate generative AI capabilities into their existing technology stacks without complete overhauls. This represents one of the largest opportunities in the AI space today.

### Tools & Resources
- **Bob in VS Code**: A productivity tool worth exploring
- **IBM Products**: https://www.ibm.com/products

---

## Understanding AI Agents

### Core Definition
**Agent = LLM + Tools**

An AI agent is fundamentally code that combines a large language model with specific tools to process inputs and generate desired outputs in a structured manner.

### Assistant vs Agent

| **Assistant** | **Agent** |
|--------------|----------|
| Handles specific tasks | Achieves goals |
| Answers user prompts | Proactive problem-solving |
| Reactive | Proactive |

### Anatomy of an Agent
The three core functions: **Think → Act → Observe**

**Key Components:**
1. **Perception**: Understanding inputs and environment
2. **Memory**: Storing past interactions and learnings
3. **Tool Calling**: Accessing datasets, APIs, and external resources
4. **Planning**: Using prompts to direct behavior and strategy
5. **Communication**: Interacting with users or other agents
6. **Reasoning**: Making decisions based on perception and memory

---

## IBM Watsonx Orchestrate
A comprehensive platform for building, deploying, and managing AI agents.

**Features:**
- Agent marketplace for pre-built solutions
- **AgentOps**: Tools to manage and monitor agent performance
- Integration with existing workflows

---

## AI Agent Development Lifecycle

### Stages:
1. **Planning**: Define objectives and scope
2. **Design**: Architecture and interaction patterns
3. **Framework, Model & Tool Selection**: Choose appropriate tech stack
4. **Training**: Fine-tune and optimize
5. **Evaluation**: Test performance and accuracy
6. **Deployment & Monitoring**: Production rollout with ongoing observation

---

## Types of AI Agents

### 1. Simple Reflex Agent
- Operates on if-then rules
- No memory or state
- Direct input → output mapping

### 2. Model-Based Reflex Agent
- Maintains internal state for memory
- Still uses if-then logic
- Can track context

### 3. Goal-Based Agent
- Provides multiple solutions to achieve a goal
- Evaluates different paths
- More flexible than reflex agents

### 4. Utility-Based Agent
- Can select the best solution among alternatives
- Optimizes based on utility functions
- More sophisticated decision-making

### 5. Learning Agent
- **Think → Act → Observe** cycle
- Reviews past actions stored in memory
- Continuously improves performance
- Most advanced agent type

**Best Practice**: Try to make the simplest agent that solves your problem. Don't over-engineer.

---

## Agentic Reasoning Strategies

### ReAct (Reasoning + Acting)
- If answer not found, keeps prompting until it does
- Resource-intensive approach
- Requires exit conditions to prevent infinite loops
- Continuous observation and adjustment

### ReWOO (Reasoning Without Observation)
- Doesn't loop back
- More efficient resource usage
- Single-pass reasoning
- Better for straightforward tasks

### Parallelization of Agents
Multiple agents working simultaneously on different aspects of a problem.

### Orchestrator Pattern
- Central agent coordinates multiple specialized agents
- **Synthesizer agent** produces final output
- Good for complex, multi-step workflows

### Evaluator Pattern (Optimizer)
- Two agents working together iteratively
- Back-and-forth refinement
- Continuous improvement cycle

---

## Agent Communication Protocols

Modern agents need standardized ways to communicate:
- **MCP**: Model Context Protocol
- **A2A**: Agent-to-Agent communication
- **ANP**: Agent Networking Protocol
- **AG UI**: Agent User Interface protocols

---

## Agent Development Frameworks

Popular templates and libraries for building agents:
- **LangChain**: Comprehensive chain-based framework
- **LangGraph**: Graph-based agent workflows (used in our code examples)
- **CrewAI**: Multi-agent collaboration
- **BeeAI**: Behavior-driven agents
- **AutoGen**: Multi-agent conversations
- **LlamaIndex**: Data-focused agent framework

---

## Retrieval Augmented Generation (RAG)

### Traditional RAG Flow:
1. User prompt → Server
2. Server searches for top relevant results
3. Server asks model to process selected data
4. Model generates response with retrieved context

### Agentic RAG (Advanced):
1. User prompt → **Aggregation Agent**
2. Aggregation agent creates a plan
3. Works with 3 specialized agents:
   - Internet search agent
   - API agent
   - Database agent
4. Aggregation agent maintains memory
5. Synthesizes results with LLM for final output

**Advantages of Agentic RAG:**
- More sophisticated data retrieval
- Parallel processing capabilities
- Better context management
- Improved result quality

---

## Opportunities & Action Items

### Career Opportunities
**"Jobs to integrate AI and agents to existing code"**

There's massive demand for developers who can:
- Integrate agents into legacy systems
- Build custom agent solutions
- Optimize agent performance
- Ensure security and reliability

### Personal Projects
**Build some agents for Axiom!**

Apply these learnings to real-world projects. Start simple and iterate.

---

## Page 2: Code Implementation - Building AI Agents with LangGraph

[GitHub Repo to learn more on building ai agents](https://github.com/nicknochnack)

[Repo for building an AI agent using IBM orchestrate](https://github.com/andretost/techxchange-3394)

### Overview of Code Files
The provided codebase demonstrates building AI agents using multiple approaches:
1. **LangGraph** (Python framework) - \`agent.py\`
2. **IBM Watsonx Orchestrate** - \`agent.yaml\`, \`price.py\`, \`income.py\`
3. **Langflow** (no-code) - \`langflow.py\`

---

## File 1: \`agent.py\` - LangGraph Implementation

### Purpose
This file implements a chatbot agent using LangGraph with tool-calling capabilities and memory. It demonstrates the core concepts of agent architecture: state management, tool integration, and conversational flow.

### Corrected Code with Comments

\`\`\`python
from typing import Annotated
from langgraph.graph import START, END, StateGraph
from langgraph.graph.message import add_messages
from langchain_ibm import ChatWatsonx  # Fixed: was ChatWatson
from dotenv import load_dotenv
import os
from colorama import Fore  # Fixed: was colorma

from langgraph.checkpoint.memory import MemorySaver  # Fixed: was InMemorySaver
from langgraph.prebuilt import ToolNode  # Fixed: was prebuild
from langgraph.prebuilt import tools_condition  # Added: missing import

# Load environment variables from .env file
load_dotenv()

# Initialize the Watson LLM
# You need to set MODEL_ID and PROJECT_ID in your .env file
llm = ChatWatsonx(
    model_id=os.getenv('MODEL_ID', 'ibm/granite-13b-chat-v2'),  # Default model
    project_id=os.getenv('PROJECT_ID'),  # Your IBM Cloud project ID
    params={'max_tokens': 5000}
)

# Define your tools - these are functions the agent can call
# You need to import or define the 'trending' tool
# Example tool definition:
from langchain_core.tools import tool

@tool
def trending(query: str) -> str:
    """Get trending information about a topic."""
    # Your implementation here
    return f"Trending info for: {query}"

# Bind tools to the LLM so it knows what functions it can call
tools = [trending]
llm_with_tools = llm.bind_tools(tools)

# Create the ToolNode - this executes the tools when called
tools_node = ToolNode(tools)

# Define the State class - this holds the conversation history
class State(dict):
    """
    State maintains the conversation context.
    messages: list of all messages in the conversation
    add_messages: LangGraph function that properly merges new messages
    """
    messages: Annotated[list, add_messages]

def chatbot(state: State):
    """
    Main chatbot node - processes messages with the LLM.
    
    Args:
        state: Current conversation state
    
    Returns:
        Dictionary with new messages from the LLM
    """
    print(f"Current state: {state}")
    # Invoke the LLM with the conversation history
    return {'messages': [llm_with_tools.invoke(state['messages'])]}

def router(state: State):
    """
    Router function - decides whether to call tools or end.
    
    Args:
        state: Current conversation state
    
    Returns:
        'tools' if the LLM wants to call a tool, END otherwise
    """
    last_message = state['messages'][-1]
    # Check if the last message contains tool calls
    if hasattr(last_message, 'tool_calls') and last_message.tool_calls:
        return 'tools'
    else:
        return END

# Build the state graph - this defines the agent's workflow
graphbuilder = StateGraph(State)

# Add nodes to the graph
graphbuilder.add_node('chatbot', chatbot)  # LLM processing node
graphbuilder.add_node('tools', tools_node)  # Tool execution node

# Define edges - how the agent flows between nodes
graphbuilder.add_edge(START, 'chatbot')  # Start with the chatbot
graphbuilder.add_edge('tools', 'chatbot')  # After tools, go back to chatbot

# Add conditional edge - decides whether to use tools or end
graphbuilder.add_conditional_edges(
    'chatbot',  # From the chatbot node
    router,  # Use the router function to decide
    {
        'tools': 'tools',  # If router returns 'tools', go to tools node
        END: END  # If router returns END, finish
    }
)

# Initialize memory for conversation history
memory = MemorySaver()

# Compile the graph with memory checkpoint
graph = graphbuilder.compile(checkpointer=memory)

# Main execution loop
if __name__ == '__main__':
    print("Agent is ready! Type your prompts below.")
    
    # Create a thread ID for conversation continuity
    thread_id = "conversation-1"
    
    while True:
        # Get user input
        prompt = input(Fore.LIGHTMAGENTA_EX + 'Pass your prompt here: ' + Fore.RESET)
        
        # Exit condition
        if prompt.lower() in ['exit', 'quit', 'bye']:
            print("Goodbye!")
            break
        
        # Invoke the agent with the user's message
        # The thread_id maintains conversation memory
        response = graph.invoke(
            {'messages': [{'role': 'user', 'content': prompt}]},
            config={"configurable": {"thread_id": thread_id}}
        )
        
        # Print the agent's response
        print(Fore.LIGHTCYAN_EX + response['messages'][-1].content + Fore.RESET)
\`\`\`

### Key Concepts Explained

**1. State Management**
- The \`State\` class stores the conversation history
- \`add_messages\` annotation ensures messages are properly merged
- Memory persists across turns using \`MemorySaver\`

**2. Tool Binding**
- \`llm.bind_tools(tools)\` teaches the LLM what functions it can call
- The LLM decides when to call tools based on the conversation
- \`ToolNode\` executes the actual tool functions

**3. Graph Structure**
\`\`\`
START → chatbot → (decision) → tools → chatbot → END
\`\`\`
- Chatbot processes the input
- Router decides if tools are needed
- Tools execute if needed
- Returns to chatbot for final response

**4. Memory**
- \`MemorySaver\` stores conversation history
- \`thread_id\` maintains conversation context
- Agent can reference previous messages

---

## File 2: \`price.py\` - Stock Price Tool

### Purpose
Defines a tool for retrieving stock prices using Yahoo Finance. This tool can be imported into agents built with IBM Watsonx Orchestrate.

### Corrected Code with Comments

\`\`\`python
from ibm_watsonx_orchestrate.agent_builder.tools import tool, ToolPermission
import yfinance as yf

@tool(
    name='stock_prices_florida',  # Unique identifier for the tool
    description='This tool returns a stock\'s last closing price given a stock ticker symbol',  # Fixed typo: trock → stock
    permission=ToolPermission.ADMIN  # Requires admin permission to execute
)
def stock_price(stock_ticker: str) -> str:
    """
    Retrieves the last closing price for a given stock.
    
    Args:
        stock_ticker: Stock symbol (e.g., 'AAPL', 'GOOGL', 'MSFT')
    
    Returns:
        String representation of the last closing price
    
    Example:
        stock_price('AAPL') → '150.25'
    """
    try:
        # Create a Ticker object for the given stock
        ticker = yf.Ticker(stock_ticker)
        
        # Get price history for the last month
        history = ticker.history(period='1mo')
        
        # Return the most recent closing price
        if not history.empty:
            return str(history['Close'].iloc[-1])
        else:
            return f"No data available for ticker: {stock_ticker}"
    
    except Exception as e:
        return f"Error retrieving price for {stock_ticker}: {str(e)}"

# IBM Watsonx Orchestrate CLI Commands:
# 1. Import agent configuration:
#    uv agents import -f agent.yaml
#
# 2. Run the agent:
#    uv run
#
# 3. Additional tool commands:
#    uv tool list  # List all available tools
\`\`\`

### Function Breakdown

**Tool Decorator**
- \`@tool\` registers this function with IBM Watsonx Orchestrate
- \`name\`: How the agent refers to this tool
- \`description\`: Helps the LLM decide when to use this tool
- \`permission\`: Controls who can execute this tool

**Implementation**
- Uses \`yfinance\` library to fetch real-time stock data
- Retrieves 1 month of historical data
- Returns the most recent closing price
- Includes error handling for invalid tickers

---

## File 3: \`income.py\` - Income Statement Tool

### Purpose
Similar to \`price.py\`, but intended to retrieve income statement data. Note: Current implementation actually returns stock price (needs correction).

### Corrected Code with Comments

\`\`\`python
from ibm_watsonx_orchestrate.agent_builder.tools import tool, ToolPermission
import yfinance as yf

@tool(
    name='income_statement_florida',
    description='This tool returns a company\'s income statement financial data',
    permission=ToolPermission.ADMIN
)
def income_statement(stock_ticker: str) -> str:
    """
    Retrieves the income statement for a given company.
    
    Args:
        stock_ticker: Stock symbol (e.g., 'AAPL', 'GOOGL', 'MSFT')
    
    Returns:
        Formatted string containing income statement data
    
    Example:
        income_statement('AAPL') → Returns revenue, expenses, net income, etc.
    """
    try:
        # Create a Ticker object
        ticker = yf.Ticker(stock_ticker)
        
        # Get the income statement
        income_stmt = ticker.income_stmt
        
        # Check if data exists
        if income_stmt is not None and not income_stmt.empty:
            # Convert to string format for the agent to read
            # Get the most recent period (first column)
            latest_data = income_stmt.iloc[:, 0]
            
            # Format key financial metrics
            result = f"Income Statement for {stock_ticker}:\n"
            
            # Extract common metrics if available
            metrics = [
                'Total Revenue',
                'Cost Of Revenue', 
                'Gross Profit',
                'Operating Income',
                'Net Income'
            ]
            
            for metric in metrics:
                if metric in latest_data.index:
                    value = latest_data[metric]
                    result += f"{metric}: \${value:,.0f}\n"
            
            return result
        else:
            return f"No income statement data available for ticker: {stock_ticker}"
    
    except Exception as e:
        return f"Error retrieving income statement for {stock_ticker}: {str(e)}"

# Additional Notes:
# - IBM Watsonx Orchestrate allows you to host a dashboard on localhost
# - Agents use libraries and LLMs to produce structured output
# - You can combine multiple tools to create comprehensive financial analysis agents

# Workflow:
# 1. Define tools (like this one)
# 2. Configure agent in agent.yaml
# 3. Import: uv agents import -f agent.yaml
# 4. Run: uv run
# 5. Test in the Orchestrate dashboard

# Resource: lmsys-leaderboard on Hugging Face shows ranked LLM performance
\`\`\`

### Key Improvements

**Original Issue**: Function was named \`stock_price\` but tool name was \`income_statement_florida\`

**Corrections Made**:
- Renamed function to \`income_statement\` for consistency
- Implemented actual income statement retrieval
- Added formatting for key financial metrics
- Included error handling
- Added comprehensive documentation

---

## Page 3: Additional Implementation Details

## File 4: \`agent.yaml\` - Agent Configuration

### Purpose
Configuration file for IBM Watsonx Orchestrate agents. Defines the agent's properties, model, and behavior style.

### Corrected YAML with Comments

\`\`\`yaml
# IBM Watson Agent Configuration
# This file defines the agent's specifications for Watsonx Orchestrate

spec_version: v1  # Configuration specification version

kind: native  # Agent type: native (runs directly) vs. custom

name: TechExchangeFinanceAgent  # Unique agent identifier

description: This agent is great at all things stock research.  # Agent purpose

# LLM Configuration
# Fixed typo: llma → llama
llm: watsonx/meta-llama/llama-3-405b-instruct  # Model to use

# Agent Reasoning Style
style: react  # ReAct pattern (Reasoning + Acting)
# Options: react, rewoo, chain-of-thought, etc.

# Additional Configuration Options (optional):
# tools:  # List of tools this agent can use
#   - stock_prices_florida
#   - income_statement_florida
#
# temperature: 0.7  # Controls randomness (0-1)
# max_tokens: 2000  # Maximum response length
#
# system_prompt: |  # Custom instructions for the agent
#   You are a financial research assistant specializing in stock analysis.
#   Provide accurate, data-driven insights based on the available tools.
\`\`\`

### Configuration Breakdown

**spec_version**: Version of the configuration schema

**kind**: 
- \`native\`: Standard agent that runs in Orchestrate
- \`custom\`: Custom implementation with specific requirements

**llm**: The language model powering the agent
- Format: \`provider/model-name\`
- Using Meta's Llama 3 405B Instruct model
- One of the most capable open-source models

**style**: Reasoning strategy
- \`react\`: Best for tasks requiring tool use and iterative reasoning
- Agent will think, act (use tools), and observe results

---

## File 5: \`langflow.py\` - No-Code Agent Building

### Purpose
Documentation for building agents using Langflow, a visual drag-and-drop interface powered by DataStax.

### Langflow Workflow

\`\`\`python
# Method 2: Build an agent without code using Langflow (DataStax)
"""
Langflow is a visual interface for building LLM applications and agents.
No coding required - use drag-and-drop components.

STEP-BY-STEP GUIDE:

1. Add Chat Input Component
   - This is where users will type their messages
   - Configure input parameters if needed
   
2. Add Agent Component
   - The core processing unit
   - Configure agent behavior and settings
   
3. Add LLM/Model to the Agent
   - Select your model provider (OpenAI, Anthropic, IBM Watson, etc.)
   - Enter API key in the component settings
   - Configure model parameters:
     * Temperature: Controls randomness
     * Max tokens: Response length
     * System prompt: Agent instructions
   
4. Add Tools to the Agent
   - Example: arXiv tool
     * Searches academic papers
     * Retrieves research information
     * Returns relevant findings
   - Other available tools:
     * Web Search (Google, Bing, DuckDuckGo)
     * Wikipedia
     * Calculator
     * Python REPL
     * Custom API tools
   
5. Add Chat Output Component
   - Displays agent responses to users
   - Configure output formatting
   
6. Connect the Components
   - Draw connections between components:
     Chat Input → Agent → Chat Output
     Model → Agent
     Tools → Agent
   
7. Test in Playground
   - Click the "Playground" button
   - Chat with your agent in real-time
   - Iterate and refine based on results
   
8. View and Customize Code
   - Click "View Code" to see the generated Python code
   - Export code for custom deployment
   - Modify and extend functionality
   - Version control your agent

ADVANTAGES OF LANGFLOW:
- No coding required to get started
- Visual representation of agent architecture
- Quick prototyping and iteration
- Easy tool integration
- Built-in testing environment
- Can export to code when needed

DEPLOYMENT OPTIONS:
- DataStax Langflow Cloud (hosted)
- Self-hosted (Docker, local server)
- Export to custom Python application

USE CASES:
- Research assistants (with arXiv, web search)
- Customer support bots
- Data analysis agents
- Content creation assistants
- Multi-tool orchestration
"""

# Example: What the generated code might look like
from langflow import ChatInput, ChatOutput, Agent
from langflow.components import OpenAI, ArxivTool

# This is automatically generated by Langflow
def build_agent():
    # Input component
    chat_input = ChatInput()
    
    # LLM component
    llm = OpenAI(
        model="gpt-4",
        api_key="your-api-key",
        temperature=0.7
    )
    
    # Tool component
    arxiv = ArxivTool()
    
    # Agent component
    agent = Agent(
        llm=llm,
        tools=[arxiv],
        system_message="You are a research assistant."
    )
    
    # Output component
    chat_output = ChatOutput()
    
    # Connect components
    agent.connect(chat_input, chat_output)
    
    return agent
\`\`\`

### When to Use Langflow

**Pros:**
- Rapid prototyping
- No coding knowledge required
- Visual debugging
- Easy tool integration
- Great for non-technical stakeholders

**Cons:**
- Less control than code-based approaches
- May have limitations for complex logic
- Dependency on Langflow platform

**Best For:**
- Quick proof-of-concepts
- Business users building agents
- Testing different model/tool combinations
- Educational purposes

---

## Additional Resources & Best Practices

### Development Tools

**Excalidraw for Design**
- Use Excalidraw (https://excalidraw.com) for agent architecture diagrams
- Visualize agent workflows before coding
- Share designs with team members
- Great for planning multi-agent systems

### Environment Setup

Create a \`.env\` file for sensitive data:
\`\`\`bash
# IBM Watson Configuration
MODEL_ID=ibm/granite-13b-chat-v2
PROJECT_ID=your-project-id-here

# API Keys
WATSONX_API_KEY=your-api-key
IBM_CLOUD_API_KEY=your-cloud-key

# Other configurations
MAX_TOKENS=5000
TEMPERATURE=0.7
\`\`\`

### Testing Strategy

1. **Unit Testing**: Test individual tools
\`\`\`python
def test_stock_price():
    result = stock_price('AAPL')
    assert result is not None
    assert isinstance(result, str)
\`\`\`

2. **Integration Testing**: Test agent workflows
\`\`\`python
def test_agent_flow():
    response = graph.invoke({
        'messages': [{'role': 'user', 'content': 'What is AAPL stock price?'}]
    })
    assert 'messages' in response
\`\`\`

3. **End-to-End Testing**: Test complete user scenarios

### Monitoring & Logging

\`\`\`python
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def chatbot(state: State):
    logger.info(f"Processing message: {state['messages'][-1]}")
    # ... rest of function
\`\`\`

### Performance Optimization

1. **Caching**: Store repeated API calls
2. **Token Management**: Monitor and limit token usage
3. **Parallel Processing**: Use async for multiple tool calls
4. **Error Handling**: Graceful degradation when tools fail

---

## Conclusion

This documentation covers:
- ✅ Key learnings from IBM TechXchange 2025
- ✅ AI agent concepts and architecture
- ✅ Multiple implementation approaches (LangGraph, Watsonx, Langflow)
- ✅ Complete, corrected code with detailed comments
- ✅ Best practices and deployment strategies

**Next Steps:**
1. Set up your development environment
2. Choose a framework (start with LangGraph or Langflow)
3. Build a simple agent with one tool
4. Iterate and add complexity
5. Deploy and monitor in production
6. **Build agents for Axiom** - apply these learnings to real projects!

Remember: **Start simple, then scale.** Build the minimum viable agent that solves your problem, then enhance it based on real-world usage.

---

*Document created from IBM TechXchange Orlando 2025 learnings*
`,
    createdAt: "2025-10-15",
    tags: ["IBM", "AI", "Documentation"]
  },
  {
    id: "4",
    title: "faster-whisper Push-to-Talk Setup on Linux",
    slug: "faster-whisper-push-to-talk-setup-on-linux",
    excerpt: "Set up local, offline voice-to-text on Ubuntu and Linux Mint with faster-whisper—hotkey record, transcribe, and paste with no API costs.",
    content: whisperBlogContent,
    createdAt: "2026-06-01",
    tags: ["Linux", "Whisper", "Automation", "Tutorial"]
  },
  {
    id: "5",
    title: "How I Found a Linux Alternative to Cursorful Screen Recording",
    slug: "how-i-implemented-a-linux-alternative-to-cursorful-screen-recording",
    excerpt: "Weeks of OS changes taught me to validate constraints first—Screenix and Cursorfly solved autozoom when the first AI suggestions could not.",
    content: cursorfulBlogContent,
    createdAt: "2026-06-15",
    tags: ["Linux", "Wayland", "X11", "Screen Recording", "Lessons Learned"]
  },
];
