import { useScrollReveal } from '../hooks/useScrollReveal';
import { experiences } from '../data/portfolioData';

/**
 * ExperienceCard
 * Renders a single work-experience entry.
 * The first card gets the green border; subsequent cards get the teal border
 * (handled via CSS — .experience-card ~ .experience-card).
 */
function ExperienceCard({ exp }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`experience-card ${exp.animation}`}>
      <div className="experience-title">
        <h1>
          <img src={exp.logo} alt={exp.logoAlt} />
          {exp.title}
        </h1>
      </div>
      <div className="experience-company">{exp.company}</div>
      <div className="experience-date">{exp.date}</div>
      <div className="experience-text">
        <ul>
          {exp.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </div>
      <div className="experience-technologies">
        {exp.badges.map((badge, i) => (
          <span key={i} className={`exp-badge exp-badge--${exp.badgeVariant}`}>
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * ExperienceSection
 * Renders the "Experience" heading and all ExperienceCard instances.
 */
export default function ExperienceSection() {
  return (
    <>
      <h2 id="experience" className="section-title">Experience</h2>
      <div className="hero-experience">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </>
  );
}
