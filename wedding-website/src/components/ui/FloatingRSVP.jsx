import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRSVP } from '../../context/RSVPContext';

const FloatingRSVP = () => {
  const { setShowRSVP } = useRSVP();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={() => setShowRSVP(true)}
          className="fixed bottom-6 right-6 z-40 bg-deepRose hover:bg-deepRose/90 text-white font-sans font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          RSVP
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingRSVP;
