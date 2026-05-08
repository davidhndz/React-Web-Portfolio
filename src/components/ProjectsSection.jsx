import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/portfolioData';

/** GitHub SVG icon — inlined so there's no extra icon-library dependency. */
function GitHubIcon() {
  return (
    <svg
      className="github-icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c.99.005 1.987.138 2.997.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.769.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

/**
 * ProjectCard
 * Renders a single project with image, bullet points, skill badges, and a GitHub link.
 */
function ProjectCard({ project }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`project-card ${project.animation}`}>
      <div
        className="project-img"
        style={{
          backgroundImage: `url('${project.img}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="project-content">
        <div className="project-title">
          <h1>{project.title}</h1>
        </div>
        <div className="project-text">
          <ul>
            {project.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="project-skills">
          {project.skills.map((skill, i) => (
            <span key={i} className="badge">{skill}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer">
            <GitHubIcon />
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * ProjectsSection
 * Renders the "Portfolio" heading and all ProjectCard instances.
 */
export default function ProjectsSection() {
  return (
    <>
      <h2 id="projects" className="section-title">Projects</h2>
      <div className="hero-projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
