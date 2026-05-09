export function About() {
  return (
    <section id="about" className="section-shell manifesto-section">
      <div className="section-label">I.Manifesto / Portfolio · 002 / 008</div>
      <div className="section-title">
        I treat AI as <em>production craft</em>, not a <em>black box</em><span className="dot">.</span>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm Nguyen Trong Minh, an AI engineering student at Hanoi
            University of Science and Technology. My work sits at the
            intersection of machine learning research and production
            engineering: taking models from notebooks into systems that handle
            real users, real data, and real constraints.
          </p>
          <p>
            I build full-stack backends, fine-tuned LLM pipelines,
            computer-vision systems, and cloud infrastructure. The common
            thread is shipping: turning promising research into interfaces and
            services people can actually use.
          </p>
        </div>
        <div className="about-pullquote">
          From model behavior to visual taste, I prototype the full stack of
          useful AI systems.
        </div>
      </div>
    </section>
  );
}
