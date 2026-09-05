import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Ruben Coto</span>
      <span>{t('footer.builtWith')}</span>
    </footer>
  );
}
