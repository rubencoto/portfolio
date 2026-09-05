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

Bio, experience, CV PDF, and the CDM project details were filled in from
Ruben's CV (Sept 2026). Remaining optional items:

- **Project screenshots** — optional; not wired up yet.
- **More experience entries** — add another object to the `experience` array
  in `src/data/experience.ts` and a matching `experience.<id>` block in both
  `src/i18n/locales/en.json` and `es.json`.
- **More CDM modules** — add a module id to the `modules` array for the `cdm`
  project in `src/data/projects.ts`, and a matching translation under
  `projects.cdm.modules.<id>` in both locale files.

## Deployment

Pushes to `main` build and deploy automatically to GitHub Pages via
`.github/workflows/deploy.yml`. See that file for the one-time repo setting
required (Settings → Pages → Source → GitHub Actions).
