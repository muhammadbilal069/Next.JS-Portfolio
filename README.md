# Developer Portfolio — React + Vite

A premium, single-page developer portfolio with a dark, glassmorphic aesthetic —
built with React (Vite), Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build (outputs to dist/)
npm run preview    # preview the production build
```

## Personalizing the content

Almost all text content — your name, bio, skills, projects, experience,
education, testimonials, and certificates — lives in one file:

```
src/data/portfolioData.js
```

Edit the values there and every section updates automatically. A few notes:

- **Avatar**: set `personal.avatar` to an image path (e.g. drop a file in
  `src/assets/` and import it, or reference a file in `public/`). Leave it
  `null` to keep the gradient-monogram placeholder.
- **Resume**: place your PDF at `public/resume.pdf` — the button in the Hero
  section already links to `/resume.pdf`.
- **Project & certificate images**: same pattern — set `image` to a path, or
  leave `null` for the gradient placeholder.
- **Contact form**: `src/sections/Contact.jsx` currently simulates sending
  (see the `setTimeout` in `handleSubmit`). Wire it up to a real backend or a
  service like Formspree/Resend by replacing that block with a `fetch` call.

## Project structure

```
src/
  components/   Shared UI: Navbar, Footer, Timeline, SectionHeading,
                ParticlesBackground, GradientBlobs, CustomCursor, etc.
  sections/     One component per portfolio section (Hero, About, Skills, ...)
  data/         Central content file (portfolioData.js)
  hooks/        useCounter (animated numbers), useActiveSection (nav highlight)
  index.css     Tailwind layers + shared utility classes (.glass, .btn-primary, ...)
App.jsx         Composes the page and the entrance loader
```

## Design notes

- **Palette & type**: colors and fonts are defined once in `tailwind.config.js`
  (`primary`, `secondary`, `accent`, `bg`, `card`, `muted`) — change them there
  to re-theme the whole site.
- **Motion**: Framer Motion is used for all scroll/hover/entrance animation,
  kept to one library throughout for consistency.
- **Accessibility**: visible focus rings, semantic landmarks, alt text on
  images, and a `prefers-reduced-motion` fallback that disables animation.
- **Performance**: images are lazy-loaded, the particle background is a
  lightweight canvas (no heavy particle library), and the custom cursor /
  animations quietly disable themselves on touch devices and when reduced
  motion is requested.

## Tech stack

React 19 · Vite · Tailwind CSS · Framer Motion · React Icons · React Scroll ·
Typed.js
