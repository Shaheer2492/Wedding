/** Eight-point star ornament divider used beneath section titles. */
export const StarSVG = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
    <path d="M12 1 L15 9 L23 12 L15 15 L12 23 L9 15 L1 12 L9 9 Z" />
  </svg>
);

const Ornament = ({ className = '', leftLine = true, style, reveal }) => (
  <div className={`ornament ${reveal || ''} ${className}`.trim()} style={style}>
    {leftLine && <span className="line" />}
    <StarSVG />
    <span className="line r" />
  </div>
);

export default Ornament;
