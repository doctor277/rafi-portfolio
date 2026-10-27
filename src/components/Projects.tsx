import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import { LaunchGuardVisual, MaVilleVisual, PotholeVisual, ResearchVisual } from "./Visuals";

const visualMap = {
  launchguard: LaunchGuardVisual,
  pothole: PotholeVisual,
  research: ResearchVisual,
  maville: MaVilleVisual,
};

export function Projects() {
  return (
    <section className="projects section-shell" id="work">
      <div className="section-intro reveal">
        <h2>Selected systems</h2>
        <p>Real problems. Practical systems. A continuous practice in better software.</p>
      </div>

      <div className="project-list">
        {projects.map((project) => {
          const Visual = visualMap[project.visual];
          return (
            <article className={`project project-${project.visual} reveal`} key={project.name}>
              <div className="project-index">{project.index}</div>
              <div className="project-copy">
                <span className="project-category">{project.category}</span>
                <h3>{project.name}</h3>
                <p className="project-short">{project.short}</p>
                <p className="project-description">{project.description}</p>
                <div className="stack-line">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <p className="project-proof">{project.proof}</p>
                {project.source ? (
                  <a className="source-link" href={project.source} target="_blank" rel="noreferrer">
                    View source <ArrowUpRight size={17} />
                  </a>
                ) : <span className="source-link source-static">Team project / private source</span>}
              </div>
              <div className="project-visual"><Visual /></div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
