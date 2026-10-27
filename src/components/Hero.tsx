import { ArrowDown, Download } from "lucide-react";
import { SignalPanel } from "./Visuals";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <h1><span>Rafi</span><span>Dahoui</span></h1>
        <div className="hero-statement">
          <p>I build reliable software for problems that matter.</p>
          <small>Computer science student in Montréal building dependable backend systems, useful city tools, and carefully tested products.</small>
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
        <span>Scroll to investigate ↓</span>
      </div>
    </section>
  );
}
