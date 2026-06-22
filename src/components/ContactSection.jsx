import { personal } from '../data/portfolioData';

export default function ContactSection() {
  return (
    <div id="contact" className="contact-section">
      <p className="section-eyebrow">&gt; contact</p>
      <div className="contact-links">
        <a href={personal.github} target="_blank" rel="noreferrer" className="contact-link">
          <span className="contact-link-label">GitHub</span>
          <span className="contact-link-arrow">→</span>
        </a>
        <a href={`mailto:${personal.email}`} className="contact-link">
          <span className="contact-link-label">{personal.email}</span>
          <span className="contact-link-arrow">→</span>
        </a>
        <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-link">
          <span className="contact-link-label">LinkedIn</span>
          <span className="contact-link-arrow">→</span>
        </a>
      </div>
    </div>
  );
}
