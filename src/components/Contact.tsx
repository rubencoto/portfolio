import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { contact } from '../data/contact';
import { GitHubIcon, LinkedInIcon } from './icons';
import { SectionHeading } from './SectionHeading';

/** Shows the destination itself rather than a generic word — easier to scan. */
function display(url: string): string {
  return url.replace(/^https?:\/\//, '');
}

export function Contact() {
  const { t } = useTranslation();

  const rows: Array<{
    key: string;
    label: string;
    href: string;
    text: string;
    icon?: ReactNode;
    external?: boolean;
  }> = [
    { key: 'email', label: t('contact.emailLabel'), href: `mailto:${contact.email}`, text: contact.email },
    {
      key: 'linkedin',
      label: t('contact.linkedinLabel'),
      href: contact.linkedin,
      text: display(contact.linkedin),
      icon: <LinkedInIcon />,
      external: true,
    },
    {
      key: 'github',
      label: t('contact.githubLabel'),
      href: contact.github,
      text: display(contact.github),
      icon: <GitHubIcon />,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section shell">
      <SectionHeading title={t('contact.heading')} />
      <p className="contact__lead">{t('contact.intro')}</p>
      <ul className="contact__list">
        {rows.map((row) => (
          <li key={row.key} className="contact__row">
            <span className="label contact__label">
              {row.icon}
              {row.label}
            </span>
            <a
              className="link"
              href={row.href}
              {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {row.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
