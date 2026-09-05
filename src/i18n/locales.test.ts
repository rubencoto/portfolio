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
