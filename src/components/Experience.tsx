import { useTranslation } from 'react-i18next';
import { experience } from '../data/experience';
import { useList } from '../hooks/useList';
import { SectionHeading } from './SectionHeading';
import type { ExperienceEntry } from '../data/types';

function Role({ entry }: { entry: ExperienceEntry }) {
  const { t } = useTranslation();
  const points = useList(`experience.${entry.id}.points`);

  return (
    <li className="role reveal">
      <div className="role__period label">
        <div>{t(`experience.${entry.id}.period`)}</div>
        <div>{t(`experience.${entry.id}.location`)}</div>
      </div>
      <div>
        <h3 className="role__title">{t(`experience.${entry.id}.role`)}</h3>
        <p className="role__company">{t(`experience.${entry.id}.company`)}</p>
        <ul className="role__points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {entry.tech && entry.tech.length > 0 && (
          <ul className="stack">
            {entry.tech.map((tech) => (
              <li key={tech} className="tok">
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section shell">
      <SectionHeading title={t('experience.heading')} />
      <ol className="roles">
        {experience.map((entry) => (
          <Role key={entry.id} entry={entry} />
        ))}
      </ol>
    </section>
  );
}
