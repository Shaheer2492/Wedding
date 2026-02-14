import { motion } from 'framer-motion';

const Card = ({ children, className = '', animate = true }) => {
  const baseStyles = 'bg-white rounded-2xl shadow-xl p-8 border border-blush-200';

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`${baseStyles} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>;
};

export default Card;
