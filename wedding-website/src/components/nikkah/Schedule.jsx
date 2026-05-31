import { SCHEDULE } from '../../data/siteConfig';
import Ornament from './Ornament';

const Schedule = () => (
  <section className="section timeline-sec">
    <div className="wrap">
      <div className="label reveal">The Celebration</div>
      <h2 className="section-title reveal d1">
        Order of <em>the day</em>
      </h2>
      <Ornament reveal="reveal d1" />

      <div className="schedule">
        {SCHEDULE.map((item) => (
          <div key={item.time + item.name} className={`sch-item reveal${item.key ? ' key' : ''}`}>
            <div className="sch-time">{item.time}</div>
            <div className="sch-node">
              <span className="diamond" />
            </div>
            <div>
              <div className="sch-name">{item.name}</div>
              {item.desc && <div className="sch-desc">{item.desc}</div>}
            </div>
          </div>
        ))}
      </div>

      <div className="arrival-note reveal d1">
        <div className="k">A gentle note on timing</div>
        <div className="v">
          Guests seated by <em>5:00 PM</em>
        </div>
        <p style={{ color: 'var(--ink-soft)', marginTop: '10px', fontSize: '0.98rem' }}>
          Please plan to arrive a little before 5:00 so you're seated ahead of the entrances. The
          Nikkah begins at 5:20 PM.
        </p>
      </div>
    </div>
  </section>
);

export default Schedule;
