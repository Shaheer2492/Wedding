import { motion } from 'framer-motion';

const FloralDecoration = ({ position = 'top-left', className = '' }) => {
  const positions = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className={`absolute ${positions[position]} ${className}`}
    >
      <svg
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-40 w-24 h-24 md:w-[150px] md:h-[150px]"
      >
        {/* Main flower */}
        <circle cx="30" cy="30" r="8" fill="#E8B4B8" />
        <circle cx="20" cy="25" r="6" fill="#F7E7DC" />
        <circle cx="40" cy="25" r="6" fill="#F7E7DC" />
        <circle cx="25" cy="20" r="5" fill="#FFDFD3" />
        <circle cx="35" cy="20" r="5" fill="#FFDFD3" />
        <circle cx="30" cy="15" r="4" fill="#E8B4B8" />

        {/* Small flower */}
        <circle cx="60" cy="50" r="5" fill="#C4D7C8" />
        <circle cx="55" cy="47" r="3" fill="#E8F0EA" />
        <circle cx="65" cy="47" r="3" fill="#E8F0EA" />

        {/* Leaves */}
        <path
          d="M35 35 Q 50 40, 55 55"
          stroke="#C4D7C8"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M25 35 Q 15 45, 10 60"
          stroke="#C4D7C8"
          strokeWidth="2"
          fill="none"
        />

        {/* Decorative dots */}
        <circle cx="45" cy="40" r="2" fill="#D4AF37" opacity="0.6" />
        <circle cx="15" cy="40" r="2" fill="#D4AF37" opacity="0.6" />
      </svg>
    </motion.div>
  );
};

export default FloralDecoration;
