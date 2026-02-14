import { motion } from 'framer-motion';

const DaisyStem = ({ className = '' }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`absolute ${className} pointer-events-none`}
    >
        <svg viewBox="0 0 150 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
            <path d="M75 300 Q 85 200, 65 100" stroke="#4a4a4a" strokeWidth="2" fill="none" />

            {/* Leaves */}
            <path d="M70 250 Q 50 240, 40 260 Q 60 270, 70 250" stroke="#4a4a4a" strokeWidth="2" fill="#e8f5e9" />
            <path d="M75 200 Q 95 180, 105 200 Q 85 220, 75 200" stroke="#4a4a4a" strokeWidth="2" fill="#e8f5e9" />

            {/* Daisy 1 */}
            <g transform="translate(65, 100)">
                <circle cx="0" cy="0" r="15" fill="#fff9c4" stroke="#4a4a4a" strokeWidth="2" />
                <ellipse cx="0" cy="-25" rx="5" ry="15" fill="#fce4ec" stroke="#4a4a4a" strokeWidth="2" />
                <ellipse cx="20" cy="-15" rx="5" ry="15" transform="rotate(45)" fill="#fce4ec" stroke="#4a4a4a" strokeWidth="2" />
                <ellipse cx="25" cy="5" rx="5" ry="15" transform="rotate(100)" fill="#fce4ec" stroke="#4a4a4a" strokeWidth="2" />
                <ellipse cx="10" cy="20" rx="5" ry="15" transform="rotate(160)" fill="#fce4ec" stroke="#4a4a4a" strokeWidth="2" />
                <ellipse cx="-15" cy="20" rx="5" ry="15" transform="rotate(210)" fill="#fce4ec" stroke="#4a4a4a" strokeWidth="2" />
                <ellipse cx="-25" cy="0" rx="5" ry="15" transform="rotate(270)" fill="#fce4ec" stroke="#4a4a4a" strokeWidth="2" />
                <ellipse cx="-15" cy="-20" rx="5" ry="15" transform="rotate(320)" fill="#fce4ec" stroke="#4a4a4a" strokeWidth="2" />
            </g>
        </svg>
    </motion.div>
);

export default DaisyStem;
