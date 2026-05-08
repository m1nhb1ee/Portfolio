type Project = {
  tag: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
  date: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    tag: 'Featured · Medical AI',
    title: 'SARa — Medical Radiology Training Platform',
    description:
      'AI-powered web platform for medical students and resident doctors to practice radiological image diagnosis. Built a multi-modal AI agent on MedGemma 4B, with Django, Supabase, JWT middleware, storage integration, and domain-oriented backend structure.',
    stack: ['Django', 'DRF', 'Supabase', 'MedGemma 4B', 'AWS'],
    href: 'https://github.com/m1nhb1ee/SARa',
    date: '04/2026 — present',
    featured: true,
  },
  {
    tag: 'Computer Vision · Solo',
    title: 'SnakeNet — Snake Detection in Natural Environments',
    description:
      'Custom detector from scratch: backbone, FPN, SnakeAwareModule, CBAM attention, ASPP, multi-scale heads, CIoU loss, Focal Loss, and FP16 training.',
    stack: ['PyTorch', 'CBAM', 'ASPP', 'FP16', 'Kaggle'],
    href: 'https://github.com/m1nhb1ee/snakenet',
    date: '01/2026 — 03/2026',
  },
  {
    tag: 'NLP · Solo',
    title: 'DeDe — Depression Detection via Social Media',
    description:
      'Vietnamese depression-severity detection system using profile-level social data and Qwen2.5-4B fine-tuning with LoRA.',
    stack: ['PyTorch', 'Qwen2.5-4B', 'LoRA', 'HuggingFace', 'Vietnamese NLP'],
    href: 'https://github.com/m1nhb1ee/dede',
    date: '02/2026 — present',
  },
  {
    tag: 'Data · Solo',
    title: 'Bunik — University Admissions Aggregator & AI Advisor',
    description:
      'Automated admissions-data pipeline and AI advising layer for GPA-equivalent scores, major matching, and admission probability estimates.',
    stack: ['Python', 'PostgreSQL', 'Django', 'AI scoring'],
    href: 'https://github.com/m1nhb1ee/bunik',
    date: '04/2026 — present',
  },
  {
    tag: 'Full-stack',
    title: 'HustDerm — Smart Skincare Assistant',
    description:
      'Full-stack skincare assistant with real-time product crawling, MongoDB storage, and LLM-powered recommendations over 100+ products.',
    stack: ['Java', 'JavaFX', 'Python', 'MongoDB', 'LLM'],
    href: 'https://github.com/m1nhb1ee/navHustDerm',
    date: 'Feb — May 2025',
  },
  {
    tag: 'Computer Vision',
    title: 'Traffic Sign Recognition System',
    description:
      'Fine-tuned VGG16 for traffic sign classification with OpenCV preprocessing and TensorFlow training.',
    stack: ['Python', 'TensorFlow', 'VGG16', 'OpenCV'],
    href: 'https://www.kaggle.com/code/duckool/final-hanh',
    date: 'Mar — May 2025',
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-label">IV.Selected Work · 2026 Catalog · 005 / 008</div>
      <div className="section-title">Projects that turn models into memorable shipped systems.</div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`project-card ${project.featured ? 'full-width' : ''}`}
          >
            <div>
              <div className="project-tag">Nº {String(index + 1).padStart(2, '0')} · {project.tag} · {project.date}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link magnetic"
              >
                View source →
              </a>
            </div>
            {project.featured && (
              <div className="project-preview">
                <span>FIG. 02</span>
                <strong>MedGemma / Radiology / Backend</strong>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
