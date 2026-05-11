import { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

import { portfolioStats } from '../content/voice';

export function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <div className="scroll-progress" style={{ width: `${width}%` }} />;
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextDark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', nextDark);
    setDark(nextDark);
  }, []);

  const toggle = () => {
    const nextDark = !dark;
    document.documentElement.classList.toggle('dark', nextDark);
    localStorage.setItem('portfolio-theme', nextDark ? 'dark' : 'light');
    setDark(nextDark);
  };

  return (
    <button
      type="button"
      className="theme-toggle magnetic"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={dark}
    >
      {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  );
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    const root = document.body;
    root.classList.add('cursor-active');

    const move = (event: MouseEvent) => {
      dotRef.current?.style.setProperty('transform', `translate(${event.clientX}px, ${event.clientY}px)`);
      ringRef.current?.style.setProperty('transform', `translate(${event.clientX}px, ${event.clientY}px)`);

      const target = event.target as HTMLElement | null;
      const interactive = target?.closest('a, button, [role="button"], .magnetic');
      const text = target?.closest('input, textarea, [contenteditable="true"]');
      dotRef.current?.classList.toggle('cursor-hover', Boolean(interactive));
      dotRef.current?.classList.toggle('cursor-text', Boolean(text));
      ringRef.current?.classList.toggle('cursor-hover', Boolean(interactive));
      ringRef.current?.classList.toggle('cursor-text', Boolean(text));
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      root.classList.remove('cursor-active');
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

export function ScrollReveal() {
  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>([
        '.section-shell',
        '.neural-shell',
        '.terminal-section',
        '.contact-section',
        '.hero-side',
        '.hero-plate',
        '.skill-node',
        '.project-card',
        '.timeline',
        '.award-row',
        '.edu-card',
        '.contact-link',
      ].join(',')),
    );

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    revealTargets.forEach((target, index) => {
      target.dataset.reveal = '';
      if (reduced) {
        target.classList.add('is-visible');
        return;
      }
      target.style.setProperty('--reveal-delay', `${Math.min(index % 8, 7) * 55}ms`);
    });

    if (reduced) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const target = entry.target as HTMLElement;
          const aboveViewport = entry.boundingClientRect.top < 0;
          target.classList.toggle('is-visible', entry.isIntersecting);
          target.classList.toggle('is-above', !entry.isIntersecting && aboveViewport);
          target.classList.toggle('is-below', !entry.isIntersecting && !aboveViewport);
        });
      },
      { threshold: 0.14, rootMargin: '-8% 0px -10% 0px' },
    );

    revealTargets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return null;
}

export function MagneticButtons() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    const buttons = Array.from(document.querySelectorAll<HTMLElement>('.magnetic'));
    const cleanups = buttons.map(button => {
      const move = (event: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
      };
      const leave = () => {
        button.style.transform = '';
      };

      button.addEventListener('mousemove', move);
      button.addEventListener('mouseleave', leave);
      return () => {
        button.removeEventListener('mousemove', move);
        button.removeEventListener('mouseleave', leave);
      };
    });

    return () => cleanups.forEach(cleanup => cleanup());
  }, []);

  return null;
}

type CounterItem = {
  value: number;
  suffix?: string;
  label: string;
};

const counters: CounterItem[] = [
  { value: portfolioStats.awardsListed, suffix: '', label: 'listed awards & certs' },
  { value: portfolioStats.projects, suffix: '', label: 'featured projects' },
  { value: portfolioStats.internshipMonths, suffix: ' mo', label: 'industry internship' },
  { value: portfolioStats.productsCrawledMin, suffix: '+', label: 'products crawled (HustDerm)' },
];

export function AchievementCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const totalFrames = 42;
    const tick = () => {
      frame += 1;
      setProgress(Math.min(1, frame / totalFrames));
      if (frame < totalFrames) window.requestAnimationFrame(tick);
    };

    window.requestAnimationFrame(tick);
  }, [active]);

  return (
    <div ref={ref} className="stats-strip">
      {counters.map(item => (
        <div key={item.label}>
          <div className="stat-num">
            {Math.round(item.value * progress)}
            {item.suffix}
          </div>
          <div className="stat-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
