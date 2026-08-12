# Pulsegrid — Day 9

**Task:** Convert the landing page into a React application.
**Stack:** React 18 + Vite 5, plain CSS (no framework), zero external UI libraries.

A landing page for a fictional SaaS product ("Pulsegrid," an API/infrastructure uptime
monitor for engineering teams), built as a set of small React components rather than
one giant file — Nav, Hero, Trust, Features, HowItWorks, DashboardPreview, Pricing,
Testimonial, CtaBand, Footer, all composed in `App.jsx`.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

This was run before packaging — `npm run build` completes with 0 errors/warnings.

## Deploy on Vercel

1. Push this folder to a new GitHub repo.
2. In Vercel: **Add New Project** → import that repo.
3. Vercel auto-detects **Vite** from `package.json` (build command `vite build`,
   output directory `dist`) — you shouldn't need to change any settings.
4. Click **Deploy**.

No environment variables or extra config are needed.

## Project structure

```
index.html
src/
  main.jsx          entry point
  App.jsx            composes all sections
  index.css          design tokens + base styles
  components.css      per-section styles
  useReveal.js        small scroll-reveal hook (IntersectionObserver)
  components/
    Nav.jsx
    Hero.jsx
    PulseTrace.jsx    the animated "signal trace" SVG in the hero
    Trust.jsx
    Features.jsx
    HowItWorks.jsx
    DashboardPreview.jsx
    Pricing.jsx
    Testimonial.jsx
    CtaBand.jsx
    Footer.jsx
```

## Notes

- Fonts (Space Grotesk, IBM Plex Mono, Inter) load from Google Fonts via `<link>`
  tags in `index.html` — no build-time dependency, just needs internet at runtime.
- Respects `prefers-reduced-motion` and has visible keyboard focus states.
- Fully responsive down to small mobile widths.
