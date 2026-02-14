import { motion } from 'framer-motion';
import FloralDecoration from '../ui/FloralDecoration';
import VineDecoration from '../ui/VineDecoration';
import LargeRose from '../ui/LargeRose';
import DaisyStem from '../ui/DaisyStem';
import FlowerBranch from '../ui/FlowerBranch';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-overlay">
      {/* Floral Decorations */}
      <FloralDecoration position="top-left" />
      <FloralDecoration position="top-right" />
      <FloralDecoration position="bottom-left" />
      <FloralDecoration position="bottom-right" />

      {/* Vine Decorations */}
      <VineDecoration position="center-left" />
      <VineDecoration position="center-right" />

      {/* New Lush Floral Layer */}
      {/* Large Roses for weight at corners */}
      <LargeRose className="bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 -translate-x-12 translate-y-12 rotate-12 opacity-80" />
      <LargeRose className="top-0 right-0 w-48 h-48 md:w-64 md:h-64 translate-x-12 -translate-y-12 -rotate-12 opacity-80" />

      {/* Daisy Stems rising from bottom */}
      <DaisyStem className="bottom-0 left-1/4 w-32 h-64 md:w-40 md:h-80 translate-y-16 -rotate-12 opacity-70" />
      <DaisyStem className="bottom-0 right-1/4 w-32 h-64 md:w-40 md:h-80 translate-y-16 rotate-12 scale-x-[-1] opacity-70" />

      {/* Flower Branches hanging from top */}
      <FlowerBranch className="top-0 left-1/4 w-40 h-60 md:w-48 md:h-80 -translate-y-12 rotate-12 opacity-70" />
      <FlowerBranch className="top-0 right-1/4 w-40 h-60 md:w-48 md:h-80 -translate-y-12 -rotate-12 scale-x-[-1] opacity-70" />


      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Wedding Announcement */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-sage-300 uppercase tracking-widest text-sm mb-4"
          >
            Together with their families
          </motion.p>

          {/* Bride Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-script text-4xl sm:text-5xl md:text-8xl text-deepRose mb-4"
          >
            Shaheer Khan
          </motion.h1>

          {/* Ampersand */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl text-blush-300 my-4 md:my-6"
          >
            &
          </motion.div>

          {/* Groom Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="font-script text-4xl sm:text-5xl md:text-8xl text-deepRose mb-8"
          >
            Amna Sharif
          </motion.h1>

          {/* Invitation Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="font-serif text-lg md:text-2xl text-gray-600 mb-2"
          >
            Invite you to celebrate their
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="font-serif text-xl md:text-3xl text-deepRose uppercase tracking-wider mb-8"
          >
            Engagement
          </motion.p>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.8 }}
            className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg"
          >
            <p className="font-sans text-gray-700 text-lg">
              <span className="font-semibold">June 14, 2026</span> | 5:00 PM
            </p>
            <p className="font-sans text-gray-600 text-sm mt-1">
              San Diego, California
            </p>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="flex items-center justify-center mt-12 space-x-4"
          >
            <div className="w-24 h-px bg-blush-300"></div>
            <div className="w-2 h-2 rounded-full bg-blush-300 animate-float"></div>
            <div className="w-24 h-px bg-blush-300"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.7, duration: 0.8 }}
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
