import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section">
      <h2 className="section__heading">{t('projects.heading')}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
