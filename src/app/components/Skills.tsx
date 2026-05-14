type Skill = { name: string; level: string };

type Capability = {
  tag: string;
  title: string;
  caption: string;
  icon: 'code' | 'grid' | 'cloud' | 'pen';
  items: Skill[];
};

const capabilities: Capability[] = [
  {
    tag: 'Languages',
    title: 'Core languages\nI ship with',
    caption: '4 languages I write daily - from low-level C/C++ research code to production TypeScript.',
    icon: 'code',
    items: [
      { name: 'Python', level: 'expert' },
      { name: 'Java', level: 'advanced' },
      { name: 'C / C++', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
    ],
  },
  {
    tag: 'Frameworks',
    title: 'Frameworks\nfor ML & web',
    caption: '9 frameworks across deep learning, backend, and frontend - picked, not collected.',
    icon: 'grid',
    items: [
      { name: 'PyTorch', level: 'expert' },
      { name: 'Django / DRF', level: 'expert' },
      { name: 'TensorFlow', level: 'advanced' },
      { name: 'OpenCV', level: 'advanced' },
      { name: 'LangGraph', level: 'advanced' },
      { name: 'FastAPI', level: 'advanced' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'React', level: 'intermediate' },
      { name: 'Terraform', level: 'familiar' },
    ],
  },
  {
    tag: 'Cloud & Data',
    title: 'Cloud, data,\nand the glue',
    caption: '7 platforms I deploy on - self-hosted Supabase to AWS, with Git as the source of truth.',
    icon: 'cloud',
    items: [
      { name: 'HuggingFace', level: 'advanced' },
      { name: 'Supabase', level: 'advanced' },
      { name: 'MongoDB', level: 'advanced' },
      { name: 'LangSmith', level: 'advanced' },
      { name: 'AWS (EC2 · S3)', level: 'intermediate' },
      { name: 'GCP', level: 'advanced' },
      { name: 'Git', level: 'advanced' },
      { name: 'DVC', level: 'advanced' },
      { name: 'Docker', level: 'advanced' },
    ],
  },
  {
    tag: 'Design',
    title: 'Design tools\nfor visual craft',
    caption: '5 tools I reach for when an interface, deck, or brand mark needs to feel intentional.',
    icon: 'pen',
    items: [
      { name: 'Figma', level: 'advanced' },
      { name: 'CSS', level: 'advanced' },
      { name: 'HTML', level: 'advanced' },
      { name: 'Canva', level: 'advanced' },
      { name: 'Photoshop', level: 'intermediate' },
      { name: 'Premiere', level: 'intermediate' },
      { name: 'Unity', level: 'intermediate' },
    ],
  },
];

function Icon({ name }: { name: Capability['icon'] }) {
  const stroke = 'currentColor';
  if (name === 'code') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="8 6 2 12 8 18" />
        <polyline points="16 6 22 12 16 18" />
      </svg>
    );
  }
  if (name === 'grid') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    );
  }
  if (name === 'cloud') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1.5A4 4 0 0 0 6 19h11.5z" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-label">Skills</div>
      <div className="section-title">
        Skills, systems, and surfaces for <em>applied intelligence</em>
      </div>
      <p className="section-lede">
        Languages, frameworks, cloud, and design tools I actually use in shipped work.
      </p>

      <div className="capability-grid">
        {capabilities.map((cap, idx) => (
          <article key={cap.tag} className="capability-card">
            <header className="capability-head">
              <span className="capability-index">{String(idx + 1).padStart(2, '0')}</span>
              <span className="capability-tag">{cap.tag}</span>
            </header>

            <div className="capability-icon"><Icon name={cap.icon} /></div>

            <h3 className="capability-title">
              {cap.title.split('\n').map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </h3>

            <p className="capability-caption">{cap.caption}</p>

            <ul className="capability-list">
              {cap.items.map((s) => (
                <li key={s.name}>
                  <span className="cap-item-name">{s.name}</span>
                  <span className="cap-item-level">{s.level}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
