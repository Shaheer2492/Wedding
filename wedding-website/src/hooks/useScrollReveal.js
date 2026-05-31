import { useEffect } from 'react';

/**
 * Reveals elements with the `.reveal` class as they scroll into view by adding
 * `.in` (which transitions opacity/transform via index.css). Animate-once:
 * each element is unobserved after it reveals. Elements already in the initial
 * viewport (e.g. the hero) reveal immediately on mount with their stagger delays.
 */
export function useScrollReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (!els.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
