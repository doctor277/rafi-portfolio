import { ArrowRight } from "lucide-react";
import { capabilities, experience } from "../data";

export function AboutV2() {
  return (
    <section className="about" id="about">
      <div className="about-intro section-shell reveal">
        <div className="about-title">
          <div className="section-marker"><span>01</span><i /> About</div>
          <h2>Calm under pressure.<br />Precise in the system<span>.</span></h2>
        </div>
        <div className="about-copy">
          <p>Hospitality taught me to communicate clearly, prioritize what matters, and keep people aligned when the pace gets intense. I bring the same discipline to designing and operating reliable software.</p>
          <p className="education-line">Computer science at Université de Montréal — expected 2027.</p>
          <div className="language-line"><span>Languages</span><b>English</b><i>/</i><b>Français</b><i>/</i><b lang="ar">العربية</b></div>
        </div>
      </div>

      <div className="capabilities section-shell" id="capabilities">
        <header className="capabilities-head reveal">
          <div className="section-marker"><span>02</span><i /> Capabilities</div>
          <p>Tools and judgment for turning real problems into dependable software.</p>
        </header>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability reveal" key={capability.title}>
              <span className="capability-index">{capability.index}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <ul>{capability.tools.map((tool) => <li key={tool}><ArrowRight size={16} />{tool}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>

      <div className="experience section-shell">
        <header className="experience-head reveal">
          <div className="section-marker"><span>03</span><i /> Experience</div>
          <p>People. Ownership. Progress.</p>
        </header>
        <div className="experience-track reveal">
          {experience.slice().reverse().map((item) => (
            <article className="experience-item" key={item.place}>
              <i aria-hidden="true" />
              <time>{item.date}</time>
              <h3>{item.place}</h3>
              <strong>{item.role}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
