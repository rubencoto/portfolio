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

## How content is structured

Structure lives in `src/data/` (which entries exist, their order, their tech
stacks and links). All prose lives in `src/i18n/locales/en.json` and `es.json`,
keyed by the same ids. A test enforces that both locales define exactly the
same keys, so a translation can never silently go missing.

To add an entry:

- **Experience** — append to the `experience` array in `src/data/experience.ts`,
  then add a matching `experience.<id>` block (`role`, `company`, `location`,
  `period`, `points[]`) to both locale files.
- **Project** — append to `projects` in `src/data/projects.ts`, then add
  `projects.<id>` (`title`, `context`, `status`, `summary`, optional `notes[]`)
  to both locale files. Omit `notes` and the Architecture block is not rendered.
- **Skill group** — add the id to `SkillCategory` in `src/data/types.ts`, the
  group to `src/data/skills.ts`, and a label under `skills.categories` in both
  locale files.

## Deployment

Pushes to `main` build and deploy automatically to GitHub Pages via
`.github/workflows/deploy.yml`. See that file for the one-time repo setting
required (Settings → Pages → Source → GitHub Actions).
