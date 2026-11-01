# Asaduzzaman Rocky — Portfolio

React 19, TypeScript, Tailwind CSS and Vite portfolio deployed on Vercel.

## Local development

Requires Node.js and npm.

```sh
npm ci
npm run dev
```

The frontend runs at http://localhost:3000. No Gemini API key is required for the portfolio frontend.

## Checks and production build

```sh
npm run lint
npm run build
npm run preview
```

The production output is `dist/`. The root TypeScript configuration checks the frontend and Vite configuration. The optional `server/` package maintains its own dependencies, configuration and setup instructions.

The existing contact form uses Formspree. Do not submit real enquiries during routine preview testing.

## Portfolio improvements — November 2026

- Added local homepage previews for Aabe Home Healthcare, Moringa Care and Family Transport, with lazy loading and descriptive alternative text.
- Updated those three project descriptions to match the reviewed websites and removed their unverified outcome metrics.
- Added native modal project details with keyboard focus containment, Escape dismissal and focus restoration.
- Added project search labels, selected filter states, result announcements, mobile menu state and a skip link.
- Added reduced-motion support and clearer search/social metadata with the existing canonical production URL.
- Removed an unused, unavailable purgecss dependency that blocked installation.

Validation: production build and frontend type check passed. Browser checks confirmed loaded screenshots, project search, native modal focus, Escape dismissal and focus restoration, plus a 390px mobile layout without horizontal overflow. Mobile navigation exposes its expanded state. No browser console errors were observed. The contact form was not submitted; email delivery and the separate server package were not tested.

## Benchmark-led redesign

See [COMPETITOR-COMPARISON.md](COMPETITOR-COMPARISON.md) for the five public portfolios reviewed, the design decisions, verification evidence and remaining content needs. The home page now leads with three visual project overviews, retains all 26 entries in an optional archive, and uses a smaller, static visual presentation. The separate [PORTFOLIO-AUDIT.md](PORTFOLIO-AUDIT.md) records the earlier audit; most presentation findings were addressed by this redesign. The redesign is delivered on a review branch and is not automatically merged into production.
