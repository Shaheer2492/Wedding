import { motion } from 'framer-motion';

const LargeRose = ({ className = '' }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className={`absolute ${className} pointer-events-none`}
    >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
            {/* Stem */}
            <path d="M100 200 Q 110 150, 100 120" stroke="#4a4a4a" strokeWidth="2" fill="none" />

            {/* Leaves */}
            <path d="M100 160 Q 80 150, 70 170 Q 90 180, 100 160" stroke="#4a4a4a" strokeWidth="2" fill="#e8f5e9" />

            {/* Rose Head */}
            <g transform="translate(100, 100)">
                <path d="M0 0 C -20 -10, -20 -30, 0 -40 C 20 -30, 20 -10, 0 0" fill="#f8bbd0" stroke="#4a4a4a" strokeWidth="2" />
                <path d="M0 -40 C -30 -30, -40 0, -20 20 C 0 30, 20 10, 0 -40" fill="#f48fb1" stroke="#4a4a4a" strokeWidth="2" opacity="0.8" />
                <path d="M0 -40 C 30 -30, 40 0, 20 20 C 0 30, -20 10, 0 -40" fill="#f48fb1" stroke="#4a4a4a" strokeWidth="2" opacity="0.8" />
            </g>
        </svg>
    </motion.div>
);

export default LargeRose;
