import { useEffect, useState } from 'react';

const makeDots = (count) =>
  Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    size: 2 + Math.random() * 5,
    duration: 11 + Math.random() * 12,
    delay: -Math.random() * 18,
  }));

/** Floating gold dots that drift up the hero. Randomized once on mount. */
const Particles = ({ count = 16 }) => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    setDots(makeDots(count));
  }, [count]);

  return (
    <div className="particles" aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
