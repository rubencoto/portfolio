import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section">
      <SectionHeading index="03" title={t('projects.heading')} />
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} data-reveal>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
