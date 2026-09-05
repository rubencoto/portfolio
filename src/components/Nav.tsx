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

export function Nav() {
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <a className="nav__brand" href="#hero">
        RC
      </a>
      <ul className="nav__links">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a className="nav__link" href={link.href}>
              {t(link.key)}
            </a>
          </li>
        ))}
      </ul>
      <LanguageSwitch />
    </nav>
  );
}
