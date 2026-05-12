## Brandora Marketing Website

Multi-page marketing site for Brandora — an Africa-focused digital workforce development company. Built in TanStack Start using the chosen "Editorial Tech" direction (warm off-white #F9F8F6, deep ink, terracotta #D44D26 accent, Inter + JetBrains Mono).

### Routes

- `/` — Home: hero, pipeline stats strip, four pillars, featured Academy tracks, employer hire CTA, community teaser
- `/about` — Vision, mission, values, story, the four-pillar model, team structure
- `/academy` — All programs (UI/UX, Web Dev, Data Analysis, Cybersecurity, Digital Marketing) × 3/6/12-month tracks; what's included; application CTA
- `/job-hub` — Two audiences: learners (placements, internships, freelance) and employers (hire pre-vetted talent, partnership tiers)
- `/services` — Brandora's digital production services (branding, web dev, UI/UX, corporate design)
- `/community` — Webinars, bootcamps, NGO partnerships, outreach
- `/contact` — Apply / hire / partnership form, email, locations

Each route gets its own `head()` with unique title + description + og tags.

### Shared components

- `Header` (sticky nav, BRANDORA wordmark, route links, Apply CTA)
- `Footer` (4-column: brand, programs, enterprise, connect)
- Reusable section primitives kept inline per route (no over-abstraction)

### Design tokens (in `src/styles.css`)

Replace existing tokens with the Editorial Tech palette in oklch:
- `--background` warm off-white, `--foreground` near-black ink
- `--primary` terracotta (#D44D26 → oklch)
- `--muted`, `--border` subtle ink mixes
- Add `--font-display` (Inter) and `--font-mono` (JetBrains Mono) via Google Fonts in root head
- Keyframes: `reveal-up`, `scale-in` with utility classes

### Imagery

Generate ~5 hero/section images via `imagegen` for: hero portrait, three program cards (UI/UX, Web Dev, Data), employer collaboration shot. Stored in `src/assets/`, imported as ES6 modules.

### Out of scope

No backend, no auth, no real form submission (forms are presentational with mailto or simple state).
