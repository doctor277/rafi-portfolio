import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import { PotholeVisual } from "./Visuals";

export function ProjectsV2() {
  return (
    <section className="projects section-shell" id="work">
      <header className="work-heading reveal">
        <h2>Selected work</h2>
        <p>Three projects I built on my own. The source code is public for all of them.</p>
      </header>

      <div className="featured-work">
        {projects.map((project, index) => (
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
            <div className="case-visual">
              {project.image ? (
                <figure className="project-shot">
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    loading="lazy"
                  />
                  {project.image.caption ? <figcaption>{project.image.caption}</figcaption> : null}
                </figure>
              ) : (
                <PotholeVisual />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
