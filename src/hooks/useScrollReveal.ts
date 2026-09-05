import { useEffect } from 'react';

/**
 * Reveals every `[data-reveal]` element once it scrolls into view by stamping
 * `data-revealed` on it. One observer for the whole page rather than one per
 * component, so adding a revealed element costs nothing but the attribute.
 *
 * Degrades to "everything visible" when IntersectionObserver is unavailable
 * (jsdom under test, very old browsers) so content is never stuck hidden.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((target) => target.setAttribute('data-revealed', ''));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.setAttribute('data-revealed', '');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
}
