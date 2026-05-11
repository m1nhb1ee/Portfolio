import { useEffect, useRef, useState } from 'react';
import { heroPhrases, heroTickerText, portfolioStats } from '../content/voice';

const phrases = [...heroPhrases];

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function Hero() {
  const [text, setText] = useState('');
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);
  const [staticMode, setStaticMode] = useState(false);

  useEffect(() => {
    setStaticMode(prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (staticMode) {
      setText(phrases[0] ?? '');
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const current = phrases[phraseIdx.current];
      if (deleting.current) {
        charIdx.current -= 1;
        setText(current.substring(0, Math.max(charIdx.current, 0)));
      } else {
        charIdx.current += 1;
        setText(current.substring(0, charIdx.current));
      }

      let delay = deleting.current ? 30 : 60;
      if (!deleting.current && charIdx.current > current.length) {
        delay = 1800;
        deleting.current = true;
      } else if (deleting.current && charIdx.current < 0) {
        deleting.current = false;
        phraseIdx.current = (phraseIdx.current + 1) % phrases.length;
        delay = 400;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [staticMode]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  const { awardsListed, projects, internshipMonths } = portfolioStats;

  return (
    <header id="home" className="hero">
      <div className="hero-issue">
        <span>Vol. 01 · SoICT · HUST · May 2026</span>
        <span>B.Sc. Information Technology · github.com/m1nhb1ee</span>
        <span>Focus: AI systems · backend · vision · LLM product integration</span>
      </div>

      <div className="hero-main">
        <div className="hero-eyebrow">Portfolio · HUST AI engineering</div>
        <div className="hero-name" aria-label="Nguyen Trong Minh">
          <span>Nguyen</span>
          <span>Trong Minh</span>
        </div>
        <h1>
          Shipping <em>model-backed systems</em> with <em>clear ownership</em> of the stack
        </h1>
        <div className="hero-tagline">
          <span>{text}</span>
          {!staticMode && <span className="cursor" />}
        </div>
        <div className="hero-actions">
          <a href="#projects" className="hero-cta magnetic">View work</a>
          <a href="#contact" className="hero-cta hero-cta-secondary magnetic">Contact</a>
        </div>
      </div>

      <aside className="hero-side">
        <div className="hero-side-label">Nguyen Trong Minh · AI engineering @ HUST</div>
        <p>
          I work where research code meets deployable services: APIs, auth, storage, and the
          constraints real users surface. This site is the map—projects are the receipts.
        </p>
        <div className="hero-metrics">
          <div><strong>{awardsListed}</strong><span>listed awards &amp; certs</span></div>
          <div><strong>{String(projects).padStart(2, '0')}</strong><span>featured projects</span></div>
          <div><strong>{internshipMonths}</strong><span>mo. industry (AVT)</span></div>
        </div>
      </aside>

      <div className="hero-plate">
        <div className="plate-caption">FIG. 01 · OWN · DATA · API · SHIP</div>
        <div className="plate-grid">
          <span>Define</span>
          <span>Design</span>
          <span>Develop</span>
          <span>Deliver</span>
        </div>
        <div className="plate-mark">Ø</div>
      </div>

      <div className="field-ticker" aria-hidden="true">
        <div className="field-ticker-track">
          <span>{heroTickerText}</span>
          <span>{heroTickerText}</span>
        </div>
      </div>

      <button
        type="button"
        className="scroll-hint"
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
      >
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </header>
  );
}
