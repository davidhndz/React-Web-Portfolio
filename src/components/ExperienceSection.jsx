import { experiences } from '../data/portfolioData';

function ExperienceEntry({ exp }) {
  return (
    <div className="exp-entry">
      <div className="exp-meta">
        <span className="exp-date">{exp.date}</span>
        <span className="exp-company">{exp.company}</span>
        <span className="exp-loc">{exp.location}</span>
      </div>
      <div className="exp-body">
        <p className="exp-role">{exp.title}</p>
        <ul className="exp-bullets">
          {exp.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
        <div className="tag-row">
          {exp.badges.map((badge, i) => (
            <span key={i} className="tag">{badge}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <div id="experience" className="exp-section">
      <p className="section-eyebrow">&gt; experience</p>
      {experiences.map((exp) => (
        <ExperienceEntry key={exp.id} exp={exp} />
      ))}
    </div>
  );
}
