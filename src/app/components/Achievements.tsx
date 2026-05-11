import { AchievementCounters } from './Interactive';
import { awards } from '../data/awards';

export function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <div className="section-label">Achievements — competitions &amp; certifications</div>
      <div className="section-title">Competitions <em>experience</em> &amp; <em>certified</em> qualifications</div>
      <div className="awards-list">
        {awards.map((a, i) => (
          <div key={i} className="award-row">
            <span className="award-year">{a.year}</span>
            <span className="award-title">{a.title}</span>
            <span className="award-org">{a.org}</span>
          </div>
        ))}
      </div>
      <AchievementCounters />
    </section>
  );
}
