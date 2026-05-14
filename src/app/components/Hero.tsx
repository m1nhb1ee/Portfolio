import { useEffect, useRef, useState } from 'react';
import { heroPhrases, portfolioStats } from '../content/voice';

const heroImage = new URL('../../assets/hero.jpg', import.meta.url).href;

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

  const { awardsListed, projects, internshipMonths } = portfolioStats;

  return (
    <header id="home" className="hero">
      <div className="hero-main">
        <div className="hero-eyebrow">Portfolio · HUST AI engineering</div>
        <h1 className="hero-name">
          Nguyen <em>Trong Minh</em>
        </h1>
        <p className="hero-lede">
          Shipping model-backed systems with clear ownership of the stack — from data and APIs
          to the surfaces real users touch.
        </p>
        <div className="hero-tagline">
          <span>{text}</span>
          {!staticMode && <span className="cursor" />}
        </div>
        <div className="hero-actions">
          <a href="#projects" className="hero-cta magnetic">View work</a>
          <a href="#contact" className="hero-cta hero-cta-secondary magnetic">Contact</a>
        </div>
        <div className="hero-metrics">
          <div><strong>{awardsListed}</strong><span>awards &amp; certs</span></div>
          <div><strong>{String(projects).padStart(2, '0')}</strong><span>featured projects</span></div>
          <div><strong>{internshipMonths}</strong><span>mo. industry</span></div>
        </div>
      </div>

      <aside className="hero-side">
        <figure className="hero-portrait">
          <div className="hero-portrait-mat" aria-hidden="true" />
          <div className="hero-portrait-frame">
            <img src={heroImage} alt="Portrait of Nguyen Trong Minh" loading="lazy" />
            <span className="hero-portrait-badge">Nº 01 · Portrait</span>
          </div>
          <figcaption className="hero-portrait-caption">
            <span>Nguyen Trong Minh</span>
            <span>HUST · 2026</span>
          </figcaption>
        </figure>
      </aside>
    </header>
  );
}
