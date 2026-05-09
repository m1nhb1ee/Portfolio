import { useState } from 'react';

const responses: Record<string, string> = {
  skills:
    '🔧 Python, PyTorch, Django/DRF, FastAPI, HuggingFace, OpenCV, AWS. Backend + DL/CV + cloud, full pipeline.',
  contact:
    '📧 minhngtr.b1e@gmail.com · 📱 0969 062 173 · GitHub: @m1nhb1ee · LinkedIn: /in/minhb1e',
  projects:
    '🚀 SARa (medical radiology + MedGemma), SnakeNet (custom detector), DeDe (Vietnamese NLP, Qwen2.5-4B + LoRA), Bunik (admissions advisor), HustDerm, Traffic Sign Recognition.',
  experience:
    '💼 Frontend & AI Engineer Intern at AVT Software (4 months, 2025) - React.js + LLM API integration in production.',
  education:
    '🎓 B.Sc. Information Technology, HUST (2023–2027). Ha Long High School for the Gifted - Informatics, Top-2 entrance.',
  coffee:
    '☕ Vietnamese coffee - strong, sweet, phin-filtered. Same patience I apply to debugging.',
  philosophy:
    '💡 "The best model is the one that ships." Reliability over novelty. Infrastructure over algorithms. Clarity over cleverness.',
  help:
    'Available commands: skills, experience, education, projects, contact, coffee, philosophy.',
};

const fallback = [
  "Hmm, that's not a command I know yet. Try 'help' for the full list.",
  "Interesting question! I'm a simple terminal though - try 'help' to see what I know.",
  "I wish I could answer that. My knowledge is limited to the commands listed under 'help'.",
];

export function Terminal() {
  const [value, setValue] = useState('');
  const [output, setOutput] = useState<string | null>(null);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    const q = value.trim().toLowerCase();
    setValue('');
    if (!q) return;
    setOutput(
      responses[q] ?? fallback[Math.floor(Math.random() * fallback.length)],
    );
  };

  return (
    <div className="terminal-section" id="terminal">
      <div className="section-label">07 - Try it</div>
      <div className="section-title" style={{ marginBottom: 32 }}>
        Ask <em>Minh’s</em> terminal<span className="dot">.</span>
      </div>
      <div className="terminal">
        <div className="terminal-bar">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
          <span>minh@ai:~</span>
        </div>
        <div className="terminal-body">
          <div className="terminal-line">
            <span className="prompt">❯ </span>Welcome. Type a question and hit Enter.
          </div>
          <div className="terminal-line" style={{ fontSize: 12, opacity: 0.5 }}>
            Try: "skills", "contact", "projects", "coffee", "philosophy"
          </div>
          <div className="terminal-input-line">
            <span className="prompt">❯ </span>
            <input
              className="terminal-input"
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type something..."
              autoComplete="off"
            />
          </div>
          {output && (
            <div className="terminal-output visible">
              <span className="response-label">❯ response</span>
              <br />
              {output}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
