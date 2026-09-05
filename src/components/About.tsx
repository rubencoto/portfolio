import { useTranslation } from 'react-i18next';
import { aboutBlocks } from '../data/about';
import { SectionHeading } from './SectionHeading';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section shell">
      <SectionHeading title={t('about.heading')} />
      <p className="about__lead reveal">{t('about.lead')}</p>
      <div className="about__grid reveal">
        {aboutBlocks.map((block) => (
          <article key={block.id} className="about__block">
            <h3 className="about__block-title">{t(`about.blocks.${block.id}.title`)}</h3>
            <p className="about__block-body">{t(`about.blocks.${block.id}.body`)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
