import hustLogo from '../../assets/logohust.png';
import halongLogo from '../../assets/logo_chuyenhalong.jpg';

const education = [
  {
    logo: hustLogo,
    degree: 'B.Sc. Information Technology',
    school: 'Hanoi University of Science and Technology (HUST)',
    period: '2023 - 2027',
    note: 'Focused coursework: Data Structures, Web Development, Software Engineering.',
  },
  {
    logo: halongLogo,
    degree: 'Specialised in Informatics Technology',
    school: 'Ha Long High School for Gifted Students',
    period: '2020 - 2023',
    note: 'Ranked 2nd in the national entrance examination.',
  },
];

export function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="section-label">Education</div>
      <div className="section-title">Academic <em>Journey</em> and educational <em>development</em> </div>
      <div className="education-list">
        {education.map((e, i) => (
          <div key={i} className="edu-card">
            <div className="edu-icon edu-icon-logo">
              <img src={e.logo} alt={`${e.school} logo`} loading="lazy" />
            </div>
            <div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-date">{e.period}</div>
              <div className="edu-note">{e.note}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
