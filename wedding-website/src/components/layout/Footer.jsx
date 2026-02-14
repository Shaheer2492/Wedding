import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-sage-100 py-8 mt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-3xl text-deepRose mb-2">
            Shaheer & Amna
          </p>
          <p className="text-gray-600 text-sm mb-4">
            June 14, 2026 | San Diego, CA
          </p>
          <div className="flex justify-center items-center space-x-2 text-blush-300">
            <div className="w-16 h-px bg-blush-300"></div>
            <span className="text-xl">❤️</span>
            <div className="w-16 h-px bg-blush-300"></div>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            © 2026 All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
