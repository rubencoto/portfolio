import { describe, expect, it } from 'vitest';
import i18n from './index';

describe('i18n document lang sync', () => {
  it('updates document.documentElement.lang when the language changes', async () => {
    await i18n.changeLanguage('en');
    expect(document.documentElement.lang).toBe('en');

    await i18n.changeLanguage('es');
    expect(document.documentElement.lang).toBe('es');

    await i18n.changeLanguage('en');
    expect(document.documentElement.lang).toBe('en');
  });
});
