import { Link } from 'react-router-dom';
import GeoPattern from '../components/nikkah/GeoPattern';
import Particles from '../components/nikkah/Particles';
import Ornament from '../components/nikkah/Ornament';
import { COUPLE } from '../data/siteConfig';

const ComingSoon = ({ eyebrow, title, note }) => (
  <section className="coming-soon">
    <GeoPattern />
    <Particles />
    <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
      <p className="cs-eyebrow">{eyebrow}</p>
      <h1 className="cs-title">{title}</h1>
      <Ornament style={{ margin: '34px auto' }} />
      <p className="cs-soon">Coming Soon</p>
      <p className="cs-note">{note}</p>
      <Link to="/" className="cs-back">
        ← Back to {COUPLE.groom} &amp; {COUPLE.bride}
      </Link>
    </div>
  </section>
);

export default ComingSoon;
