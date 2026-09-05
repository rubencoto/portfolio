import { useTranslation } from 'react-i18next';
import type { Project } from '../data/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <article className="project-card">
      <h3>{t(`projects.${project.id}.title`)}</h3>
      <p>{t(`projects.${project.id}.description`)}</p>
      <ul className="project-card__tech">
        {project.tech.map((tech) => (
          <li key={tech} className="tag">
            {tech}
          </li>
        ))}
      </ul>
      {project.modules && project.modules.length > 0 && (
        <div className="project-card__modules">
          <h4>{t(`projects.${project.id}.modulesHeading`)}</h4>
          <ul>
            {project.modules.map((module) => (
              <li key={module.id}>{t(`projects.${project.id}.modules.${module.id}`)}</li>
            ))}
          </ul>
        </div>
      )}
      {project.links?.live && (
        <a className="contact-link" href={project.links.live} target="_blank" rel="noreferrer">
          {t('projects.viewLiveLabel')}
        </a>
      )}
    </article>
  );
}
