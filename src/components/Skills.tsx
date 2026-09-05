import { useTranslation } from 'react-i18next';
import { skillGroups } from '../data/skills';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section">
      <SectionHeading index="04" title={t('skills.heading')} />
      <div className="skills-index">
        {skillGroups.map((group) => (
          <div key={group.id} className="skill-group" data-reveal>
            <h3 className="skill-group__title">{t(`skills.categories.${group.id}`)}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
