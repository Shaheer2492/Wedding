import { motion } from 'framer-motion';

const FlowerBranch = ({ className = '' }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className={`absolute ${className} pointer-events-none`}
    >
        <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
            <path d="M100 300 Q 120 200, 80 150 T 100 50" stroke="#4a4a4a" strokeWidth="2" fill="none" />
            {/* Leaves */}
            <path d="M90 250 Q 70 240, 60 260" stroke="#4a4a4a" strokeWidth="2" fill="none" />
            <path d="M60 260 Q 70 270, 90 250" stroke="#4a4a4a" strokeWidth="2" fill="none" />

            <path d="M110 200 Q 130 190, 140 210" stroke="#4a4a4a" strokeWidth="2" fill="none" />
            <path d="M140 210 Q 130 220, 110 200" stroke="#4a4a4a" strokeWidth="2" fill="none" />

            {/* Flower 1 */}
            <circle cx="80" cy="150" r="15" stroke="#4a4a4a" strokeWidth="2" fill="none" />
            <path d="M65 150 Q 50 130, 70 120" stroke="#4a4a4a" strokeWidth="2" fill="none" />
            {/* (Simplified flower representation) */}

            {/* Flower 2 */}
            <circle cx="100" cy="50" r="20" stroke="#4a4a4a" strokeWidth="2" fill="none" />
        </svg>
    </motion.div>
);

export default FlowerBranch;
