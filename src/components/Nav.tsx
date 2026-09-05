import { useEffect, useId, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from './LanguageSwitch';

const LINKS: Array<{ href: string; key: string }> = [
  { href: '#hero', key: 'nav.home' },
  { href: '#about', key: 'nav.about' },
  { href: '#experience', key: 'nav.experience' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#contact', key: 'nav.contact' },
];

const DESKTOP = '(min-width: 761px)';

export function Nav() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  // Close on Escape, and whenever the viewport grows past the mobile
  // breakpoint so the panel can never be left open behind the desktop bar.
  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    const desktop = window.matchMedia(DESKTOP);
    function onChange() {
      if (desktop.matches) {
        setOpen(false);
      }
    }

    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onChange);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onChange);
    };
  }, [open]);

  return (
    <nav className="nav" data-open={open}>
      <div className="nav__bar shell">
        <a className="nav__brand" href="#hero" onClick={() => setOpen(false)}>
          {t('hero.name')}
        </a>

        <ul className="nav__menu" id={menuId}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a className="nav__link" href={link.href} onClick={() => setOpen(false)}>
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <LanguageSwitch />
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={t(open ? 'nav.closeMenu' : 'nav.openMenu')}
            onClick={() => setOpen((value) => !value)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="none">
              {open ? (
                <path
                  d="M4 4l10 10M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2.5 5h13M2.5 9h13M2.5 13h13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
