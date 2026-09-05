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
