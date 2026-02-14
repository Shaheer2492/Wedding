import { motion } from 'framer-motion';

const VineDecoration = ({ position = 'top-left', className = '' }) => {
    const positions = {
        'top-left': 'top-0 left-0',
        'top-right': 'top-0 right-0 rotate-90',
        'bottom-left': 'bottom-0 left-0 -rotate-90',
        'bottom-right': 'bottom-0 right-0 rotate-180',
        'center-left': 'top-1/2 left-0 -translate-y-1/2',
        'center-right': 'top-1/2 right-0 -translate-y-1/2 scale-x-[-1]',
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className={`absolute ${positions[position]} ${className} pointer-events-none z-0`}
        >
            <svg
                viewBox="0 0 200 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-30 w-32 h-48 md:w-[200px] md:h-[300px]"
            >
                {/* Main Vine Stem */}
                <path
                    d="M10 0 C 10 50, 40 100, 20 150 C 0 200, 30 250, 10 300"
                    stroke="#9BB8A0"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                />

                {/* Leaves - Left Side */}
                <path d="M15 40 Q 5 30, 0 45 Q 10 55, 15 40" fill="#C4D7C8" />
                <path d="M25 120 Q 15 110, 10 125 Q 20 135, 25 120" fill="#C4D7C8" />
                <path d="M15 220 Q 5 210, 0 225 Q 10 235, 15 220" fill="#C4D7C8" />

                {/* Leaves - Right Side */}
                <path d="M15 80 Q 25 70, 30 85 Q 20 95, 15 80" fill="#9BB8A0" />
                <path d="M20 180 Q 30 170, 35 185 Q 25 195, 20 180" fill="#9BB8A0" />
                <path d="M10 260 Q 20 250, 25 265 Q 15 275, 10 260" fill="#9BB8A0" />

                {/* Small Buds/Berries */}
                <circle cx="30" cy="85" r="3" fill="#E8B4B8" />
                <circle cx="35" cy="185" r="3" fill="#E8B4B8" />
                <circle cx="25" cy="265" r="3" fill="#E8B4B8" />
            </svg>
        </motion.div>
    );
};

export default VineDecoration;
