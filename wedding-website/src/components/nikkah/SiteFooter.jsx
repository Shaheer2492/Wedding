import { Link } from 'react-router-dom';
import { COUPLE, EVENT } from '../../data/siteConfig';
import GeoPattern from './GeoPattern';
import Ornament from './Ornament';

const SiteFooter = () => (
  <footer className="footer">
    <GeoPattern />
    <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
      <Ornament reveal="reveal" style={{ marginBottom: '30px' }} />
      <div className="footer-names reveal d1">
        {COUPLE.groom} <span className="amp">&amp;</span> {COUPLE.bride}
      </div>
      <div className="footer-date reveal d1">{EVENT.dateShort}</div>
      <p className="footer-thanks reveal d2">
        With love and gratitude, we can't wait to celebrate with you.
      </p>
      <p className="footer-dua reveal d2">بَارَكَ ٱللَّٰهُ لَكُمَا</p>

      <nav className="footer-links reveal d2" aria-label="Other celebrations">
        <Link to="/wedding">The Wedding</Link>
        <span className="sep" aria-hidden="true" />
        <Link to="/valima">Valima</Link>
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
