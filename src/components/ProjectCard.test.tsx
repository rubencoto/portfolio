import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import type { Project } from '../data/types';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders the module list when the project has modules', () => {
    const cdm: Project = {
      id: 'cdm',
      tech: ['C#', '.NET'],
      modules: [{ id: 'bot' }, { id: 'erp' }],
    };

    render(<ProjectCard project={cdm} />);

    expect(screen.getByText('Appointment booking bot')).toBeInTheDocument();
    expect(screen.getByText('Clinic management ERP')).toBeInTheDocument();
  });

  it('does not render a module list when the project has no modules', () => {
    const tucitaonline: Project = {
      id: 'tucitaonline',
      tech: ['C#', '.NET'],
    };

    render(<ProjectCard project={tucitaonline} />);

    expect(screen.queryByRole('heading', { level: 4 })).not.toBeInTheDocument();
  });
});
