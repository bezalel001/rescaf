# rescaf Website

A modern, responsive website for rescaf - a global technology company building products and infrastructure for human progress.

## Features

- Clean, Dynatrace-inspired design aesthetic
- Fully responsive layout
- React Router for multi-page navigation
- Tailwind CSS v4 for styling
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Build for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The build output will be in the `dist/` directory.

### Preview

Preview the production build:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

### Deployment

This project is configured for easy deployment on Netlify, Vercel, or any static hosting service:

- **Netlify**: The `netlify.toml` file is included with proper configuration
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

## Project Structure

```
/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Navigation.tsx  # Main navigation
│   ├── Hero.tsx        # Hero section
│   ├── Vision.tsx      # Vision section
│   ├── WhatWeBuild.tsx # Products section
│   ├── FourRivers.tsx  # Long-term vision
│   ├── Values.tsx      # Company values
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   └── Culture.tsx     # Culture page
├── styles/             # Global styles
│   └── globals.css     # Global CSS with Tailwind
├── routes.ts           # React Router configuration
├── App.tsx             # Root component
├── main.tsx            # Application entry point
└── index.html          # HTML template
```

## Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router 6** - Routing
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## License

All rights reserved - rescaf