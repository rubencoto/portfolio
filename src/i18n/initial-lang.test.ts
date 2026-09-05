import { describe, expect, it, vi } from 'vitest';

describe('i18n initial document lang', () => {
  it('sets document.documentElement.lang correctly on first load, before any explicit changeLanguage call', async () => {
    vi.resetModules();
    document.documentElement.lang = 'en';
    window.localStorage.setItem('portfolio-lang', 'es');

    await import('./index');

    expect(document.documentElement.lang).toBe('es');

    window.localStorage.removeItem('portfolio-lang');
  });
});
