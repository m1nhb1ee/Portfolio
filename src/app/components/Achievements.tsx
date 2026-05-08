import { AchievementCounters } from './Interactive';

type Award = { year: string; title: string; org: string };

const awards: Award[] = [
  { year: '2025', title: 'Rank 3 — CodeFest', org: 'FPT University' },
  { year: '2023', title: 'IELTS 6.0', org: 'British Council' },
  { year: '2022', title: '2nd Prize — Young Informatics Contest', org: 'Quảng Ninh Province' },
  { year: '2022', title: 'Honorable Mention — Hùng Vương Summer Camp', org: 'Regional Informatics' },
  { year: '2022', title: 'Consolation Prize — Provincial Informatics', org: 'Quảng Ninh Province' },
  { year: '2021', title: '3rd Prize — Young Informatics Contest', org: 'Quảng Ninh Province' },
  { year: '2021', title: 'Honorable Mention — Red River Delta Regional', org: 'Inter-province Contest' },
  { year: '2021', title: '3rd Prize — Provincial Informatics', org: 'Quảng Ninh Province' },
  { year: '2020', title: '2nd Prize — Provincial Informatics', org: 'Quảng Ninh Province' },
  { year: '2020', title: 'Top 2 Entrance Scorer', org: 'Ha Long High School for the Gifted' },
];

export function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <div className="section-label">06 — Achievements</div>
      <div className="section-title">Competitions &amp; certifications</div>
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
