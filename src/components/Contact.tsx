import { useTranslation } from 'react-i18next';
import { contact } from '../data/contact';
import { SectionHeading } from './SectionHeading';

/** Shows the destination itself rather than a generic word — easier to scan. */
function display(url: string): string {
  return url.replace(/^https?:\/\//, '');
}

export function Contact() {
  const { t } = useTranslation();

  const rows = [
    { key: 'email', label: t('contact.emailLabel'), href: `mailto:${contact.email}`, text: contact.email },
    {
      key: 'linkedin',
      label: t('contact.linkedinLabel'),
      href: contact.linkedin,
      text: display(contact.linkedin),
      external: true,
    },
    {
      key: 'github',
      label: t('contact.githubLabel'),
      href: contact.github,
      text: display(contact.github),
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
            <span className="label">{row.label}</span>
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
