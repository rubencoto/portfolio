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
