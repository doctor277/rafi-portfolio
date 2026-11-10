import { ArrowRight } from "lucide-react";
import { capabilities, experience } from "../data";

export function AboutV2() {
  return (
    <section className="about" id="about">
      <div className="about-intro section-shell reveal">
        <div className="about-title">
          <div className="section-marker"><i /> About</div>
          <h2>Waiter, manager, developer<span>.</span></h2>
        </div>
        <div className="about-copy">
          <p>I&apos;ve worked in Montréal restaurants since 2021, first as a manager at Grillades Torino and now as a waiter at 3 Amigos. That&apos;s where I learned to stay calm when every table needs something at once, and to keep the people around me informed. I&apos;m finishing a computer science degree and building backend and full-stack projects on the side.</p>
          <p className="education-line">B.Sc. Computer Science, Université de Montréal. Graduating April 2027.</p>
          <div className="language-line"><span>Languages</span><b>English</b><i>/</i><b>Français</b><i>/</i><b lang="ar">العربية</b></div>
        </div>
      </div>

      <div className="capabilities section-shell" id="capabilities">
        <header className="capabilities-head reveal">
          <div className="section-marker"><i /> Capabilities</div>
          <p>What I use, and what I&apos;ve built with it.</p>
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
          <div className="section-marker"><i /> Experience</div>
          <p>Work and school</p>
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
