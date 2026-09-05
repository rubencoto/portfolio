import { useTranslation } from 'react-i18next';
import { useList } from '../hooks/useList';
import type { Project } from '../data/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  const notes = useList(`projects.${project.id}.notes`);

  return (
    <article className="project">
      <header className="project__head">
        <div>
          <h3 className="project__title">{t(`projects.${project.id}.title`)}</h3>
          <p className="project__context">{t(`projects.${project.id}.context`)}</p>
        </div>
        <span className="project__status">{t(`projects.${project.id}.status`)}</span>
      </header>

      <div className="project__body">
        <p className="project__summary">{t(`projects.${project.id}.summary`)}</p>

        {notes.length > 0 && (
          <div className="project__field">
            <span className="label">{t('projects.architectureLabel')}</span>
            <ul className="project__notes">
              {notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="project__field">
          <span className="label">{t('projects.stackLabel')}</span>
          <ul className="stack">
            {project.tech.map((tech) => (
              <li key={tech} className="tok">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {(project.links?.live || project.links?.github) && (
        <div className="project__links">
          {project.links.live && (
            <a className="link" href={project.links.live} target="_blank" rel="noopener noreferrer">
              {t('projects.viewLiveLabel')}
            </a>
          )}
          {project.links.github && (
            <a
              className="link"
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('projects.viewCodeLabel')}
            </a>
          )}
        </div>
      )}
    </article>
  );
}
