import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { Hero } from './Hero';

describe('Hero', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders the name and a downloadable CV link', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { name: 'Ruben Coto' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute(
      'href',
      '/portfolio/cv-ruben-coto.pdf',
    );
    expect(screen.getByRole('link', { name: 'View Projects' })).toHaveAttribute('href', '#projects');
  });

  // The site is served from a project subpath on GitHub Pages, so a bare
  // "/cv-ruben-coto.pdf" resolves to the domain root and 404s.
  it('points the CV link at the deployed base path, not the domain root', () => {
    render(<Hero />);

    const href = screen.getByRole('link', { name: 'Download CV' }).getAttribute('href');

    expect(href).toBe(`${import.meta.env.BASE_URL}cv-ruben-coto.pdf`);
    expect(href?.startsWith('/cv-')).toBe(false);
  });
});
