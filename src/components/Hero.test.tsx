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
      '/cv-ruben-coto.pdf',
    );
    expect(screen.getByRole('link', { name: 'View Projects' })).toHaveAttribute('href', '#projects');
  });
});
