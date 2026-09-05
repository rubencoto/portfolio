import { useTranslation } from 'react-i18next';
import { experience } from '../data/experience';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section">
      <SectionHeading index="02" title={t('experience.heading')} />
      <ol className="timeline">
        {experience.map((entry) => (
          <li key={entry.id} className="timeline__item" data-reveal>
            <p className="timeline__period">{t(`experience.${entry.id}.period`)}</p>
            <div>
              <h3 className="timeline__role">{t(`experience.${entry.id}.role`)}</h3>
              <p className="timeline__company">{t(`experience.${entry.id}.company`)}</p>
              <p className="timeline__description">{t(`experience.${entry.id}.description`)}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
