import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { Contact } from './Contact';

describe('Contact', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders direct links to email, LinkedIn, and GitHub', () => {
    render(<Contact />);

    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:rubencoto11@gmail.com',
    );
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/rubencoto',
    );
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/rubencoto',
    );
  });
});
