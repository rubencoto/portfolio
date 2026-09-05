import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { Nav } from './Nav';

describe('Nav', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders a link for every section', () => {
    render(<Nav />);

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#hero');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about');
    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience');
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact');
  });
});
