import { useId } from 'react';

/**
 * Low-opacity Islamic geometric pattern layer (eight-pointed stars) that slowly
 * drifts upward. Color/opacity/animation come from the `.geo` class in index.css,
 * which the parent section can override (verse, footer, coming-soon variants).
 */
const GeoPattern = ({ className = '' }) => {
  const rawId = useId();
  const patternId = `star8-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div className={`geo ${className}`.trim()} aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id={patternId} width="90" height="90" patternUnits="userSpaceOnUse">
            <rect x="20" y="20" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
            <polygon points="45,12 78,45 45,78 12,45" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="45" cy="45" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};

export default GeoPattern;
