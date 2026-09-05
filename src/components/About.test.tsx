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

    const heading = screen.getByRole('heading', { name: 'About Me' });
    expect(heading).toBeInTheDocument();
    expect(heading.closest('section')).toHaveAttribute('id', 'about');
  });
});
