import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { Experience } from './Experience';

describe('Experience', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders one timeline entry per experience data item', () => {
    render(<Experience />);

    expect(screen.getByRole('heading', { name: 'Update this role title', level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/Update this company name/)).toBeInTheDocument();
  });
});
