type Skill = { name: string; level: string; primary?: boolean };

const skills: Skill[] = [
  { name: 'Python', level: 'expert', primary: true },
  { name: 'PyTorch', level: 'expert', primary: true },
  { name: 'Django / DRF', level: 'expert', primary: true },
  { name: 'TensorFlow', level: 'advanced' },
  { name: 'HuggingFace', level: 'advanced' },
  { name: 'OpenCV', level: 'advanced' },
  { name: 'scikit-learn', level: 'advanced' },
  { name: 'FastAPI', level: 'advanced' },
  { name: 'Supabase', level: 'advanced' },
  { name: 'PostgreSQL', level: 'advanced' },
  { name: 'MongoDB', level: 'advanced' },
  { name: 'Java', level: 'advanced' },
  { name: 'C / C++', level: 'advanced' },
  { name: 'React.js', level: 'intermediate' },
  { name: 'JavaFX', level: 'advanced' },
  { name: 'AWS (EC2 · S3)', level: 'intermediate' },
  { name: 'Terraform', level: 'familiar' },
  { name: 'Git', level: 'advanced' },
];

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-label">II.Capabilities · Skills Matrix · 003 / 008</div>
      <div className="section-title">Skills, systems, and surfaces for applied intelligence.</div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`skill-node ${skill.primary ? 'primary-skill' : ''}`}
          >
            <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
            {skill.name}
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
