import { experience, skills } from "../data";

export function About() {
  return (
    <section className="about section-shell" id="about">
      <div className="about-story reveal">
        <div className="section-marker"><span>01</span><i /> About</div>
        <h2>Before I managed distributed systems, I managed dinner rushes<span>.</span></h2>
        <p className="about-lede">The same instinct still applies: stay calm, find the bottleneck, keep the system moving.</p>
        <p className="about-body">Hospitality taught me how to communicate under pressure, prioritize what matters, and keep people aligned. Those are the same skills I bring to building and operating reliable software systems.</p>
        <div className="language-line"><span>Languages</span><b>English</b><i>/</i><b>Français</b><i>/</i><b lang="ar">العربية</b></div>
      </div>

      <div className="about-detail">
        <div className="experience reveal">
          <div className="section-marker"><span>02</span><i /> Experience</div>
          {experience.map((item) => (
            <article className="experience-row" key={item.place}>
              <strong>{item.index}</strong>
              <div><h3>{item.place}</h3><p>{item.role}</p><time>{item.date}</time></div>
              <p>{item.note}</p>
            </article>
          ))}
        </div>

        <div className="skills reveal" id="stack">
          <div className="section-marker"><span>03</span><i /> Technical stack</div>
          <div className="skill-field">
            {skills.map((skill, index) => (
              <span key={skill}>{skill}{index < skills.length - 1 ? <i>/</i> : null}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
