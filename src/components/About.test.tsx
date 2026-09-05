import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { About } from './About';

describe('About', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders the About heading inside a section with id "about"', () => {
    render(<About />);

    const heading = screen.getByRole('heading', { name: 'About', level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading.closest('section')).toHaveAttribute('id', 'about');
  });

  it('breaks the background into labelled blocks rather than one long paragraph', () => {
    render(<About />);

    expect(screen.getByRole('heading', { name: 'Engineering focus', level: 3 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Cloud & infrastructure', level: 3 }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Education', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Certification', level: 3 })).toBeInTheDocument();
  });
});
