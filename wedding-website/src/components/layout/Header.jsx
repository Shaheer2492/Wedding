import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRSVP } from '../../context/RSVPContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { setShowRSVP } = useRSVP();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleRSVPClick = () => {
    setIsOpen(false);
    setShowRSVP(true);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Names */}
          <Link to="/" className="text-2xl font-script text-deepRose hover:text-blush-300 transition-colors">
            Shaheer & Amna
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-sans font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-deepRose border-b-2 border-deepRose'
                    : 'text-gray-600 hover:text-deepRose'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleRSVPClick}
              className="bg-deepRose hover:bg-deepRose/90 text-white font-sans font-medium px-5 py-2 rounded-full transition-all shadow-sm hover:shadow-md text-sm"
            >
              RSVP
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-deepRose focus:outline-none"
            aria-label="Toggle menu"
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
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-sans font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-deepRose'
                    : 'text-gray-600 hover:text-deepRose'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleRSVPClick}
              className="mt-2 w-full bg-deepRose hover:bg-deepRose/90 text-white font-sans font-medium px-5 py-2.5 rounded-full transition-all text-sm"
            >
              RSVP Now
            </button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
