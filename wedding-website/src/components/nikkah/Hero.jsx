import { useRSVP } from '../../context/RSVPContext';
import { COUPLE, EVENT, VENUE } from '../../data/siteConfig';
import GeoPattern from './GeoPattern';
import Particles from './Particles';

const Hero = () => {
  const { setShowRSVP } = useRSVP();

  return (
    <header className="hero">
      <GeoPattern />
      <div className="hero-vignette" />
      <Particles />

      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div className="reveal bismillah">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
        <div className="reveal d1 bismillah-en">
          In the name of God, the Most Gracious, the Most Merciful
        </div>

        <div className="reveal d1 hero-intro">Together with their families</div>
        <h1 className="hero-names reveal d2">
          {COUPLE.groom}
          <span className="hero-amp">&amp;</span>
          {COUPLE.bride}
        </h1>
        <p className="hero-sub reveal d3">request the honour of your presence at their Nikkah</p>
        <p className="hero-date reveal d3">{EVENT.dateLong}</p>
        <p className="hero-loc reveal d3">
          {VENUE.name} · San Diego, California
        </p>

        <button className="btn-rsvp reveal d4" onClick={() => setShowRSVP(true)}>
          <span className="dot" /> RSVP <span className="dot" />
        </button>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="bar" />
      </div>
    </header>
  );
};

export default Hero;
