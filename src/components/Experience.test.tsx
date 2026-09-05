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

    expect(
      screen.getByRole('heading', { name: 'Software Engineer Consultant', level: 3 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'AWS Technical Support Specialist', level: 3 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Advanced Technician, D2AS', level: 3 }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Amazon Support Services CR/)).toHaveLength(2);
  });

  // The current contract role should lead the list, not the earlier AWS role.
  it('lists the current role first', () => {
    render(<Experience />);

    const roles = screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent);
    expect(roles[0]).toBe('Software Engineer Consultant');
  });
});
