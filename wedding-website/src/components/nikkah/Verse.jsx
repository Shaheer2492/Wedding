import GeoPattern from './GeoPattern';
import Ornament from './Ornament';

const Verse = () => (
  <section className="section verse-sec">
    <GeoPattern />
    <div className="narrow" style={{ position: 'relative', zIndex: 2 }}>
      <Ornament reveal="reveal" style={{ marginBottom: '34px' }} />
      <p className="verse-ar reveal d1">
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
      </p>
      <p className="verse-en reveal d2">
        “And among His signs is that He created for you mates from among yourselves, that you may
        find tranquility in them; and He placed between you affection and mercy.”
      </p>
      <p className="verse-ref reveal d2">Surah Ar-Rum · 30:21</p>
    </div>
  </section>
);

export default Verse;
