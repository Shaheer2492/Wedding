import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-8 py-3 rounded-full font-sans font-medium transition-all duration-300 transform hover:scale-105';

  const variants = {
    primary: 'bg-deepRose text-white hover:bg-blush-300 shadow-lg',
    secondary: 'bg-sage-200 text-gray-700 hover:bg-sage-300 shadow-md',
    outline: 'border-2 border-deepRose text-deepRose hover:bg-deepRose hover:text-white',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
