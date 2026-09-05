# Portfolio / CV Site — Design

## Purpose

A personal portfolio site for Ruben Coto, primarily to support a job search for
Software Engineer roles. Optimized for recruiters and hiring managers to
quickly understand his background, see representative work, and get in touch.

## Stack

- **React + Vite + TypeScript** — matches Ruben's primary stack, fast to build,
  builds to static output.
- **react-i18next** for bilingual EN/ES support. UI strings live in
  `src/i18n/locales/en.json` and `src/i18n/locales/es.json` keyed identically;
  components reference translation keys rather than hardcoded strings. A
  language switch in the nav toggles locale and persists the choice in
  `localStorage`.
- **No backend.** Contact is handled via direct links (mailto, LinkedIn,
  GitHub) — no contact form, no third-party form service.
- **Hosting: GitHub Pages**, deployed via a GitHub Actions workflow that
  builds the Vite project and publishes `dist/` on push to `main`.

## Visual direction — Dark / Tech

- Dark background (`#0b0f19` / near-black), neon cyan/green accent color,
  monospace accents for small technical details (e.g. a `$ whoami`-style
  label in the hero), sans-serif for body copy.
- Deliberately distinct from the purple/pink gradient branding used on
  Ruben's GitHub profile README (`rubencoto/rubencoto`) — that gradient is
  the GitHub-profile brand; this dark/tech look is the professional-site
  brand. No shared visual language is required between the two.

## Structure — single page, scroll navigation

One page, fixed nav bar with in-page anchor links and smooth scroll. Sections,
top to bottom:

1. **Hero** — name, tagline, key stack badges (.NET, React, TypeScript),
   a "Download CV" button (serves a static PDF from `public/`), and a CTA
   linking down to Projects.
2. **About** — short bio (real copy to be supplied by Ruben during
   implementation).
3. **Experience** — timeline/list of roles (real dates/titles to be supplied
   by Ruben during implementation).
4. **Projects** — featured section highlighting two projects:
   - **TuCitaOnline** — a SaaS for medical practice administration
     (appointments, patient records, clinic workflows). Repo is private, so
     this is described in prose only, no source link. Screenshots may be
     added later if available.
   - **Consultorios Dr. Moraga (CDM)** — a client project shown as a
     multi-module case study rather than a single card, since it spans
     several systems built for this client (at minimum: an appointment bot
     and an ERP system). Rendered as one project card with an internal list
     of modules/features rather than a single-line description, so the full
     scope is visible. Exact module list and descriptions to be supplied by
     Ruben during implementation.
5. **Skills** — grid of technologies grouped by category (Backend, Frontend,
   Database, Tools).
6. **Contact** — direct links: email (`mailto:`), LinkedIn, GitHub.

## Content gaps to fill during implementation

These are real-content items only Ruben can supply — the design does not
depend on their final wording, but implementation will need them before the
site is content-complete:

- About/bio copy (EN + ES)
- Experience timeline entries (roles, dates, descriptions, EN + ES)
- Full list of CDM modules beyond "bot" and "ERP", if any, plus a short
  description of each
- CV PDF file
- Any project screenshots

## Out of scope

- Blog / articles section
- Contact form / third-party form service
- Multi-page routing (React Router) — one-page scroll only
- Analytics/tracking
