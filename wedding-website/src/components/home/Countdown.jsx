import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import FloralCorner from '../ui/FloralCorner';
import { useRSVP } from '../../context/RSVPContext';

const TimeUnit = ({ value, label }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center"
  >
    <div className="bg-gradient-to-br from-deepRose to-blush-300 text-white rounded-xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center shadow-lg">
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums">
        {value.toString().padStart(2, '0')}
      </span>
    </div>
    <span className="text-gray-600 text-xs sm:text-sm md:text-base font-sans mt-2 uppercase tracking-wider">
      {label}
    </span>
  </motion.div>
);

const Countdown = () => {
  const { setShowRSVP } = useRSVP();
  const engagementDate = new Date('2026-06-14T17:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = engagementDate - new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Floral Corner Decorations */}
      <FloralCorner position="top-left" className="opacity-50" />
      <FloralCorner position="bottom-right" className="opacity-50" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <Card>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-script text-center text-deepRose mb-4">
              Save the Date
            </h2>
            <p className="text-center text-gray-600 font-sans mb-8">
              We can't wait to celebrate with you!
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-8 mb-8">
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>

            {/* Event Details */}
            <div className="text-center bg-blush-50 rounded-lg p-6">
              <p className="font-serif text-xl text-gray-700 mb-2">
                Sunday, June 14, 2026
              </p>
              <p className="font-sans text-gray-600">
                5:00 PM - 10:00 PM
              </p>
              <p className="font-sans text-gray-600 mt-4">
                The Hilton Garden Inn Del Mar
              </p>
              <p className="font-sans text-sm text-gray-500">
                San Diego, California
              </p>
            </div>

            {/* RSVP Reminder + Button */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 font-sans mb-4">
                Please RSVP by <span className="font-semibold text-deepRose">March 1, 2026</span>
              </p>
              <button
                onClick={() => setShowRSVP(true)}
                className="bg-deepRose hover:bg-deepRose/90 text-white font-sans font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                RSVP Now
              </button>
            </div>
          </motion.div>
        </Card>
      </div>
    </section>
  );
};

export default Countdown;
