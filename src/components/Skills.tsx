import { useTranslation } from 'react-i18next';
import { skillGroups } from '../data/skills';

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section">
      <h2 className="section__heading">{t('skills.heading')}</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.id} className="skill-group">
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
