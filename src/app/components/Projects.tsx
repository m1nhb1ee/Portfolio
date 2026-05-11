import { useEffect, useState, type CSSProperties } from 'react';

import { thesisLine } from '../content/voice';

import sara1 from '../../assets/sara/Screenshot 2026-05-11 122605.png';
import sara2 from '../../assets/sara/Screenshot 2026-05-11 122618.png';
import sara3 from '../../assets/sara/Screenshot 2026-05-11 122630.png';
import sara4 from '../../assets/sara/Screenshot 2026-05-11 122639.png';
import sara5 from '../../assets/sara/Screenshot 2026-05-11 122649.png';

import snake1 from '../../assets/snakenet/snakenet.jpg';
import snake2 from '../../assets/snakenet/snakenet2.jpg';
import snake3 from '../../assets/snakenet/snakenet3.jpg';
import snake4 from '../../assets/snakenet/snakener4.jpg';
import snake5 from '../../assets/snakenet/snakenet5.jpg';
import snake6 from '../../assets/snakenet/snakenet6.jpg';

import dede1 from '../../assets/dede/Screenshot 2026-05-10 151001.png';

import bun1 from '../../assets/bunik/Screenshot 2026-05-10 150304.png';
import bun2 from '../../assets/bunik/Screenshot 2026-05-10 150313.png';
import bun3 from '../../assets/bunik/Screenshot 2026-05-10 150327.png';
import bun4 from '../../assets/bunik/Screenshot 2026-05-10 150354.png';
import bun5 from '../../assets/bunik/Screenshot 2026-05-10 150408.png';
import bun6 from '../../assets/bunik/Screenshot 2026-05-10 150416.png';

import hd1 from '../../assets/hustderm/hd.png';
import hd2 from '../../assets/hustderm/hd1.png';

import tsrs1 from '../../assets/tsrs/VGG16.png';
import tsrs2 from '../../assets/tsrs/he-thong-bien-bao-trong-luat-giao-thong-duong-bo-viet-nam-tunganh-auto.png';

type CaseStudy = {
  context: string;
  constraint: string;
  decision: string;
  outcome: string;
  learning: string;
};

type Project = {
  eyebrow: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
  year: string;
  category: string;
  variant: string;
  images: string[];
  caseStudy?: CaseStudy;
};

const MAX_STACK_SHOTS = 6;

/** Same fanned stack as SARa — slot per image count (center hero + satellites). */
function stackSlotsForCount(count: number): string[] {
  const n = Math.min(Math.max(count, 0), MAX_STACK_SHOTS);
  switch (n) {
    case 0:
      return [];
    case 1:
      return ['center'];
    case 2:
      return ['center', 'br'];
    case 3:
      return ['center', 'tl', 'tr'];
    case 4:
      return ['center', 'tl', 'tr', 'bl'];
    case 5:
      return ['center', 'tl', 'tr', 'bl', 'br'];
    default:
      return ['center', 'tl', 'tr', 'bl', 'br', 'tc'];
  }
}

const projects: Project[] = [
  {
    eyebrow: 'Featured Project',
    title: 'SARa',
    description:
      'Radiology training stack for medical students: upload cases, structured forms, and a multi-modal agent on MedGemma 4B. Django + DRF for APIs, Supabase for auth and storage, JWT middleware at the edge of uploads.',
    stack: ['Django', 'DRF', 'Supabase', 'MedGemma 4B'],
    href: 'https://github.com/m1nhb1ee/SARa',
    year: '2026',
    category: 'Medical AI',
    variant: 'Featured',
    images: [sara1, sara2, sara3, sara4, sara5],
    caseStudy: {
      context:
        'Students need deliberate practice on real-looking cases without exposing PHI; the UI had to feel like a file, not a generic chat.',
      constraint:
        'Tight coupling between uploads, case metadata, and model context — failures in auth or storage would leak trust fast.',
      decision:
        'Own the stack in Django, integrate Supabase for auth/storage, and keep the agent contract explicit (what goes to MedGemma vs what stays server-side).',
      outcome:
        'A coherent case flow (upload → scan type → history → agent) with screenshots you can audit like a product, not a demo.',
      learning:
        'Medical-adjacent UX punishes “magic” copy: labels, defaults, and error paths matter as much as the model card.',
    },
  },
  {
    eyebrow: 'Companion System',
    title: 'SnakeNet',
    description:
      'Custom snake detector from a clean PyTorch codebase — backbone, FPN, CBAM, ASPP, and multi-scale heads with CIoU + Focal and FP16 training. Built to understand every layer, not only the leaderboard.',
    stack: ['PyTorch', 'CBAM', 'ASPP', 'FP16'],
    href: 'https://github.com/m1nhb1ee/snakenet',
    year: '2026',
    category: 'Vision',
    variant: 'Detector',
    images: [snake1, snake2, snake3, snake4, snake5, snake6],
  },
  {
    eyebrow: 'Research System',
    title: 'DeDe',
    description:
      'Vietnamese depression-severity cues from social-style text. Qwen2.5-4B with LoRA for low-resource adaptation and clearer failure modes than a frozen English-only baseline.',
    stack: ['PyTorch', 'Qwen2.5-4B', 'LoRA', 'HuggingFace'],
    href: 'https://github.com/m1nhb1ee/dede',
    year: '2026',
    category: 'NLP',
    variant: 'Research',
    images: [dede1],
  },
  {
    eyebrow: 'Data Platform',
    title: 'Bunik',
    description:
      'Admissions pipeline with an advising layer: GPA-style scoring, major fit, and calibrated probability language. PostgreSQL + Django so the policy layer stays inspectable, not hidden in prompts alone.',
    stack: ['Python', 'PostgreSQL', 'Django'],
    href: 'https://github.com/m1nhb1ee/bunik',
    year: '2026',
    category: 'Data',
    variant: 'Pipeline',
    images: [bun1, bun2, bun3, bun4, bun5, bun6],
  },
  {
    eyebrow: 'Full-stack App',
    title: 'HustDerm',
    description:
      'Desktop assistant that crawls skincare SKUs, stores them in MongoDB, and grounds LLM answers on live inventory. JavaFX client + Python services — shipping mattered more than a single slick model.',
    stack: ['Java', 'JavaFX', 'Python', 'MongoDB'],
    href: 'https://github.com/m1nhb1ee/navHustDerm',
    year: '2025',
    category: 'Full-stack',
    variant: 'Assistant',
    images: [hd1, hd2],
  },
  {
    eyebrow: 'Computer Vision',
    title: 'Traffic Signs',
    description:
      'Vietnamese traffic-sign classification with VGG16 fine-tuning and OpenCV preprocessing. A disciplined CV baseline: honest metrics on a regional label set instead of only textbook accuracy.',
    stack: ['Python', 'TensorFlow', 'VGG16', 'OpenCV'],
    href: 'https://www.kaggle.com/code/duckool/final-hanh',
    year: '2025',
    category: 'Vision',
    variant: 'Classifier',
    images: [tsrs1, tsrs2],
  },
];

type CardProps = {
  src: string;
  alt: string;
  label: string;
  foot: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

function VizCard({ src, alt, label, foot, className = '', style, onClick }: CardProps) {
  const Tag = onClick ? 'button' : 'div';
  const [focused, setFocused] = useState(false);

  return (
    <Tag
      type={onClick ? 'button' : undefined}
      className={`viz-card ${className} ${onClick ? 'is-clickable' : ''}`}
      style={{ ...(style ?? {}), outline: focused ? '3px solid rgba(59,130,246,0.65)' : undefined, outlineOffset: 2 }}
      onClick={onClick}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <div className="viz-card-head">
        <span>{label}</span>
        <span className="dot">●</span>
      </div>
      <div className="viz-card-image">
        <div className="viz-card-image-frame">
          <img src={src} alt={alt} loading="lazy" />
        </div>
      </div>
      <div className="viz-card-foot">
        <span>{foot}</span>
        <span className="accent">▸</span>
      </div>
    </Tag>
  );
}

function ProjectCaseNotes({ study }: { study: CaseStudy }) {
  return (
    <div className="stage-case">
      <h3 className="stage-case-title">Case notes</h3>
      <dl>
        <dt>Context</dt>
        <dd>{study.context}</dd>
        <dt>Constraint</dt>
        <dd>{study.constraint}</dd>
        <dt>Decision</dt>
        <dd>{study.decision}</dd>
        <dt>Outcome</dt>
        <dd>{study.outcome}</dd>
        <dt>Learning</dt>
        <dd>{study.learning}</dd>
      </dl>
    </div>
  );
}

function ProjectVisual({
  project,
  orderedImages,
  catalogIssue,
  onSwap,
}: {
  project: Project;
  orderedImages: string[];
  /** 1-based index in catalog (matches cover row order). */
  catalogIssue: number;
  onSwap: (k: number) => void;
}) {
  const { title, year, category } = project;
  const visibleImages = orderedImages.slice(0, MAX_STACK_SHOTS);
  const slots = stackSlotsForCount(visibleImages.length);
  const catalogLine = `FIG. ${String(catalogIssue).padStart(2, '0')} / ${title.toUpperCase()}`;

  return (
    <div className={`viz viz-stack${visibleImages.length === 1 ? ' viz-stack-sparse' : ''}`}>
      {visibleImages.map((src, i) => (
        <VizCard
          key={`${src}-${i}`}
          src={src}
          alt={`${title} ${i + 1}`}
          label={`SHOT ${String(i + 1).padStart(2, '0')}`}
          foot={`${year} · ${category}`}
          className={`viz-stack-card slot-${slots[i] ?? 'br'}`}
          onClick={i === 0 ? undefined : () => onSwap(i)}
        />
      ))}
      <span className="viz-corner viz-corner-tl">{catalogLine}</span>
      <span className="viz-corner viz-corner-br">{orderedImages.length} SHOT{orderedImages.length === 1 ? '' : 'S'}</span>
    </div>
  );
}

export function Projects() {
  const total = projects.length + 1; // cover + projects
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState<number[]>([]);

  const isCover = page === 0;
  const project = isCover ? null : projects[page - 1];

  useEffect(() => {
    if (project) {
      setOrder(project.images.map((_, i) => i));
    } else {
      setOrder([]);
    }
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const stage = document.querySelector('.projects-stage');
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!visible) return;

      // When viewing the cover, arrows navigate pages as before
      if (isCover) {
        if (e.key === 'ArrowRight') setPage(p => (p + 1) % total);
        if (e.key === 'ArrowLeft') setPage(p => (p - 1 + total) % total);
        return;
      }

      // When viewing a project, arrows flip/rotate the project's images
      if (project) {
        if (e.key === 'ArrowRight') {
          setOrder(o => {
            if (o.length <= 1) return o;
            const [first, ...rest] = o;
            return [...rest, first];
          });
        }
        if (e.key === 'ArrowLeft') {
          setOrder(o => {
            if (o.length <= 1) return o;
            const next = [...o];
            const last = next.pop()!;
            next.unshift(last);
            return next;
          });
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [total, isCover, project]);

  const next = () => setPage(p => (p + 1) % total);
  const prev = () => setPage(p => (p - 1 + total) % total);

  const swap = (k: number) => {
    setOrder(o => {
      if (k <= 0 || k >= o.length) return o;
      const next = [...o];
      const [picked] = next.splice(k, 1);
      next.unshift(picked);
      return next;
    });
  };

  const orderedImages = project ? order.map(i => project.images[i]) : [];

  return (
    <section id="projects" className="section-shell projects-section">
      <div className="projects-stage" style={{ backgroundColor: '#191812' }}>
        <header className="stage-topbar">
          <span className="stage-mark">m.</span>
          <span className="stage-meta">
            Selected work · HUST AI engineering <span className="stage-dot">•</span> Nguyen Trong Minh
          </span>
          <span className="stage-page">
            {isCover ? 'COVER' : `${String(page).padStart(3, '0')} / ${String(total - 1).padStart(3, '0')}`}
          </span>
        </header>

        <aside className="stage-rail">
          <span>SHIP · MEASURE · OWN THE STACK</span>
        </aside>
        <aside className="stage-rail-right">
          <span>HUST · SOICT · {isCover ? 'COVER' : `ISSUE ${String(page).padStart(2, '0')}`} · 2025–2026</span>
        </aside>

        {isCover ? (
          <div className="stage-cover">
            <div className="stage-cover-left">
              <div className="stage-cover-eyebrow">— Projects · receipts for the thesis</div>
              <h2 className="stage-cover-title">
                Work that shows <em>ownership</em> from data to <em>deploy</em>
              </h2>
              <p className="stage-cover-sub">
                {thesisLine} Six builds from 2025–2026 — each with stack, trade-offs, and source you can open.
              </p>
            </div>
            <div className="stage-cover-index" style={{ maxHeight: '620px', overflowY: 'auto' }}>
              <div className="stage-cover-index-head">
                <span>Nº</span><span>Project</span><span>Discipline</span><span>Year</span>
              </div>
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  className="stage-cover-row"
                  onClick={() => setPage(i + 1)}
                >
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="name">{p.title}</span>
                  <span className="cat">{p.category}</span>
                  <span className="yr">{p.year}</span>
                </button>
              ))}
            </div>
            <div className="stage-cover-cta-wrap">
              <button type="button" className="stage-cover-cta" onClick={() => setPage(1)} aria-label="Begin catalog">
                Begin catalog ↗
              </button>
            </div>
          </div>
        ) : (
          <div className="stage-body">
            <div className="stage-headline">
              <div className="stage-eyebrow">— {project!.eyebrow}</div>
              <h2 className="stage-title">{project!.title}</h2>
              <p className="stage-desc">{project!.description}</p>

              {project!.caseStudy && <ProjectCaseNotes study={project!.caseStudy} />}

              <div className="stage-stack">
                {project!.stack.map(s => <span key={s}>{s}</span>)}
              </div>

              <div className="stage-meta-row">
                <span>{project!.year} · {project!.category}</span>
                <span>{project!.variant}</span>
              </div>

              <a
                className="stage-viewall"
                href={project!.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View source <span className="arrow">↗</span>
              </a>
            </div>

            <div className="stage-visual">
              <ProjectVisual
                key={project!.title}
                project={project!}
                orderedImages={orderedImages}
                catalogIssue={page}
                onSwap={swap}
              />
            </div>
          </div>
        )}

        <div className="stage-pager">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`pager-dot ${i === page ? 'is-active' : ''}`}
              onClick={() => setPage(i)}
              aria-label={i === 0 ? 'Cover' : `Show project ${i}`}
            />
          ))}
        </div>

        <div className="stage-controls">
          <button
            type="button"
            className="stage-btn stage-btn-ghost"
            onClick={prev}
            aria-label="Previous"
          >
            ←
          </button>
          {!isCover && (
            <button
              type="button"
              className="stage-btn stage-btn-accent"
              onClick={next}
              aria-label="Next"
            >
              →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
