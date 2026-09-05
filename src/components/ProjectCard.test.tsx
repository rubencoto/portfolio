import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import type { Project } from '../data/types';
import { ProjectCard } from './ProjectCard';

const cdm: Project = {
  id: 'cdm',
  tech: ['.NET 8', 'React 18'],
  links: { live: 'https://consultoriosdrmoraga.com' },
};

const tucitaonline: Project = {
  id: 'tucitaonline',
  tech: ['C#', 'React'],
};

describe('ProjectCard', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('presents the project as a case study with context, summary and stack', () => {
    render(<ProjectCard project={cdm} />);

    expect(
      screen.getByRole('heading', { name: 'Consultorios Dr. Moraga', level: 3 }),
    ).toBeInTheDocument();
    expect(screen.getByText('Clinical management system · Client project')).toBeInTheDocument();
    expect(screen.getByText('Live')).toBeInTheDocument();
    expect(screen.getByText('.NET 8')).toBeInTheDocument();
  });

  it('lists architecture notes when the project has them', () => {
    render(<ProjectCard project={cdm} />);

    expect(screen.getByText('Architecture')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Modular monolith in .NET 8 structured with Domain-Driven Design across 16+ bounded modules.',
      ),
    ).toBeInTheDocument();
  });

  it('omits the architecture block for a project with no notes', () => {
    render(<ProjectCard project={tucitaonline} />);

    expect(screen.queryByText('Architecture')).not.toBeInTheDocument();
  });

  it('renders a live link when the project has one', () => {
    render(<ProjectCard project={cdm} />);

    expect(screen.getByRole('link', { name: 'Visit site' })).toHaveAttribute(
      'href',
      'https://consultoriosdrmoraga.com',
    );
  });

  it('renders no links at all for a project without them', () => {
    render(<ProjectCard project={tucitaonline} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
