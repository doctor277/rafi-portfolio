import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import { LaunchGuardVisual, PotholeVisual } from "./Visuals";

const featuredVisuals = [LaunchGuardVisual, PotholeVisual];

export function ProjectsV2() {
  const featured = projects.slice(0, 2);
  const supporting = projects.slice(2);

  return (
    <section className="projects section-shell" id="work">
      <header className="work-heading reveal">
        <h2>Selected work</h2>
        <p>Systems designed for reliability, usefulness, and real-world constraints.</p>
      </header>

      <div className="featured-work">
        {featured.map((project, index) => {
          const Visual = featuredVisuals[index];
          return (
            <article className={`case-study ${index % 2 ? "case-study-reverse" : ""} reveal`} key={project.name}>
              <div className="case-copy">
                <div className="case-meta"><span>{project.index}</span><i /><b>{project.category}</b></div>
                <h3>{project.name}</h3>
                <p className="case-headline">{project.short}</p>
                <p className="case-description">{project.description}</p>
                <div className="proof-rail" aria-label="Project highlights">
                  {project.proof.split(" · ").map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="case-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                {project.source ? (
                  <a className="source-link" href={project.source} target="_blank" rel="noreferrer">
                    View source <ArrowUpRight size={17} />
                  </a>
                ) : null}
              </div>
              <div className="case-visual"><Visual /></div>
            </article>
          );
        })}
      </div>

      <div className="supporting-work reveal">
        <div className="supporting-label"><span>Additional work</span><p>Research infrastructure and collaborative city software.</p></div>
        {supporting.map((project) => (
          <article className="supporting-project" key={project.name}>
            <span className="supporting-index">{project.index}</span>
            <div><small>{project.category}</small><h3>{project.name}</h3></div>
            <p>{project.short}<br /><em>{project.proof}</em></p>
            <ArrowRight aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}
