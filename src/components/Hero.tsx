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
