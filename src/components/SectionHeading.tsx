import type { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  /** Optional right-aligned detail, e.g. a count or a supporting link. */
  aside?: ReactNode;
}

export function SectionHeading({ title, aside }: SectionHeadingProps) {
  return (
    <div className="section__head">
      <h2 className="section__title">{title}</h2>
      {aside ? <div className="label">{aside}</div> : null}
    </div>
  );
}
