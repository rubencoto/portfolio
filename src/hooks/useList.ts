import { useTranslation } from 'react-i18next';

/**
 * Reads an array-valued translation key (bullet lists, architecture notes).
 * Returns an empty array rather than throwing if the key is missing or is not
 * an array, so a translation gap degrades to "no bullets" instead of a crash.
 */
export function useList(key: string): string[] {
  const { t } = useTranslation();
  const value = t(key, { returnObjects: true });

  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is string => typeof item === 'string');
}
