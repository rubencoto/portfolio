import { useEffect } from 'react';

/**
 * Adds `data-shown` to `.reveal` elements once they enter the viewport. One
 * observer for the page rather than one per component.
 *
 * Degrades to "everything visible" when IntersectionObserver is unavailable
 * (jsdom under test, older browsers) so content is never stuck hidden.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((target) => target.setAttribute('data-shown', ''));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.setAttribute('data-shown', '');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
}
