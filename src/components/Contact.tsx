import { useTranslation } from 'react-i18next';
import { contact } from '../data/contact';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section">
      <h2 className="section__heading">{t('contact.heading')}</h2>
      <p>{t('contact.intro')}</p>
      <ul className="contact-links">
        <li>
          <a className="contact-link" href={`mailto:${contact.email}`}>
            {t('contact.emailLabel')}
          </a>
        </li>
        <li>
          <a className="contact-link" href={contact.linkedin} target="_blank" rel="noreferrer">
            {t('contact.linkedinLabel')}
          </a>
        </li>
        <li>
          <a className="contact-link" href={contact.github} target="_blank" rel="noreferrer">
            {t('contact.githubLabel')}
          </a>
        </li>
      </ul>
    </section>
  );
}
