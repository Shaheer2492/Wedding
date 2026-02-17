import { motion } from 'framer-motion';
import FloralCorner from '../ui/FloralCorner';
import FloralVine from '../ui/FloralVine';
import { useRSVP } from '../../context/RSVPContext';

const Hero = () => {
  const { setShowRSVP } = useRSVP();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-overlay">
      {/* Corner Floral Decorations */}
      <FloralCorner position="top-left" />
      <FloralCorner position="top-right" />
      <FloralCorner position="bottom-left" />
      <FloralCorner position="bottom-right" />

      {/* Side Vine Decorations (hidden on mobile) */}
      <FloralVine side="left" />
      <FloralVine side="right" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Wedding Announcement */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-sage-300 uppercase tracking-widest text-sm mb-4"
          >
            Together with their families
          </motion.p>

          {/* Bride Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-script text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-deepRose mb-4"
          >
            Shaheer Khan
          </motion.h1>

          {/* Ampersand */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-blush-300 my-3 md:my-6"
          >
            &amp;
          </motion.div>

          {/* Groom Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="font-script text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-deepRose mb-8"
          >
            Amna Sharif
          </motion.h1>

          {/* Invitation Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="font-serif text-base sm:text-lg md:text-2xl text-gray-600 mb-2"
          >
            Invite you to celebrate their
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="font-serif text-lg sm:text-xl md:text-3xl text-deepRose uppercase tracking-wider mb-6"
          >
            Engagement
          </motion.p>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="inline-block bg-white/80 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg"
          >
            <p className="font-sans text-gray-700 text-base sm:text-lg">
              <span className="font-semibold">June 14, 2026</span> | 5:00 PM
            </p>
            <p className="font-sans text-gray-600 text-xs sm:text-sm mt-1">
              San Diego, California
            </p>
          </motion.div>

          {/* RSVP Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.8 }}
            className="mt-6"
          >
            <button
              onClick={() => setShowRSVP(true)}
              className="bg-deepRose hover:bg-deepRose/90 text-white font-sans font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all text-base sm:text-lg"
            >
              RSVP Now
            </button>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.1, duration: 0.8 }}
            className="flex items-center justify-center mt-8 space-x-4"
          >
            <div className="w-16 sm:w-24 h-px bg-blush-300"></div>
            <div className="w-2 h-2 rounded-full bg-blush-300 animate-float"></div>
            <div className="w-16 sm:w-24 h-px bg-blush-300"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-sage-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
