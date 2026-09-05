# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bilingual (EN/ES), one-page, dark/tech-themed React portfolio site for Ruben Coto, deployable to GitHub Pages.

**Architecture:** A single Vite + React + TypeScript app with no backend. Static section components (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Contact`) render from small typed data files (`src/data/*.ts`). All user-facing text is looked up via `react-i18next` from two parallel JSON dictionaries (`en.json`, `es.json`) so no component branches on language. A `LanguageSwitch` button toggles and persists the active language.

**Tech Stack:** React 19, Vite 8, TypeScript 7, react-i18next 17 / i18next 26, Vitest 5 + React Testing Library 16 for tests, GitHub Actions + GitHub Pages for hosting.

**Reference spec:** `docs/superpowers/specs/2026-09-05-portfolio-site-design.md`

---

## Notes on task style

Most tasks below follow strict TDD (failing test → implement → passing test). A few early tasks (project scaffold, global CSS, GitHub Actions workflow) have no unit under test — for those, "verify" means running a build/typecheck command and confirming the expected output, not writing a test file.

All commands below assume the working directory is the project root: `C:\Users\ruben\portfolio`.

---

### Task 1: Scaffold the Vite + React + TypeScript project

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`
- Create: `src/vite-env.d.ts`

- [ ] **Step 1: Write `package.json`**

```json
{
  "name": "portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "i18next": "^26.4.2",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-i18next": "^17.0.13"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^7.0.1",
    "@testing-library/react": "^16.3.3",
    "@testing-library/user-event": "^14.6.7",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "jsdom": "^30.0.1",
    "typescript": "^7.0.2",
    "vite": "^8.2.2",
    "vitest": "^5.0.0"
  }
}
```

- [ ] **Step 2: Write `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  },
  "include": ["src", "vite.config.ts"]
}
```

- [ ] **Step 3: Write `vite.config.ts`**

```typescript
/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
});
```

> If the GitHub repo you push this to is not named `portfolio`, update `base` to `/<your-repo-name>/` (or `/` if this is a `<username>.github.io` user-page repo) before deploying.

- [ ] **Step 4: Write `index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ruben Coto — Software Engineer</title>
    <meta
      name="description"
      content="Portfolio of Ruben Coto, Software Engineer specializing in C#/.NET, TypeScript, and React."
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Write `src/vite-env.d.ts`**

```typescript
/// <reference types="vite/client" />
```

- [ ] **Step 6: Write `src/index.css`**

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
```

- [ ] **Step 7: Write `src/App.tsx` (temporary scaffold, replaced in Task 14)**

```typescript
export function App() {
  return <div>Portfolio scaffold</div>;
}
```

- [ ] **Step 8: Write `src/main.tsx`**

```typescript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

- [ ] **Step 9: Install dependencies**

Run: `npm install`
Expected: install completes with no errors, `node_modules/` and `package-lock.json` created.

- [ ] **Step 10: Verify the project builds**

Run: `npm run build`
Expected: `tsc --noEmit` passes with no errors, then Vite prints `dist/index.html` and JS/CSS assets written to `dist/`.

- [ ] **Step 11: Commit**

```bash
git add package.json package-lock.json tsconfig.json vite.config.ts index.html src/main.tsx src/App.tsx src/index.css src/vite-env.d.ts
git commit -m "Scaffold Vite + React + TypeScript project"
```

---

### Task 2: Configure Vitest and verify the test pipeline

**Files:**
- Create: `src/test/setup.ts`
- Create: `src/sanity.test.ts`

- [ ] **Step 1: Write `src/test/setup.ts`**

```typescript
import '@testing-library/jest-dom/vitest';
```

- [ ] **Step 2: Write a sanity test to prove the pipeline works**

`src/sanity.test.ts`:

```typescript
import { describe, expect, it } from 'vitest';

describe('vitest pipeline', () => {
  it('runs and asserts correctly', () => {
    expect(1 + 1).toBe(2);
  });
});
```

- [ ] **Step 3: Run the test**

Run: `npm test`
Expected: PASS — `src/sanity.test.ts` reports 1 passed test.

- [ ] **Step 4: Delete the sanity test**

The sanity test served only to prove the pipeline works; remove it now that real tests will follow.

Run: `rm src/sanity.test.ts`

- [ ] **Step 5: Commit**

```bash
git add src/test/setup.ts
git commit -m "Configure Vitest and React Testing Library"
```

---

### Task 3: Global dark/tech theme styles

**Files:**
- Create: `src/styles/theme.css`
- Modify: `src/main.tsx`
- Modify: `src/index.css`

- [ ] **Step 1: Write `src/styles/theme.css`**

```css
:root {
  color-scheme: dark;
  --color-bg: #0b0f19;
  --color-bg-elevated: #111827;
  --color-border: #1f2937;
  --color-text: #e5e7eb;
  --color-text-muted: #9ca3af;
  --color-accent: #22d3ee;
  --color-accent-strong: #06b6d4;
  --font-sans: 'Segoe UI', system-ui, -apple-system, sans-serif;
  --font-mono: Consolas, 'SFMono-Regular', Menlo, monospace;
  --radius: 8px;
  --spacing-1: 8px;
  --spacing-2: 16px;
  --spacing-3: 24px;
  --spacing-4: 48px;
}
```

- [ ] **Step 2: Update `src/index.css` to apply the theme and add layout primitives**

Replace the full contents of `src/index.css` with:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  line-height: 1.5;
}

.nav {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-3);
  background-color: var(--color-bg-elevated);
  border-bottom: 1px solid var(--color-border);
  z-index: 10;
}

.nav__brand {
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-weight: 700;
  text-decoration: none;
}

.nav__links {
  display: flex;
  gap: var(--spacing-2);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__link {
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 0.9rem;
}

.nav__link:hover {
  color: var(--color-accent);
}

.language-switch {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  border-radius: var(--radius);
  padding: 4px 10px;
  font-family: var(--font-mono);
  cursor: pointer;
}

.language-switch:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.hero {
  padding: var(--spacing-4) var(--spacing-3);
  text-align: center;
}

.hero__greeting {
  font-family: var(--font-mono);
  color: var(--color-accent);
}

.hero__name {
  font-size: 2.5rem;
  margin: var(--spacing-1) 0;
}

.hero__tagline {
  color: var(--color-text-muted);
  max-width: 40rem;
  margin: 0 auto var(--spacing-3);
}

.hero__actions {
  display: flex;
  gap: var(--spacing-2);
  justify-content: center;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: var(--radius);
  text-decoration: none;
  font-weight: 600;
}

.btn--primary {
  background-color: var(--color-accent);
  color: var(--color-bg);
}

.btn--ghost {
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.section {
  padding: var(--spacing-4) var(--spacing-3);
  max-width: 60rem;
  margin: 0 auto;
}

.section__heading {
  color: var(--color-accent);
  font-family: var(--font-mono);
}

.timeline {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.timeline__item {
  border-left: 2px solid var(--color-border);
  padding-left: var(--spacing-2);
}

.timeline__meta {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-3);
}

.project-card {
  background-color: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--spacing-2);
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  padding: 0;
}

.tag {
  background-color: var(--color-border);
  color: var(--color-accent);
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-family: var(--font-mono);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-3);
}

.skill-group__title {
  color: var(--color-accent);
}

.skill-list {
  list-style: none;
  padding: 0;
  color: var(--color-text-muted);
}

.contact-links {
  list-style: none;
  padding: 0;
  display: flex;
  gap: var(--spacing-2);
}

.contact-link {
  color: var(--color-accent);
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
}
```

- [ ] **Step 3: Import the theme in `src/main.tsx`**

Add the import above the existing `./index.css` import:

```typescript
import './styles/theme.css';
import './index.css';
```

- [ ] **Step 4: Verify the build still succeeds**

Run: `npm run build`
Expected: PASS, no TypeScript or CSS errors.

- [ ] **Step 5: Commit**

```bash
git add src/styles/theme.css src/index.css src/main.tsx
git commit -m "Add dark/tech global theme styles"
```

---

### Task 4: i18n setup with EN/ES locale files

**Files:**
- Create: `src/i18n/locales/en.json`
- Create: `src/i18n/locales/es.json`
- Create: `src/i18n/index.ts`
- Test: `src/i18n/locales.test.ts`

- [ ] **Step 1: Write `src/i18n/locales/en.json`**

```json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "experience": "Experience",
    "projects": "Projects",
    "skills": "Skills",
    "contact": "Contact"
  },
  "hero": {
    "greeting": "Hi, I'm",
    "name": "Ruben Coto",
    "tagline": "Software Engineer building reliable web systems with .NET, TypeScript, and React.",
    "downloadCv": "Download CV",
    "viewProjects": "View Projects"
  },
  "about": {
    "heading": "About Me",
    "body": "Placeholder bio — update this in src/i18n/locales/en.json with your real background, focus areas, and what you're looking for next."
  },
  "experience": {
    "heading": "Experience",
    "current": {
      "role": "Update this role title",
      "company": "Update this company name",
      "period": "Update these dates",
      "description": "Update this with a real description of what you did in this role."
    }
  },
  "projects": {
    "heading": "Featured Projects",
    "tucitaonline": {
      "title": "TuCitaOnline",
      "description": "A SaaS platform for medical practice administration — appointments, patient records, and clinic workflows."
    },
    "cdm": {
      "title": "Consultorios Dr. Moraga",
      "description": "A multi-module system built for a medical clinic client, spanning everything from patient-facing automation to back-office management.",
      "modulesHeading": "Modules",
      "modules": {
        "bot": "Appointment booking bot",
        "erp": "Clinic management ERP"
      }
    }
  },
  "skills": {
    "heading": "Skills",
    "categories": {
      "backend": "Backend",
      "frontend": "Frontend",
      "database": "Database",
      "tools": "Tools"
    }
  },
  "contact": {
    "heading": "Contact",
    "intro": "Open to new opportunities — feel free to reach out.",
    "emailLabel": "Email",
    "linkedinLabel": "LinkedIn",
    "githubLabel": "GitHub"
  }
}
```

- [ ] **Step 2: Write `src/i18n/locales/es.json`**

```json
{
  "nav": {
    "home": "Inicio",
    "about": "Sobre mí",
    "experience": "Experiencia",
    "projects": "Proyectos",
    "skills": "Skills",
    "contact": "Contacto"
  },
  "hero": {
    "greeting": "Hola, soy",
    "name": "Ruben Coto",
    "tagline": "Ingeniero de software construyendo sistemas web confiables con .NET, TypeScript y React.",
    "downloadCv": "Descargar CV",
    "viewProjects": "Ver Proyectos"
  },
  "about": {
    "heading": "Sobre mí",
    "body": "Bio de ejemplo — actualiza esto en src/i18n/locales/es.json con tu experiencia real, áreas de enfoque y lo que buscas."
  },
  "experience": {
    "heading": "Experiencia",
    "current": {
      "role": "Actualiza este puesto",
      "company": "Actualiza este nombre de empresa",
      "period": "Actualiza estas fechas",
      "description": "Actualiza esto con una descripción real de lo que hiciste en este puesto."
    }
  },
  "projects": {
    "heading": "Proyectos Destacados",
    "tucitaonline": {
      "title": "TuCitaOnline",
      "description": "Una plataforma SaaS para administración de consultorios médicos — citas, expedientes y flujos de trabajo de la clínica."
    },
    "cdm": {
      "title": "Consultorios Dr. Moraga",
      "description": "Un sistema multi-módulo construido para un cliente de consultorio médico, que abarca desde automatización para pacientes hasta gestión administrativa.",
      "modulesHeading": "Módulos",
      "modules": {
        "bot": "Bot de reserva de citas",
        "erp": "ERP de gestión de la clínica"
      }
    }
  },
  "skills": {
    "heading": "Skills",
    "categories": {
      "backend": "Backend",
      "frontend": "Frontend",
      "database": "Base de datos",
      "tools": "Herramientas"
    }
  },
  "contact": {
    "heading": "Contacto",
    "intro": "Abierto a nuevas oportunidades — no dudes en escribirme.",
    "emailLabel": "Email",
    "linkedinLabel": "LinkedIn",
    "githubLabel": "GitHub"
  }
}
```

- [ ] **Step 3: Write the failing key-parity test**

`src/i18n/locales.test.ts`:

```typescript
import { describe, expect, it } from 'vitest';
import en from './locales/en.json';
import es from './locales/es.json';

function collectKeys(value: unknown, prefix = ''): string[] {
  if (typeof value !== 'object' || value === null) {
    return [prefix];
  }
  return Object.entries(value).flatMap(([key, child]) =>
    collectKeys(child, prefix ? `${prefix}.${key}` : key),
  );
}

describe('locale files', () => {
  it('define exactly the same set of keys in en.json and es.json', () => {
    const enKeys = collectKeys(en).sort();
    const esKeys = collectKeys(es).sort();

    expect(esKeys).toEqual(enKeys);
  });
});
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: PASS. (Both files were written with matching keys in Step 1/2; this test guards against future drift.)

- [ ] **Step 5: Write `src/i18n/index.ts`**

```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';

const STORAGE_KEY = 'portfolio-lang';

function getInitialLanguage(): string {
  if (typeof window === 'undefined') {
    return 'en';
  }
  return window.localStorage.getItem(STORAGE_KEY) ?? 'en';
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
export { STORAGE_KEY };
```

- [ ] **Step 6: Verify typecheck passes**

Run: `npm run typecheck`
Expected: PASS, no errors (JSON imports resolve via `resolveJsonModule`).

- [ ] **Step 7: Commit**

```bash
git add src/i18n
git commit -m "Add i18n setup with EN/ES locale files"
```

---

### Task 5: Typed data layer for projects, experience, skills, and contact

**Files:**
- Create: `src/data/types.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/experience.ts`
- Create: `src/data/skills.ts`
- Create: `src/data/contact.ts`
- Test: `src/data/projects.test.ts`

- [ ] **Step 1: Write `src/data/types.ts`**

```typescript
export interface ProjectModule {
  id: string;
}

export interface Project {
  id: string;
  tech: string[];
  modules?: ProjectModule[];
  links?: {
    github?: string;
    live?: string;
  };
}

export interface ExperienceEntry {
  id: string;
}

export type SkillCategory = 'backend' | 'frontend' | 'database' | 'tools';

export interface SkillGroup {
  id: SkillCategory;
  items: string[];
}
```

- [ ] **Step 2: Write the failing test for the projects data**

`src/data/projects.test.ts`:

```typescript
import { describe, expect, it } from 'vitest';
import { projects } from './projects';

describe('projects data', () => {
  it('includes the CDM project with bot and erp modules', () => {
    const cdm = projects.find((project) => project.id === 'cdm');

    expect(cdm).toBeDefined();
    expect(cdm?.modules?.map((module) => module.id)).toEqual(['bot', 'erp']);
  });

  it('includes the TuCitaOnline project with no modules', () => {
    const tucitaonline = projects.find((project) => project.id === 'tucitaonline');

    expect(tucitaonline).toBeDefined();
    expect(tucitaonline?.modules).toBeUndefined();
  });
});
```

- [ ] **Step 3: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module './projects'`.

- [ ] **Step 4: Write `src/data/projects.ts`**

```typescript
import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'tucitaonline',
    tech: ['C#', '.NET', 'React', 'TypeScript'],
  },
  {
    id: 'cdm',
    tech: ['C#', '.NET', 'React'],
    modules: [{ id: 'bot' }, { id: 'erp' }],
  },
];
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test`
Expected: PASS.

- [ ] **Step 6: Write the remaining data files (no new behavior to test — plain data)**

`src/data/experience.ts`:

```typescript
import type { ExperienceEntry } from './types';

export const experience: ExperienceEntry[] = [{ id: 'current' }];
```

`src/data/skills.ts`:

```typescript
import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  { id: 'backend', items: ['C#', '.NET', 'ASP.NET Core', 'SQL Server'] },
  { id: 'frontend', items: ['React', 'TypeScript', 'Vite'] },
  { id: 'database', items: ['SQL Server', 'PostgreSQL'] },
  { id: 'tools', items: ['Git', 'Docker', 'GitHub Actions'] },
];
```

`src/data/contact.ts`:

```typescript
export const contact = {
  email: 'rubencoto11@gmail.com',
  linkedin: 'https://linkedin.com/in/rubencoto',
  github: 'https://github.com/rubencoto',
};
```

- [ ] **Step 7: Commit**

```bash
git add src/data
git commit -m "Add typed data layer for projects, experience, skills, and contact"
```

---

### Task 6: LanguageSwitch component

**Files:**
- Create: `src/components/LanguageSwitch.tsx`
- Test: `src/components/LanguageSwitch.test.tsx`

- [ ] **Step 1: Write the failing test**

`src/components/LanguageSwitch.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { LanguageSwitch } from './LanguageSwitch';

describe('LanguageSwitch', () => {
  beforeEach(async () => {
    window.localStorage.clear();
    await i18n.changeLanguage('en');
  });

  it('switches the active language and persists the choice', async () => {
    const user = userEvent.setup();
    render(<LanguageSwitch />);

    await user.click(screen.getByRole('button'));

    expect(i18n.language).toBe('es');
    expect(window.localStorage.getItem('portfolio-lang')).toBe('es');
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module './LanguageSwitch'`.

- [ ] **Step 3: Write `src/components/LanguageSwitch.tsx`**

```typescript
import { useTranslation } from 'react-i18next';
import { STORAGE_KEY } from '../i18n';

const LANGUAGES = ['en', 'es'] as const;

export function LanguageSwitch() {
  const { i18n } = useTranslation();
  const current = i18n.language.startsWith('es') ? 'es' : 'en';
  const next = LANGUAGES.find((language) => language !== current) ?? 'en';

  function handleClick() {
    void i18n.changeLanguage(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <button type="button" className="language-switch" onClick={handleClick}>
      {next.toUpperCase()}
    </button>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/LanguageSwitch.tsx src/components/LanguageSwitch.test.tsx
git commit -m "Add LanguageSwitch component"
```

---

### Task 7: Nav component

**Files:**
- Create: `src/components/Nav.tsx`
- Test: `src/components/Nav.test.tsx`

- [ ] **Step 1: Write the failing test**

`src/components/Nav.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { Nav } from './Nav';

describe('Nav', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders a link for every section', () => {
    render(<Nav />);

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#hero');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about');
    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience');
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact');
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module './Nav'`.

- [ ] **Step 3: Write `src/components/Nav.tsx`**

```typescript
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from './LanguageSwitch';

const LINKS: Array<{ href: string; key: string }> = [
  { href: '#hero', key: 'nav.home' },
  { href: '#about', key: 'nav.about' },
  { href: '#experience', key: 'nav.experience' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#contact', key: 'nav.contact' },
];

export function Nav() {
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <a className="nav__brand" href="#hero">
        RC
      </a>
      <ul className="nav__links">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a className="nav__link" href={link.href}>
              {t(link.key)}
            </a>
          </li>
        ))}
      </ul>
      <LanguageSwitch />
    </nav>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/Nav.tsx src/components/Nav.test.tsx
git commit -m "Add Nav component"
```

---

### Task 8: Hero component

**Files:**
- Create: `src/components/Hero.tsx`
- Test: `src/components/Hero.test.tsx`

- [ ] **Step 1: Write the failing test**

`src/components/Hero.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { Hero } from './Hero';

describe('Hero', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders the name and a downloadable CV link', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { name: 'Ruben Coto' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute(
      'href',
      '/cv-ruben-coto.pdf',
    );
    expect(screen.getByRole('link', { name: 'View Projects' })).toHaveAttribute('href', '#projects');
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module './Hero'`.

- [ ] **Step 3: Write `src/components/Hero.tsx`**

```typescript
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      <p className="hero__greeting">{t('hero.greeting')}</p>
      <h1 className="hero__name">{t('hero.name')}</h1>
      <p className="hero__tagline">{t('hero.tagline')}</p>
      <div className="hero__actions">
        <a className="btn btn--primary" href="/cv-ruben-coto.pdf" download>
          {t('hero.downloadCv')}
        </a>
        <a className="btn btn--ghost" href="#projects">
          {t('hero.viewProjects')}
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.tsx src/components/Hero.test.tsx
git commit -m "Add Hero component"
```

---

### Task 9: About component

**Files:**
- Create: `src/components/About.tsx`
- Test: `src/components/About.test.tsx`

- [ ] **Step 1: Write the failing test**

`src/components/About.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { About } from './About';

describe('About', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders the About heading inside a section with id "about"', () => {
    render(<About />);

    const heading = screen.getByRole('heading', { name: 'About Me' });
    expect(heading).toBeInTheDocument();
    expect(heading.closest('section')).toHaveAttribute('id', 'about');
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module './About'`.

- [ ] **Step 3: Write `src/components/About.tsx`**

```typescript
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <h2 className="section__heading">{t('about.heading')}</h2>
      <p>{t('about.body')}</p>
    </section>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/About.tsx src/components/About.test.tsx
git commit -m "Add About component"
```

---

### Task 10: Experience component

**Files:**
- Create: `src/components/Experience.tsx`
- Test: `src/components/Experience.test.tsx`

- [ ] **Step 1: Write the failing test**

`src/components/Experience.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { Experience } from './Experience';

describe('Experience', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders one timeline entry per experience data item', () => {
    render(<Experience />);

    expect(screen.getByRole('heading', { name: 'Update this role title', level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/Update this company name/)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module './Experience'`.

- [ ] **Step 3: Write `src/components/Experience.tsx`**

```typescript
import { useTranslation } from 'react-i18next';
import { experience } from '../data/experience';

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section">
      <h2 className="section__heading">{t('experience.heading')}</h2>
      <ol className="timeline">
        {experience.map((entry) => (
          <li key={entry.id} className="timeline__item">
            <h3>{t(`experience.${entry.id}.role`)}</h3>
            <p className="timeline__meta">
              {t(`experience.${entry.id}.company`)} · {t(`experience.${entry.id}.period`)}
            </p>
            <p>{t(`experience.${entry.id}.description`)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/Experience.tsx src/components/Experience.test.tsx
git commit -m "Add Experience component"
```

---

### Task 11: ProjectCard and Projects components

**Files:**
- Create: `src/components/ProjectCard.tsx`
- Create: `src/components/Projects.tsx`
- Test: `src/components/ProjectCard.test.tsx`

- [ ] **Step 1: Write the failing test**

`src/components/ProjectCard.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import type { Project } from '../data/types';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders the module list when the project has modules', () => {
    const cdm: Project = {
      id: 'cdm',
      tech: ['C#', '.NET'],
      modules: [{ id: 'bot' }, { id: 'erp' }],
    };

    render(<ProjectCard project={cdm} />);

    expect(screen.getByText('Appointment booking bot')).toBeInTheDocument();
    expect(screen.getByText('Clinic management ERP')).toBeInTheDocument();
  });

  it('does not render a module list when the project has no modules', () => {
    const tucitaonline: Project = {
      id: 'tucitaonline',
      tech: ['C#', '.NET'],
    };

    render(<ProjectCard project={tucitaonline} />);

    expect(screen.queryByRole('heading', { level: 4 })).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module './ProjectCard'`.

- [ ] **Step 3: Write `src/components/ProjectCard.tsx`**

```typescript
import { useTranslation } from 'react-i18next';
import type { Project } from '../data/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <article className="project-card">
      <h3>{t(`projects.${project.id}.title`)}</h3>
      <p>{t(`projects.${project.id}.description`)}</p>
      <ul className="project-card__tech">
        {project.tech.map((tech) => (
          <li key={tech} className="tag">
            {tech}
          </li>
        ))}
      </ul>
      {project.modules && project.modules.length > 0 && (
        <div className="project-card__modules">
          <h4>{t(`projects.${project.id}.modulesHeading`)}</h4>
          <ul>
            {project.modules.map((module) => (
              <li key={module.id}>{t(`projects.${project.id}.modules.${module.id}`)}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Write `src/components/Projects.tsx` (composes ProjectCard with the data layer — no new behavior to unit test beyond what ProjectCard and the data layer already cover)**

```typescript
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section">
      <h2 className="section__heading">{t('projects.heading')}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add src/components/ProjectCard.tsx src/components/ProjectCard.test.tsx src/components/Projects.tsx
git commit -m "Add ProjectCard and Projects components"
```

---

### Task 12: Skills component

**Files:**
- Create: `src/components/Skills.tsx`
- Test: `src/components/Skills.test.tsx`

- [ ] **Step 1: Write the failing test**

`src/components/Skills.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { Skills } from './Skills';

describe('Skills', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders each skill category with its items', () => {
    render(<Skills />);

    expect(screen.getByRole('heading', { name: 'Backend' })).toBeInTheDocument();
    expect(screen.getByText('ASP.NET Core')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Frontend' })).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module './Skills'`.

- [ ] **Step 3: Write `src/components/Skills.tsx`**

```typescript
import { useTranslation } from 'react-i18next';
import { skillGroups } from '../data/skills';

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section">
      <h2 className="section__heading">{t('skills.heading')}</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.id} className="skill-group">
            <h3 className="skill-group__title">{t(`skills.categories.${group.id}`)}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/Skills.tsx src/components/Skills.test.tsx
git commit -m "Add Skills component"
```

---

### Task 13: Contact component

**Files:**
- Create: `src/components/Contact.tsx`
- Test: `src/components/Contact.test.tsx`

- [ ] **Step 1: Write the failing test**

`src/components/Contact.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { Contact } from './Contact';

describe('Contact', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders direct links to email, LinkedIn, and GitHub', () => {
    render(<Contact />);

    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:rubencoto11@gmail.com',
    );
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/rubencoto',
    );
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/rubencoto',
    );
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module './Contact'`.

- [ ] **Step 3: Write `src/components/Contact.tsx`**

```typescript
import { useTranslation } from 'react-i18next';
import { contact } from '../data/contact';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section">
      <h2 className="section__heading">{t('contact.heading')}</h2>
      <p>{t('contact.intro')}</p>
      <ul className="contact-links">
        <li>
          <a className="contact-link" href={`mailto:${contact.email}`}>
            {t('contact.emailLabel')}
          </a>
        </li>
        <li>
          <a className="contact-link" href={contact.linkedin} target="_blank" rel="noreferrer">
            {t('contact.linkedinLabel')}
          </a>
        </li>
        <li>
          <a className="contact-link" href={contact.github} target="_blank" rel="noreferrer">
            {t('contact.githubLabel')}
          </a>
        </li>
      </ul>
    </section>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/Contact.tsx src/components/Contact.test.tsx
git commit -m "Add Contact component"
```

---

### Task 14: Wire the full page together in App.tsx

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`
- Test: `src/App.test.tsx`

- [ ] **Step 1: Write the failing test**

`src/App.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from './i18n';
import { App } from './App';

describe('App', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders every section in order', () => {
    render(<App />);

    const sectionIds = screen
      .getAllByRole('heading', { level: 1 })
      .concat(screen.getAllByRole('heading', { level: 2 }))
      .map((heading) => heading.closest('section')?.id ?? 'hero');

    expect(sectionIds).toEqual(['hero', 'about', 'experience', 'projects', 'skills', 'contact']);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — `App` still renders only the "Portfolio scaffold" placeholder div, so no headings/sections are found.

- [ ] **Step 3: Replace the contents of `src/App.tsx`**

```typescript
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import './i18n';

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Add the theme stylesheet import to `src/main.tsx` if not already present**

Confirm `src/main.tsx` imports both stylesheets (added in Task 3):

```typescript
import './styles/theme.css';
import './index.css';
```

- [ ] **Step 6: Verify the full build succeeds**

Run: `npm run build`
Expected: PASS, no TypeScript errors, `dist/` produced.

- [ ] **Step 7: Manually verify in the browser**

Run: `npm run dev`
Open the printed local URL. Confirm: dark background renders, all six nav links scroll to their section, the language switch toggles all text to Spanish and back, and the "Download CV" link points at `/cv-ruben-coto.pdf` (it will 404 until Task 16's content gap is filled — that's expected at this stage). Stop the dev server (Ctrl+C) when done.

- [ ] **Step 8: Commit**

```bash
git add src/App.tsx src/App.test.tsx src/main.tsx
git commit -m "Wire all sections together in App"
```

---

### Task 15: GitHub Pages deployment workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Write `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm test
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Verify the YAML is well-formed**

Run: `node -e "require('node:fs').readFileSync('.github/workflows/deploy.yml', 'utf8')"`
Expected: no error (this only confirms the file is readable; full validation happens on first push when the Actions run triggers).

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
```

> **Before this workflow will succeed on GitHub:** push this repo to GitHub under a repo named `portfolio` (or update `base` in `vite.config.ts` to match your chosen repo name — see the note in Task 1), then in the repo's Settings → Pages, set "Source" to "GitHub Actions".

---

### Task 16: Project README documenting setup and remaining content gaps

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write `README.md`**

```markdown
# Ruben Coto — Portfolio

A bilingual (EN/ES), one-page portfolio site built with React, Vite, and TypeScript.

## Development

\`\`\`bash
npm install
npm run dev       # start the dev server
npm test          # run the test suite once
npm run typecheck # type-check without emitting
npm run build     # type-check and build to dist/
\`\`\`

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
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "Add project README"
```

---

## Self-review notes

- **Spec coverage:** Hero+CV download (Task 8), About (9), Experience (10), Projects incl. TuCitaOnline + CDM modules (11), Skills (12), Contact via direct links only (13), dark/tech visual direction (3), one-page scroll nav (7), EN/ES via react-i18next with persisted switch (4, 6), GitHub Pages deploy (15), content gaps documented (16) — all spec sections have a corresponding task.
- **Out of scope items honored:** no contact form, no React Router/multi-page, no blog, no analytics — none of the tasks introduce these.
- **Type consistency checked:** `Project`, `ExperienceEntry`, `SkillGroup` (from `src/data/types.ts`) are used with the same shape across `src/data/*.ts` and the components that consume them (`ProjectCard`, `Experience`, `Skills`). The `STORAGE_KEY` exported from `src/i18n/index.ts` in Task 4 is the same constant imported by `LanguageSwitch.tsx` in Task 6 — no re-declared string literal.
