# Guépard Construction Infrastructure Suite

Full-stack marketing experience showcasing Guépard Construction’s educational, residential, and water-infrastructure expertise with interactive galleries, lead-gen flows, and responsive navigation.

## Overview

This site highlights Guépard’s core offerings—schools & universities, houses, water drilling, and mining/healthcare engagements—through a modern hero, services grid, project gallery with modal detail views, and a guided quote workflow. A persistent Navbar/Footbar combo keeps contact actions only one click away.

## Feature Highlights

- **Hero + CTA:** Bold gradient hero describing the firm’s positioning with a primary quote/lead button.
- **Services Grid:** Three-card layout describing core verticals with iconography.
- **Interactive Gallery:** Category filters, responsive masonry grid, and modal detail view powered by `next/image`.
- **Quote Modal:** Multi-field form with simulated submission flow, validation, status states, and contextual budget/project selectors.
- **Global Navigation:** Sticky responsive navbar with desktop dropdowns and mobile slide panel, plus mirrored CTA in the footer.
- **About Page:** Founder story, imagery, and mission statement to build credibility.

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS 4 with custom utility helpers (`colors.ts`, `typography.ts`, `layoutUtils.ts`)
- **Fonts:** Geist / Geist Mono via `next/font`
- **Tooling:** npm scripts, Turbopack dev server
- **Assets:** Optimized images served from `/public/images` using `next/image`

## Project Structure

```
├── app
│   ├── layout.tsx              # Root layout with metadata, Navbar, Footbar
│   ├── page.tsx                # Home page (hero, services, gallery, quote modal)
│   ├── about/page.tsx          # About page with founder story
│   ├── components
│   │   ├── layout
│   │   │   ├── Navbar.tsx
│   │   │   └── Footbar.tsx
│   │   └── sections
│   │       ├── ContactForm.tsx
│   │       └── Gallery.tsx
│   └── styles
│       └── utils
│           ├── colors.ts
│           ├── layoutUtils.ts
│           └── typography.ts
├── public/images               # Static marketing assets (projects, founder, logo)
├── package.json                # Scripts + dependencies
└── next.config.ts              # Next.js configuration
```

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+ (bundled with Node) or another package manager

### Installation

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the site. Edits inside `app/` leverage hot reloading via Turbopack.

## Available Scripts

| Command        | Description                                    |
| -------------- | ---------------------------------------------- |
| `npm run dev`  | Start the Turbopack dev server (hot reload)    |
| `npm run build`| Create an optimized production bundle          |
| `npm run start`| Serve the production build                     |
| `npm run lint` | Run Next.js ESLint rules                       |

## Custom Styling System

- `colors.ts`: Central palette (blue gradients, gold accents, neutral backgrounds).
- `typography.ts`: Heading/body scales, subtitle styles, quotes.
- `layoutUtils.ts`: Container widths, section paddings, responsive flex helpers.

Import these utilities for consistent Tailwind class composition and to avoid duplicating literal color codes throughout the app.

## Deployment

The project ships as a static-friendly Next.js application. Deploy using:

1. **Vercel** (recommended) – `vercel` CLI or dashboard.
2. **Self-hosted Node** – run `npm run build && npm run start`.
3. **Static export** – Next.js 15 supports partial static output; ensure dynamic routes are accounted for.

## Contact & Support

- Email: `info@guepardconstruction.com`
- Phone: `+1 (555) 123-4567`
- For feature requests or issues, open a GitHub issue before PRs.
