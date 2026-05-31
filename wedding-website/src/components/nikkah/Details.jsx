import { VENUE, DRESS_SWATCHES } from '../../data/siteConfig';
import Ornament from './Ornament';

const Details = () => (
  <section className="section">
    <div className="wrap">
      <div className="label reveal">Good to know</div>
      <h2 className="section-title reveal d1">
        Location &amp; <em>Attire</em>
      </h2>
      <Ornament reveal="reveal d1" />

      <div className="details-grid reveal d2">
        <div className="detail-card">
          <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
            <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <div className="sub">The Venue</div>
          <h3>{VENUE.name}</h3>
          <p>
            {VENUE.street}
            <br />
            {VENUE.cityState}
          </p>
          <a className="map-link" href={VENUE.mapUrl} target="_blank" rel="noopener noreferrer">
            View on Map →
          </a>
        </div>

        <div className="detail-card">
          <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
            <path d="M6 3l3 3 3-2 3 2 3-3v6c0 1-1 2-2 2v8H8v-8c-1 0-2-1-2-2V3Z" />
          </svg>
          <div className="sub">Dress Code</div>
          <h3>Formal South Asian</h3>
          <p>
            Elegant traditional attire in soft, festive tones. We kindly ask guests to avoid ivory
            and pure white.
          </p>
          <div className="swatches">
            {DRESS_SWATCHES.map((s) => (
              <span key={s.label} className="swatch" style={{ background: s.color }}>
                <span>{s.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Details;
