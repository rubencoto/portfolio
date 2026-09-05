import { useTranslation } from 'react-i18next';
import { skillGroups } from '../data/skills';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section shell">
      <SectionHeading title={t('skills.heading')} />
      <div className="skills reveal">
        {skillGroups.map((group) => (
          <div key={group.id} className="skills__group">
            <h3 className="skills__name">{t(`skills.categories.${group.id}`)}</h3>
            <ul className="skills__items">
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
