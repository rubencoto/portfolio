import { useTranslation } from 'react-i18next';

/**
 * Built from BASE_URL rather than a bare "/" path: the site is served from a
 * project subpath on GitHub Pages, so an absolute root link would 404.
 */
const CV_HREF = `${import.meta.env.BASE_URL}cv-ruben-coto.pdf`;

/** A short signal of the day-to-day stack — deliberately not a badge wall. */
const STACK = ['.NET / ASP.NET Core', 'React / TypeScript', 'AWS', 'MySQL', 'Docker'];

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero shell">
      <h1 className="hero__name">{t('hero.name')}</h1>
      <p className="hero__role">{t('hero.role')}</p>
      <p className="hero__summary">{t('hero.summary')}</p>

      <ul className="hero__stack">
        {STACK.map((item) => (
          <li key={item} className="tok">
            {item}
          </li>
        ))}
      </ul>

      <p className="hero__meta label">
        <span className="hero__dot" aria-hidden="true" />
        <span>{t('hero.availability')}</span>
        <span className="hero__sep" aria-hidden="true">
          ·
        </span>
        <span>{t('hero.location')}</span>
      </p>

      <div className="hero__actions">
        <a className="btn btn--primary" href={CV_HREF} download>
          {t('hero.downloadCv')}
        </a>
        <a className="btn btn--secondary" href="#projects">
          {t('hero.viewProjects')}
        </a>
      </div>
    </section>
  );
}
