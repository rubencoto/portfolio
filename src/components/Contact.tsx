import { useTranslation } from 'react-i18next';
import { contact } from '../data/contact';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section">
      <SectionHeading index="05" title={t('contact.heading')} />
      <p className="contact__lead" data-reveal>
        {t('contact.intro')}
      </p>
      <ul className="contact-links" data-reveal>
        <li>
          <a className="contact-link" href={`mailto:${contact.email}`}>
            {t('contact.emailLabel')}
          </a>
        </li>
        <li>
          <a
            className="contact-link"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('contact.linkedinLabel')}
          </a>
        </li>
        <li>
          <a
            className="contact-link"
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('contact.githubLabel')}
          </a>
        </li>
      </ul>
    </section>
  );
}
