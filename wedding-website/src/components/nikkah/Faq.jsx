import { useLayoutEffect, useRef, useState } from 'react';
import { FAQS, CONTACT_EMAIL } from '../../data/siteConfig';
import Ornament from './Ornament';

const PlusIcon = () => (
  <svg className="plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const Answer = ({ a }) => {
  if (typeof a === 'string') return a;
  return (
    <>
      {a.before}
      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      {a.after}
    </>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  useLayoutEffect(() => {
    answerRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.maxHeight = i === openIndex ? `${el.scrollHeight}px` : '0px';
    });
  }, [openIndex]);

  return (
    <section className="section faq-sec">
      <div className="wrap">
        <div className="label reveal">Questions</div>
        <h2 className="section-title reveal d1">
          Things you may <em>wonder</em>
        </h2>
        <Ornament reveal="reveal d1" />

        <div className="faq-list reveal d2">
          {FAQS.map((item, i) => (
            <div key={item.q} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button
                className="faq-q"
                aria-expanded={openIndex === i}
                onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
              >
                {item.q}
                <PlusIcon />
              </button>
              <div className="faq-a" ref={(el) => (answerRefs.current[i] = el)}>
                <div className="faq-a-inner">
                  <Answer a={item.a} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
