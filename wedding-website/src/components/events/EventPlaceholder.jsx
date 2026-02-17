import { motion } from 'framer-motion';
import Card from '../ui/Card';
import FloralCorner from '../ui/FloralCorner';

const EventPlaceholder = ({ eventName }) => {
  return (
    <Card className="relative overflow-hidden">
      {/* Floral Decorations */}
      <FloralCorner position="top-right" className="opacity-20 scale-50" />
      <FloralCorner position="bottom-left" className="opacity-20 scale-50" />

      <div className="text-center py-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-8xl mb-8">🌸</div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-script text-deepRose mb-4"
        >
          {eventName}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <p className="text-2xl font-serif text-gray-700">
            Coming in 2027
          </p>
          <p className="text-gray-600 font-sans max-w-md mx-auto">
            Details will be shared soon! Stay tuned for updates on this special celebration.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="w-16 h-px bg-blush-300"></div>
            <div className="w-2 h-2 rounded-full bg-blush-300 animate-float"></div>
            <div className="w-16 h-px bg-blush-300"></div>
          </div>
        </motion.div>
      </div>
    </Card>
  );
};

export default EventPlaceholder;
