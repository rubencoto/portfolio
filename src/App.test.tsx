import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from './i18n';
import { App } from './App';

describe('App', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('en');
  });

  it('renders every section in order', () => {
    render(<App />);

    const sectionIds = screen
      .getAllByRole('heading', { level: 1 })
      .concat(screen.getAllByRole('heading', { level: 2 }))
      .map((heading) => heading.closest('section')?.id ?? 'hero');

    expect(sectionIds).toEqual(['hero', 'about', 'experience', 'projects', 'skills', 'contact']);
  });
});
