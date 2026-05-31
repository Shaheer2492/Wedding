import { useEffect, useState } from 'react';
import { NIKKAH_DATETIME } from '../../data/siteConfig';
import Ornament from './Ornament';

const pad = (n) => String(n).padStart(2, '0');
const TARGET = new Date(NIKKAH_DATETIME).getTime();

function getRemaining() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
  };
}

const Countdown = () => {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = getRemaining();
      setRemaining(next);
      if (!next) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section countdown-sec">
      <div className="wrap">
        <div className="label reveal">Counting the days</div>
        <h2 className="section-title reveal d1">
          Until we say <em>Qubool Hai</em>
        </h2>
        <Ornament reveal="reveal d1" />

        {remaining ? (
          <div className="countdown reveal d2">
            <div className="cd-unit">
              <div className="cd-num">{pad(remaining.days)}</div>
              <div className="cd-label">Days</div>
            </div>
            <div className="cd-unit">
              <div className="cd-num">{pad(remaining.hours)}</div>
              <div className="cd-label">Hours</div>
            </div>
            <div className="cd-unit">
              <div className="cd-num">{pad(remaining.mins)}</div>
              <div className="cd-label">Minutes</div>
            </div>
            <div className="cd-unit">
              <div className="cd-num">{pad(remaining.secs)}</div>
              <div className="cd-label">Seconds</div>
            </div>
          </div>
        ) : (
          <div className="cd-msg reveal d2">The blessed day has arrived — alhamdulillah.</div>
        )}
      </div>
    </section>
  );
};

export default Countdown;
