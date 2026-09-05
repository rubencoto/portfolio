import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import i18n from '../i18n';
import { LanguageSwitch } from './LanguageSwitch';

describe('LanguageSwitch', () => {
  beforeEach(async () => {
    window.localStorage.clear();
    await i18n.changeLanguage('en');
  });

  it('switches the active language and persists the choice', async () => {
    const user = userEvent.setup();
    render(<LanguageSwitch />);

    await user.click(screen.getByRole('button'));

    expect(i18n.language).toBe('es');
    expect(window.localStorage.getItem('portfolio-lang')).toBe('es');
  });
});
