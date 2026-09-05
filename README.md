# Ruben Coto — Portfolio

A bilingual (EN/ES), one-page portfolio site built with React, Vite, and TypeScript.

## Development

```bash
npm install
npm run dev       # start the dev server
npm test          # run the test suite once
npm run typecheck # type-check without emitting
npm run build     # type-check and build to dist/
```

## Content still needed

The site is fully functional but ships with placeholder content in a few spots.
Fill these in before treating the site as complete:

- **Bio** — `src/i18n/locales/en.json` and `es.json`, key `about.body`.
- **Experience** — `src/i18n/locales/en.json` and `es.json`, key `experience.current`
  (role, company, period, description). Add more entries by adding another
  object to the `experience` array in `src/data/experience.ts` and a matching
  `experience.<id>` block in both locale files.
- **CDM project modules** — if Consultorios Dr. Moraga includes systems beyond
  the appointment bot and ERP, add a module id to the `modules` array for the
  `cdm` project in `src/data/projects.ts`, and a matching translation under
  `projects.cdm.modules.<id>` in both locale files.
- **CV PDF** — add `cv-ruben-coto.pdf` to the `public/` directory so the
  "Download CV" button in the hero section resolves.
- **Project screenshots** — optional; not wired up yet.

## Deployment

Pushes to `main` build and deploy automatically to GitHub Pages via
`.github/workflows/deploy.yml`. See that file for the one-time repo setting
required (Settings → Pages → Source → GitHub Actions).
