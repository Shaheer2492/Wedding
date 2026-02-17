import { useId } from 'react';
import { motion } from 'framer-motion';

const FloralCorner = ({ position = 'top-left', className = '' }) => {
  const id = useId();
  const transforms = {
    'top-left': '',
    'top-right': '-scale-x-100',
    'bottom-left': '-scale-y-100',
    'bottom-right': '-scale-x-100 -scale-y-100',
  };

  const placements = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      className={`absolute ${placements[position]} ${transforms[position]} pointer-events-none z-0 ${className}`}
    >
      <svg
        viewBox="0 0 250 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-60 lg:h-60"
      >
        <defs>
          <linearGradient id={`${id}-pg1`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8B4B8" />
            <stop offset="100%" stopColor="#FFDFD3" />
          </linearGradient>
          <linearGradient id={`${id}-pg2`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C08B8E" />
            <stop offset="100%" stopColor="#E8B4B8" />
          </linearGradient>
          <linearGradient id={`${id}-pg3`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F7E7DC" />
            <stop offset="100%" stopColor="#FFDFD3" />
          </linearGradient>
          <linearGradient id={`${id}-lg1`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9BB8A0" />
            <stop offset="100%" stopColor="#C4D7C8" />
          </linearGradient>
          <linearGradient id={`${id}-lg2`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7DA383" />
            <stop offset="100%" stopColor="#9BB8A0" />
          </linearGradient>
        </defs>

        {/* ===== MAIN VINE BRANCHES ===== */}
        {/* Primary vine curving from corner */}
        <path
          d="M0 15 C 20 15, 35 25, 50 45 C 65 65, 75 90, 85 120 C 95 150, 100 175, 95 200"
          stroke="#9BB8A0"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* Secondary vine branch */}
        <path
          d="M15 0 C 15 20, 25 40, 45 55 C 65 70, 90 80, 120 85 C 150 90, 175 88, 200 80"
          stroke="#9BB8A0"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Tertiary thin vine */}
        <path
          d="M5 5 C 25 30, 40 55, 65 70 C 85 82, 105 88, 130 92"
          stroke="#C4D7C8"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Curling tendril 1 */}
        <path
          d="M95 200 C 100 210, 108 215, 105 225 C 102 235, 92 232, 90 225"
          stroke="#9BB8A0"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Curling tendril 2 */}
        <path
          d="M200 80 C 210 82, 218 78, 225 82 C 232 86, 228 95, 220 92"
          stroke="#9BB8A0"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* ===== LEAVES ALONG VINES ===== */}
        {/* Leaf pair 1 - near the main bloom */}
        <path d="M42 48 C 32 35, 22 38, 28 52 C 34 60, 42 55, 42 48" fill={`url(#${id}-lg1)`} opacity="0.8" />
        <path d="M48 42 C 42 28, 52 22, 56 34 C 58 42, 52 46, 48 42" fill={`url(#${id}-lg2)`} opacity="0.7" />

        {/* Leaf pair 2 - along primary vine */}
        <path d="M78 105 C 65 95, 58 102, 68 115 C 74 122, 80 115, 78 105" fill={`url(#${id}-lg1)`} opacity="0.75" />
        <path d="M88 98 C 82 85, 92 80, 96 92 C 98 100, 92 104, 88 98" fill={`url(#${id}-lg2)`} opacity="0.65" />

        {/* Leaf pair 3 - along secondary vine */}
        <path d="M105 80 C 98 68, 108 62, 115 74 C 118 82, 110 86, 105 80" fill={`url(#${id}-lg1)`} opacity="0.7" />
        <path d="M98 88 C 85 82, 82 92, 95 98 C 102 100, 104 94, 98 88" fill={`url(#${id}-lg2)`} opacity="0.6" />

        {/* Leaf 4 - far along primary vine */}
        <path d="M92 165 C 80 158, 76 168, 86 178 C 92 182, 96 175, 92 165" fill={`url(#${id}-lg1)`} opacity="0.65" />

        {/* Leaf 5 - far along secondary vine */}
        <path d="M165 86 C 158 74, 168 70, 175 82 C 178 90, 170 92, 165 86" fill={`url(#${id}-lg2)`} opacity="0.6" />

        {/* Small leaf near tendril */}
        <path d="M90 195 C 82 188, 78 195, 86 202 C 90 204, 94 200, 90 195" fill={`url(#${id}-lg1)`} opacity="0.55" />
        <path d="M192 78 C 188 68, 195 65, 200 75 C 202 80, 196 82, 192 78" fill={`url(#${id}-lg1)`} opacity="0.55" />

        {/* ===== MAIN PEONY / ROSE BLOOM ===== */}
        {/* Outer petals layer */}
        <path d="M30 30 C 15 15, 5 25, 12 42 C 18 55, 32 52, 30 30" fill={`url(#${id}-pg3)`} opacity="0.6" />
        <path d="M30 30 C 42 12, 55 18, 52 32 C 48 48, 35 48, 30 30" fill={`url(#${id}-pg3)`} opacity="0.55" />
        <path d="M30 30 C 18 48, 25 60, 40 52 C 50 46, 45 32, 30 30" fill={`url(#${id}-pg1)`} opacity="0.5" />
        <path d="M30 30 C 48 38, 55 28, 42 18 C 35 12, 28 18, 30 30" fill={`url(#${id}-pg1)`} opacity="0.5" />

        {/* Middle petals layer */}
        <path d="M30 28 C 22 16, 14 22, 18 34 C 22 42, 32 40, 30 28" fill={`url(#${id}-pg1)`} opacity="0.75" />
        <path d="M32 28 C 38 16, 46 20, 42 32 C 38 42, 30 38, 32 28" fill={`url(#${id}-pg1)`} opacity="0.7" />
        <path d="M28 32 C 20 40, 24 50, 34 44 C 42 40, 38 30, 28 32" fill={`url(#${id}-pg2)`} opacity="0.65" />
        <path d="M32 26 C 36 14, 28 10, 22 20 C 18 28, 26 32, 32 26" fill={`url(#${id}-pg2)`} opacity="0.6" />

        {/* Inner petals layer */}
        <path d="M30 28 C 26 20, 20 24, 24 32 C 26 36, 32 34, 30 28" fill={`url(#${id}-pg2)`} opacity="0.85" />
        <path d="M30 28 C 34 20, 38 24, 36 32 C 34 36, 28 34, 30 28" fill="#C08B8E" opacity="0.8" />

        {/* Bloom center */}
        <circle cx="30" cy="30" r="4" fill="#C08B8E" opacity="0.9" />
        <circle cx="30" cy="30" r="2" fill="#D4AF37" opacity="0.6" />

        {/* ===== SECONDARY BUD 1 (along secondary vine) ===== */}
        <path d="M130 90 C 124 78, 118 82, 122 94 C 126 102, 134 98, 130 90" fill={`url(#${id}-pg1)`} opacity="0.6" />
        <path d="M132 88 C 136 78, 142 82, 138 92 C 136 98, 128 96, 132 88" fill={`url(#${id}-pg3)`} opacity="0.55" />
        <circle cx="131" cy="90" r="3" fill="#C08B8E" opacity="0.7" />
        <circle cx="131" cy="90" r="1.5" fill="#D4AF37" opacity="0.4" />

        {/* ===== SECONDARY BUD 2 (along primary vine) ===== */}
        <path d="M88 145 C 82 135, 76 140, 80 150 C 84 156, 92 152, 88 145" fill={`url(#${id}-pg1)`} opacity="0.55" />
        <path d="M90 143 C 94 135, 98 140, 96 148 C 94 154, 86 152, 90 143" fill={`url(#${id}-pg3)`} opacity="0.5" />
        <circle cx="89" cy="146" r="2.5" fill="#E8B4B8" opacity="0.7" />

        {/* ===== TINY BUDS / BERRIES ===== */}
        <circle cx="60" cy="65" r="2.5" fill="#E8B4B8" opacity="0.6" />
        <circle cx="72" cy="78" r="2" fill="#FFDFD3" opacity="0.5" />
        <circle cx="155" cy="88" r="2" fill="#E8B4B8" opacity="0.5" />
        <circle cx="92" cy="180" r="2" fill="#E8B4B8" opacity="0.45" />
        <circle cx="180" cy="82" r="2" fill="#FFDFD3" opacity="0.4" />

        {/* ===== GOLD ACCENTS ===== */}
        <circle cx="50" cy="50" r="1.5" fill="#D4AF37" opacity="0.5" />
        <circle cx="68" cy="72" r="1" fill="#D4AF37" opacity="0.4" />
        <circle cx="112" cy="85" r="1.2" fill="#D4AF37" opacity="0.35" />
        <circle cx="85" cy="130" r="1" fill="#D4AF37" opacity="0.3" />
      </svg>
    </motion.div>
  );
};

export default FloralCorner;
