interface SectionHeadingProps {
  /** Two-digit plate number shown before the title, e.g. "01". */
  index: string;
  title: string;
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="section__head" data-reveal>
      <span className="section__index" aria-hidden="true">
        {index}
      </span>
      <h2 className="section__heading">{title}</h2>
      <span className="section__rule" aria-hidden="true" />
    </div>
  );
}
