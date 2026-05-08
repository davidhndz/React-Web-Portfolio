import { personal } from '../data/portfolioData';

/**
 * ContactSection
 * Simple contact bar with GitHub, email, and LinkedIn links.
 */
export default function ContactSection() {
  return (
    <>
      <h2 id="contact" className="section-title">Contacts</h2>
      <div className="hero-contact">
        <div className="contact-list">
          <p>
            <a href={personal.github}  target="_blank" rel="noreferrer">"GitHub"</a>
            {' | '}
            <a href={`mailto:${personal.email}`}>"{personal.email}"</a>
            {' | '}
            <a href={personal.linkedin} target="_blank" rel="noreferrer">"LinkedIn"</a>
          </p>
        </div>
      </div>
    </>
  );
}
