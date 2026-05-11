import { beliefs, thesisLine, thesisPullquote } from '../content/voice';

export function About() {
  return (
    <section id="about" className="section-shell manifesto-section">
      <div className="section-label">About — manifesto</div>
      <div className="section-title">
        I treat AI as <em>production craft</em>, not a <em>black box</em>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p className="about-thesis">{thesisLine}</p>
          <ul className="about-beliefs">
            {beliefs.map(line => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p>
            At Hanoi University of Science and Technology I work across deep learning, backend services,
            and cloud deployment: SARa (radiology training stack), detectors and NLP side projects,
            and an internship shipping React surfaces with LLM integrations. The through-line is the
            same—name the user, the failure mode, and what we measure before we call it done.
          </p>
        </div>
        <div className="about-pullquote">{thesisPullquote}</div>
      </div>
    </section>
  );
}
