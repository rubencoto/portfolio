import { useTranslation } from 'react-i18next';

/**
 * Built from BASE_URL rather than a bare "/" path: the site is served from a
 * project subpath on GitHub Pages, so an absolute root link would 404.
 */
const CV_HREF = `${import.meta.env.BASE_URL}cv-ruben-coto.pdf`;

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      <p className="hero__meta" data-enter="1">
        <span className="hero__status">{t('hero.availability')}</span>
        <span className="hero__divider" aria-hidden="true" />
        <span>{t('hero.location')}</span>
      </p>
      <p className="hero__greeting" data-enter="2">
        {t('hero.greeting')}
      </p>
      <h1 className="hero__name" data-enter="3">
        {t('hero.name')}
      </h1>
      <div className="hero__rule" data-enter="4" aria-hidden="true" />
      <p className="hero__tagline" data-enter="5">
        {t('hero.tagline')}
      </p>
      <div className="hero__actions" data-enter="6">
        <a className="btn btn--primary" href={CV_HREF} download>
          {t('hero.downloadCv')}
        </a>
        <a className="btn btn--ghost" href="#projects">
          {t('hero.viewProjects')}
        </a>
      </div>
    </section>
  );
}
