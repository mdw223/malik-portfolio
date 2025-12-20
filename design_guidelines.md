# Design Guidelines: Personal Portfolio Website

## Design Approach
**Reference-Based**: Modern developer portfolio aesthetic inspired by Linear, Vercel, and contemporary tech portfolios. Clean, professional, and content-focused with strategic use of visual elements.

## Typography System
- **Headlines**: Clean sans-serif (Inter or Satoshi via Google Fonts)
  - Hero/Name: text-5xl to text-6xl, font-bold
  - Section titles: text-3xl to text-4xl, font-semibold
  - Subsections: text-xl, font-medium
- **Body**: text-base to text-lg, leading-relaxed for readability
- **UI Elements**: text-sm for metadata, dates, labels

## Layout & Spacing
- **Container**: max-w-6xl mx-auto for content sections
- **Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
  - Section padding: py-20 to py-24 (desktop), py-12 (mobile)
  - Component spacing: gap-8 for grids, space-y-6 for stacks
- **Header**: h-16 fixed with backdrop-blur effect, px-6

## Core Components

### Navigation Header (Fixed)
- Translucent background with blur effect (bg-opacity-90 backdrop-blur)
- Center-aligned navigation tabs with hover underline animation
- Logo + title (left), social icons (right, w-5 h-5)
- Active tab indicated with bottom border accent
- Theme toggle icon button (moon/sun)

### About Me Section
- Two-column layout (md:grid-cols-2)
- Left: Circular profile image (w-48 h-48) with subtle border
- Right: Name as large heading, bio paragraph, bullet list with icons
- Social icons row (w-6 h-6) with hover scale effect
- Calendly button: primary CTA styling with rounded-lg

### Projects Section
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-6
- Cards: rounded-xl with subtle border, hover lift effect (hover:shadow-xl transition)
- Card structure: Image top (aspect-video, rounded-t-xl), content padding p-6
- Button group: flex gap-3 for demo/GitHub/blog links (icon + text)

### Experiences Section
- Vertical timeline-style layout or stacked cards
- Each entry: Company logo (w-12 h-12), position bold, company name + dates as metadata
- Description: prose text with comfortable line-height

### Resume Section
- Centered preview container (max-w-2xl)
- PDF preview iframe with border, rounded-lg
- Action buttons below: "View Full Resume" + "Download PDF" (flex gap-4)

### Contact Section
- Two-column: Form (left 60%), Info/CTA (right 40%)
- Form inputs: rounded-lg, border, p-3, focus ring
- Textarea: min-h-32
- Submit button: full-width primary CTA
- Calendly button: secondary styling

### Blog Page
- Sidebar: w-64 to w-80 fixed, border-r
- Search input at top: rounded-lg with search icon
- Blog list: stack with hover background, date as text-sm muted
- Main content: max-w-prose for optimal reading (65-75 characters/line)
- Markdown styling: headings hierarchy, code blocks with syntax highlighting feel

## Visual Elements

### Cards & Containers
- Rounded corners: rounded-lg (components), rounded-xl (cards)
- Borders: subtle, 1px, low contrast
- Shadows: Minimal at rest, elevated on hover
- Padding: p-6 to p-8 for cards

### Interactive States
- Hover: Scale slightly (hover:scale-105), add shadow, or background shift
- Active tab: Bottom border (3-4px) with accent
- Focus: Ring offset for accessibility
- Transitions: duration-200 to duration-300

## Images
- **Hero/About**: Professional headshot (circular, 192px diameter)
- **Projects**: Project screenshots/mockups (16:9 aspect ratio preferred)
- **Experiences**: Company logos (square format, 48px)
- No large hero image required - content-focused portfolio

## Accessibility
- All interactive elements: min-height h-10 to h-12
- Focus indicators on all inputs and buttons
- Sufficient contrast ratios throughout
- Icon buttons include aria-labels

## Theme Implementation
- Smooth transition between modes (transition-colors duration-200)
- Dark mode: Deep background with elevated cards
- Light mode: Clean white with subtle gray accents
- Consistent contrast in both modes