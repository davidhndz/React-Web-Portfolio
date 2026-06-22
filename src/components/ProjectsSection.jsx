import { projects } from '../data/portfolioData';

function ProjectEntry({ project }) {
  return (
    <div className="proj-entry">
      <div className="proj-thumb">
        <span className="proj-emoji">{project.emoji}</span>
        <span className="proj-thumb-name">{project.title}</span>
      </div>
      <div className="proj-body">
        <p className="proj-index">{project.sublabel}</p>
        <p className="proj-name">{project.title}</p>
        <ul className="exp-bullets">
          {project.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="tag-row" style={{ marginBottom: '1rem' }}>
          {project.skills.map((skill, i) => (
            <span key={i} className="tag">{skill}</span>
          ))}
        </div>
        <a className="proj-link" href={project.github} target="_blank" rel="noreferrer">
          view on github →
        </a>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <div id="projects" className="proj-section">
      <p className="section-eyebrow">&gt; projects</p>
      {projects.map((project) => (
        <ProjectEntry key={project.id} project={project} />
      ))}
    </div>
  );
}
