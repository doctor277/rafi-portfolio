import { ArrowDown, Download } from "lucide-react";
import { SignalPanel } from "./Visuals";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <h1><span>Rafi</span><span>Dahoui</span></h1>
        <div className="hero-statement">
          <p>I build backend and full-stack software, and I test it.</p>
          <small>Computer science student at Université de Montréal, graduating in April 2027. Most of my work is in Java, TypeScript and Python.</small>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">View selected work <ArrowDown size={18} /></a>
          <a className="text-link" href="./Rafi-Dahoui-CV.pdf" download>Download CV <Download size={16} /></a>
        </div>
      </div>
      <SignalPanel />
      <div className="hero-rail">
        <span>Montréal, QC</span>
        <span>Java / TypeScript / Python</span>
        <span>Projects below ↓</span>
      </div>
    </section>
  );
}
