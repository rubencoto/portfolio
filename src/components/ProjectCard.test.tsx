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
      tech: ['.NET 8', 'React'],
      modules: [{ id: 'scheduling' }, { id: 'whatsappBot' }],
    };

    render(<ProjectCard project={cdm} />);

    expect(screen.getByText('Configurable per-room appointment scheduling')).toBeInTheDocument();
    expect(
      screen.getByText('AI-powered WhatsApp agent for appointment booking (Twilio + Anthropic SDK)'),
    ).toBeInTheDocument();
  });

  it('does not render a module list when the project has no modules', () => {
    const tucitaonline: Project = {
      id: 'tucitaonline',
      tech: ['C#', '.NET'],
    };

    render(<ProjectCard project={tucitaonline} />);

    expect(screen.queryByRole('heading', { level: 4 })).not.toBeInTheDocument();
  });

  it('renders a live link when the project has one', () => {
    const cdm: Project = {
      id: 'cdm',
      tech: ['.NET 8'],
      links: { live: 'https://consultoriosdrmoraga.com' },
    };

    render(<ProjectCard project={cdm} />);

    expect(screen.getByRole('link', { name: 'Visit Site' })).toHaveAttribute(
      'href',
      'https://consultoriosdrmoraga.com',
    );
  });

  it('does not render a live link when the project has none', () => {
    const tucitaonline: Project = {
      id: 'tucitaonline',
      tech: ['C#', '.NET'],
    };

    render(<ProjectCard project={tucitaonline} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
