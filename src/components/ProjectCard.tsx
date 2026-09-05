import { useTranslation } from 'react-i18next';
import type { Project } from '../data/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <article className="project-card">
      <div className="project-card__body">
        <h3 className="project-card__title">{t(`projects.${project.id}.title`)}</h3>
        <p className="project-card__description">{t(`projects.${project.id}.description`)}</p>
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
          <a
            className="project-card__link"
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('projects.viewLiveLabel')}
          </a>
        )}
      </div>
    </article>
  );
}
