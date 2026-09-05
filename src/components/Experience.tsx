import { useTranslation } from 'react-i18next';
import { experience } from '../data/experience';

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section">
      <h2 className="section__heading">{t('experience.heading')}</h2>
      <ol className="timeline">
        {experience.map((entry) => (
          <li key={entry.id} className="timeline__item">
            <h3>{t(`experience.${entry.id}.role`)}</h3>
            <p className="timeline__meta">
              {t(`experience.${entry.id}.company`)} · {t(`experience.${entry.id}.period`)}
            </p>
            <p>{t(`experience.${entry.id}.description`)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
