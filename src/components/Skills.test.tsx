import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { Skills } from './Skills';

describe('Skills', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders each skill category with its items', () => {
    render(<Skills />);

    expect(screen.getByRole('heading', { name: 'Backend' })).toBeInTheDocument();
    expect(screen.getByText('ASP.NET Core')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Frontend' })).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
