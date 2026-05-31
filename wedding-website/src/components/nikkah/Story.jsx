import Ornament from './Ornament';
import proposalPhoto from '../../assets/proposal.jpg';

const Story = () => (
  <section className="section">
    <div className="wrap">
      <div className="story-grid">
        <div className="story-photo reveal">
          <img src={proposalPhoto} alt="Shaheer & Amna" />
        </div>
        <div className="story-text reveal d1">
          <div className="label">Our Story</div>
          <h2 className="section-title">
            A union written
            <br />
            <em>long before</em> we met
          </h2>
          <Ornament leftLine={false} style={{ justifyContent: 'flex-start', margin: '22px 0 26px' }} />
          <p>
            What began as two families coming together has grown into a lifetime of shared faith,
            laughter, and quiet understanding. With gratitude to Allah, Shaheer and Amna invite you
            to witness their Nikkah.
          </p>
          <p>
            Your presence, your prayers, and your blessings mean the world to us as we begin this
            journey side by side.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Story;
