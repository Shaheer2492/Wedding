import { useId } from 'react';
import { motion } from 'framer-motion';

const FloralVine = ({ side = 'left', className = '' }) => {
  const id = useId();
  const sideClasses = {
    left: 'top-1/2 left-0 -translate-y-1/2',
    right: 'top-1/2 right-0 -translate-y-1/2 -scale-x-100',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: 0.8 }}
      className={`absolute ${sideClasses[side]} hidden md:block pointer-events-none z-0 ${className}`}
    >
      <svg
        viewBox="0 0 60 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-72 md:w-16 md:h-96 lg:w-20 lg:h-[500px] opacity-40"
      >
        <defs>
          <linearGradient id={`${id}-vlg`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9BB8A0" />
            <stop offset="100%" stopColor="#C4D7C8" />
          </linearGradient>
        </defs>

        {/* Main vine stem - sinuous curve */}
        <path
          d="M15 0 C 12 30, 25 60, 18 90 C 11 120, 28 150, 20 180 C 12 210, 30 240, 22 270 C 14 300, 28 330, 18 360 C 8 390, 25 420, 15 450 C 10 470, 18 490, 15 500"
          stroke="#9BB8A0"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Secondary thin vine */}
        <path
          d="M20 20 C 28 50, 15 80, 25 110 C 32 130, 18 155, 28 180"
          stroke="#C4D7C8"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* ===== LEAVES - alternating sides ===== */}
        {/* Leaf 1 - right */}
        <path d="M18 45 C 28 35, 38 40, 32 52 C 28 60, 18 55, 18 45" fill={`url(#${id}-vlg)`} opacity="0.7" />
        <path d="M20 48 L 30 44" stroke="#9BB8A0" strokeWidth="0.5" opacity="0.5" />

        {/* Leaf 2 - left */}
        <path d="M16 95 C 6 85, -2 92, 6 102 C 10 108, 16 104, 16 95" fill={`url(#${id}-vlg)`} opacity="0.65" />
        <path d="M14 98 L 5 95" stroke="#9BB8A0" strokeWidth="0.5" opacity="0.5" />

        {/* Leaf 3 - right */}
        <path d="M22 145 C 32 135, 42 142, 34 154 C 28 160, 22 155, 22 145" fill="#C4D7C8" opacity="0.7" />
        <path d="M24 148 L 34 145" stroke="#9BB8A0" strokeWidth="0.5" opacity="0.5" />

        {/* Leaf 4 - left */}
        <path d="M18 195 C 8 185, 0 192, 8 204 C 12 210, 18 205, 18 195" fill={`url(#${id}-vlg)`} opacity="0.6" />

        {/* Leaf 5 - right (larger) */}
        <path d="M24 240 C 36 228, 48 236, 38 250 C 32 258, 22 252, 24 240" fill="#9BB8A0" opacity="0.65" />
        <path d="M26 244 L 38 240" stroke="#7DA383" strokeWidth="0.5" opacity="0.4" />

        {/* Leaf 6 - left */}
        <path d="M16 290 C 6 280, -2 288, 8 300 C 12 306, 16 300, 16 290" fill={`url(#${id}-vlg)`} opacity="0.6" />

        {/* Leaf 7 - right */}
        <path d="M20 340 C 30 330, 38 336, 32 348 C 28 354, 20 350, 20 340" fill="#C4D7C8" opacity="0.65" />

        {/* Leaf 8 - left */}
        <path d="M14 390 C 4 380, -2 388, 8 398 C 12 404, 14 398, 14 390" fill={`url(#${id}-vlg)`} opacity="0.55" />

        {/* Leaf 9 - right */}
        <path d="M18 435 C 28 425, 36 432, 30 444 C 26 450, 18 445, 18 435" fill="#9BB8A0" opacity="0.5" />

        {/* ===== SMALL FLOWER BUDS ===== */}
        {/* Bud 1 */}
        <circle cx="32" cy="48" r="3" fill="#E8B4B8" opacity="0.5" />
        <circle cx="32" cy="48" r="1.5" fill="#FFDFD3" opacity="0.4" />

        {/* Bud 2 */}
        <circle cx="8" cy="195" r="2.5" fill="#E8B4B8" opacity="0.45" />
        <circle cx="8" cy="195" r="1.2" fill="#FFDFD3" opacity="0.35" />

        {/* Bud 3 */}
        <circle cx="38" cy="342" r="3" fill="#E8B4B8" opacity="0.5" />
        <circle cx="38" cy="342" r="1.5" fill="#C08B8E" opacity="0.35" />

        {/* ===== TINY BERRIES / DOTS ===== */}
        <circle cx="26" cy="120" r="1.5" fill="#E8B4B8" opacity="0.4" />
        <circle cx="10" cy="160" r="1.5" fill="#C4D7C8" opacity="0.35" />
        <circle cx="30" cy="270" r="1.5" fill="#E8B4B8" opacity="0.35" />
        <circle cx="8" cy="360" r="1.5" fill="#FFDFD3" opacity="0.3" />
        <circle cx="24" cy="460" r="1.5" fill="#E8B4B8" opacity="0.3" />

        {/* ===== GOLD ACCENTS ===== */}
        <circle cx="28" cy="50" r="1" fill="#D4AF37" opacity="0.35" />
        <circle cx="12" cy="200" r="1" fill="#D4AF37" opacity="0.3" />
        <circle cx="34" cy="345" r="1" fill="#D4AF37" opacity="0.3" />

        {/* ===== CURLING TENDRILS ===== */}
        <path
          d="M22 68 C 30 65, 35 70, 32 76 C 29 80, 24 76, 26 72"
          stroke="#C4D7C8"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M18 220 C 10 218, 6 222, 8 228 C 10 232, 16 230, 14 226"
          stroke="#C4D7C8"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M20 370 C 28 368, 32 372, 30 378 C 28 382, 22 380, 24 376"
          stroke="#C4D7C8"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    </motion.div>
  );
};

export default FloralVine;
