import { useTranslation } from 'react-i18next';
import { aboutFacts } from '../data/about';
import { SectionHeading } from './SectionHeading';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <SectionHeading index="01" title={t('about.heading')} />
      <div className="about__layout">
        <p className="about__body" data-reveal>
          {t('about.body')}
        </p>
        <dl className="facts" data-reveal>
          {aboutFacts.map((fact) => (
            <div key={fact.id} className="facts__row">
              <dt className="facts__label">{t(`about.facts.${fact.id}.label`)}</dt>
              <dd className="facts__value">{t(`about.facts.${fact.id}.value`)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
