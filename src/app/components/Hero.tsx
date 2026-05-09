import { useEffect, useRef, useState } from 'react';

const phrases = [
  'AI engineering student at HUST.',
  'Backend · DL/CV · Cloud infrastructure.',
  'Building end-to-end production systems.',
  'From research to shipping.',
];

export function Hero() {
  const [text, setText] = useState('');
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
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
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="home" className="hero">
      <div className="hero-issue">
        <span>Vol. 01 · Issue Nº 08 · May 2026</span>
        <span>21.0285° N · 105.8542° E · Hanoi / VN</span>
        <span>Build a3f2c1 · Filed under AI · Backend · Vision</span>
      </div>

      <div className="hero-main">
        <div className="hero-eyebrow">Open portfolio studio · Nº 01</div>
        <div className="hero-name" aria-label="Nguyen Trong Minh">
          <span>Nguyen</span>
          <span>Trong Minh</span>
        </div>
        <h1>Designing <em>useful AI</em> with code, systems, and <em>taste</em><span className="dot">.</span></h1>
        <div className="hero-tagline">
          <span>{text}</span>
          <span className="cursor" />
        </div>
        <div className="hero-actions">
          <a href="#projects" className="hero-cta magnetic">View work</a>
          <a href="#contact" className="hero-cta hero-cta-secondary magnetic">Contact</a>
        </div>
      </div>

      <aside className="hero-side">
        <div className="hero-side-label">Nguyen Trong Minh · AI Engineer</div>
        <p>
          AI engineering student at Hanoi University of Science and Technology
          with hands-on experience in backend development, deep learning, and
          cloud infrastructure. I build end-to-end production systems -
          independently, end-to-end.
        </p>
        <div className="hero-metrics">
          <div><strong>10</strong><span>awards</span></div>
          <div><strong>06</strong><span>projects</span></div>
          <div><strong>04</strong><span>systems</span></div>
        </div>
      </aside>

      <div className="hero-plate">
        <div className="plate-caption">FIG. 01 · MT-26 · PLATE Nº 08 · METHOD</div>
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
          <span>
            Hanoi · Berlin · Tokyo · Singapore · San Francisco · HUST · AWS · PyTorch · Supabase · Django · Hanoi · Berlin · Tokyo · Singapore · San Francisco ·
          </span>
          <span>
            Hanoi · Berlin · Tokyo · Singapore · San Francisco · HUST · AWS · PyTorch · Supabase · Django · Hanoi · Berlin · Tokyo · Singapore · San Francisco ·
          </span>
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
