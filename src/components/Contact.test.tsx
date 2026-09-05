import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { Contact } from './Contact';

describe('Contact', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  // The link text is the destination itself so it can be read and copied
  // without hovering, which is why these assert on the address, not a label.
  it('renders direct links to email, LinkedIn, and GitHub', () => {
    render(<Contact />);

    expect(screen.getByRole('link', { name: 'rubencoto11@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:rubencoto11@gmail.com',
    );
    expect(screen.getByRole('link', { name: 'linkedin.com/in/rubencoto' })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/rubencoto',
    );
    expect(screen.getByRole('link', { name: 'github.com/rubencoto' })).toHaveAttribute(
      'href',
      'https://github.com/rubencoto',
    );
  });

  it('opens external profiles in a new tab without leaking the referrer', () => {
    render(<Contact />);

    const github = screen.getByRole('link', { name: 'github.com/rubencoto' });
    expect(github).toHaveAttribute('target', '_blank');
    expect(github).toHaveAttribute('rel', 'noopener noreferrer');

    // mailto: should stay in the same tab.
    expect(screen.getByRole('link', { name: 'rubencoto11@gmail.com' })).not.toHaveAttribute(
      'target',
    );
  });
});
