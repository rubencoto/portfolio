/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is served from a project subpath on GitHub Pages. This assumes the
// repo is named `portfolio` — if the repo name differs, update this value.
const BASE = '/portfolio/';

export default defineConfig({
  base: BASE,
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    // Vitest does not inherit `base`, so mirror it explicitly. Without this,
    // `import.meta.env.BASE_URL` is "/" under test and subpath-relative links
    // (the CV download) would look correct in tests while 404ing in production.
    env: { BASE_URL: BASE },
  },
});
