import { useState } from 'react';
import { portfolioStats, thesisLine } from '../content/voice';

const responses: Record<string, string> = {
  skills:
    'Python, PyTorch, Django/DRF, FastAPI, HuggingFace, OpenCV, AWS. Backend + DL/CV + cloud, full pipeline.',
  contact:
    'minhngtr.b1e@gmail.com · 0969 062 173 · GitHub: @m1nhb1ee · LinkedIn: /in/minhb1e',
  projects:
    'SARa (radiology training + MedGemma), SnakeNet (detector), DeDe (Vietnamese NLP + Qwen2.5-4B LoRA), Bunik (admissions), HustDerm, traffic-sign VGG16 work.',
  experience:
    'Frontend & AI Engineer Intern at AVT Software (4 months, 2025): React.js + LLM APIs in production.',
  education:
    'B.Sc. Information Technology, HUST (2023–2027). Ha Long High School for the Gifted — Informatics, top-2 national entrance.',
  coffee:
    'Vietnamese coffee — phin, strong, slow. Same cadence I use when debugging and profiling.',
  philosophy: thesisLine,
  help:
    'Commands: skills, experience, education, projects, contact, coffee, philosophy, stats.',
  stats: `Listed awards & certs: ${portfolioStats.awardsListed}. Featured projects: ${portfolioStats.projects}. Internship: ${portfolioStats.internshipMonths} mo (AVT).`,
};

const fallback = [
  "Unknown command — type 'help' for the list.",
  "That input is not wired yet. Try 'help'.",
  "I only answer the fixed commands — try 'help'.",
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
      <div className="section-label">Terminal — quick facts</div>
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
            <span className="prompt">❯ </span>
            Welcome. Type a command and press Enter. Same thesis as the rest of the site — try &quot;philosophy&quot;.
          </div>
          <div className="terminal-line" style={{ fontSize: 12, opacity: 0.5 }}>
            Try: skills, stats, projects, contact, philosophy, help
          </div>
          <div className="terminal-input-line">
            <span className="prompt">❯ </span>
            <input
              className="terminal-input"
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type a command..."
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
