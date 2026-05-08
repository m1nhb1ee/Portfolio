import { useState, useEffect } from 'react';
import { ThemeToggle } from './Interactive';

const menuItems = [
  { name: 'Manifesto', href: '#about' },
  { name: 'Systems 18', href: '#skills' },
  { name: 'Field 01', href: '#experience' },
  { name: 'Work 06', href: '#projects' },
  { name: 'Archive', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`site-nav ${open ? 'open' : ''}`}>
      <button className="wordmark" onClick={() => go('#home')}>
        Ø Minh<span>.</span>AI
      </button>
      <ul>
        {menuItems.map(item => (
          <li key={item.name}>
            <button className="magnetic" onClick={() => go(item.href)}>{item.name}</button>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <svg viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
}
