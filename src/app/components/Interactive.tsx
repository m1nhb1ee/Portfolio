import { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

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

    revealTargets.forEach((target, index) => {
      target.dataset.reveal = '';
      target.style.setProperty('--reveal-delay', `${Math.min(index % 8, 7) * 55}ms`);
    });

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

export function KonamiEasterEgg() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let index = 0;
    let timer: ReturnType<typeof setTimeout>;

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('input, textarea, [contenteditable="true"]')) return;

      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      index = key === sequence[index] ? index + 1 : key === sequence[0] ? 1 : 0;

      if (index === sequence.length) {
        index = 0;
        setVisible(true);
        clearTimeout(timer);
        timer = setTimeout(() => setVisible(false), 1800);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="konami-overlay" aria-live="polite">
      <div className="konami-card">
        <div className="konami-title">Neural boost unlocked</div>
        <div className="konami-sub">Hidden layer activated</div>
        <div className="konami-sequence">UP UP DOWN DOWN</div>
      </div>
    </div>
  );
}

const layers = [
  [
    { id: 'i1', x: 80, y: 95 },
    { id: 'i2', x: 80, y: 170 },
    { id: 'i3', x: 80, y: 245 },
  ],
  [
    { id: 'h1', x: 260, y: 70 },
    { id: 'h2', x: 260, y: 135 },
    { id: 'h3', x: 260, y: 200 },
    { id: 'h4', x: 260, y: 265 },
  ],
  [
    { id: 'o1', x: 440, y: 130 },
    { id: 'o2', x: 440, y: 220 },
  ],
];

export function NeuralNetworkGame() {
  const [epoch, setEpoch] = useState(0);
  const [accuracy, setAccuracy] = useState(42);
  const [loss, setLoss] = useState(0.92);
  const [activeLayer, setActiveLayer] = useState(0);
  const [training, setTraining] = useState(false);

  const train = () => {
    if (training) return;
    setTraining(true);
    setActiveLayer(0);

    let step = 0;
    const interval = window.setInterval(() => {
      step += 1;
      setActiveLayer(step % layers.length);
      setEpoch(prev => prev + 1);
      setAccuracy(prev => Math.min(98, prev + 4 + (step % 2)));
      setLoss(prev => Math.max(0.08, Number((prev * 0.82).toFixed(2))));

      if (step >= 6) {
        window.clearInterval(interval);
        setTraining(false);
        setActiveLayer(2);
      }
    }, 320);
  };

  const activateNeuron = (layerIndex: number) => {
    setActiveLayer(layerIndex);
    setAccuracy(prev => Math.min(98, prev + 1));
  };

  const connections = layers.flatMap((layer, layerIndex) => {
    const nextLayer = layers[layerIndex + 1];
    if (!nextLayer) return [];
    return layer.flatMap(from =>
      nextLayer.map(to => ({
        id: `${from.id}-${to.id}`,
        from,
        to,
        active: activeLayer === layerIndex || activeLayer === layerIndex + 1,
      })),
    );
  });

  return (
    <section id="neural-game" className="neural-shell">
      <div className="section-label">07 - Neural game</div>
      <div className="section-title">Train a <em>tiny</em> neural network<span className="dot">.</span></div>
      <div className="neural-canvas">
        <svg className="neural-svg" viewBox="0 0 520 320" role="img" aria-label="Interactive neural network">
          {connections.map(connection => (
            <line
              key={connection.id}
              className={`connection ${connection.active ? 'active' : ''}`}
              x1={connection.from.x}
              y1={connection.from.y}
              x2={connection.to.x}
              y2={connection.to.y}
            />
          ))}
          {layers.map((layer, layerIndex) =>
            layer.map(neuron => (
              <circle
                key={neuron.id}
                className={`neuron ${activeLayer === layerIndex ? 'active' : ''}`}
                cx={neuron.x}
                cy={neuron.y}
                r={18}
                onClick={() => activateNeuron(layerIndex)}
              />
            )),
          )}
          {layers.map((layer, layerIndex) => (
            <text key={layerIndex} className="layer-label" x={layer[0].x - 28} y={300}>
              {layerIndex === 0 ? 'input' : layerIndex === 1 ? 'hidden' : 'output'}
            </text>
          ))}
        </svg>
        <div className="neural-controls">
          <div className="neural-stats">
            <div className="neural-stat">
              <strong>{epoch}</strong>
              epoch
            </div>
            <div className="neural-stat">
              <strong>{accuracy}%</strong>
              accuracy
            </div>
            <div className="neural-stat">
              <strong>{loss.toFixed(2)}</strong>
              loss
            </div>
          </div>
          <button type="button" className="neural-btn magnetic" onClick={train} disabled={training}>
            {training ? 'Training' : 'Train'}
          </button>
        </div>
        <div className="neural-output">
          <strong>Status:</strong> {training ? 'Signals are propagating through the hidden layer.' : 'Click neurons or train the model to update the network.'}
        </div>
      </div>
    </section>
  );
}

type CounterItem = {
  value: number;
  suffix?: string;
  label: string;
};

const counters: CounterItem[] = [
  { value: 12, suffix: '+', label: 'awards' },
  { value: 9, suffix: '+', label: 'projects shipped' },
  { value: 4, suffix: ' mo', label: 'industry internship' },
  { value: 100, suffix: '+', label: 'products crawled' },
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
