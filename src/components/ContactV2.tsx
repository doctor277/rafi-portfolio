import { ArrowUpRight, Check, Copy, Download, Github, Linkedin, MapPin } from "lucide-react";
import { useState } from "react";

const email = "dahoui.rafi27@gmail.com";

export function ContactV2() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const fallback = document.createElement("textarea");
      fallback.value = email;
      fallback.setAttribute("readonly", "");
      fallback.style.position = "fixed";
      fallback.style.opacity = "0";
      document.body.appendChild(fallback);
      fallback.select();
      document.execCommand("copy");
      fallback.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="contact section-shell" id="contact">
      <div className="contact-head reveal">
        <h2>Let&apos;s talk<span>.</span></h2>
        <div className="contact-intro">
          <p>I&apos;m looking for backend, full-stack and platform roles: internships now, and new-grad positions after I graduate in April 2027.</p>
          <span className="availability"><i /> Open to internships and new-grad roles in Canada.</span>
        </div>
      </div>

      <div className="contact-action reveal">
        <a href={`mailto:${email}`} className="email-link"><ArrowUpRight /><span>{email}</span></a>
        <button type="button" onClick={copyEmail} aria-label={copied ? "Email copied" : "Copy email address"}>
          {copied ? <Check /> : <Copy />}<span>{copied ? "Copied" : "Copy email"}</span>
        </button>
      </div>

      <div className="contact-links reveal">
        <a href="https://github.com/doctor277" target="_blank" rel="noreferrer"><Github /> GitHub <ArrowUpRight /></a>
        <a href="https://linkedin.com/in/rafi-dahoui" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ArrowUpRight /></a>
        <a href="./Rafi-Dahoui-CV.pdf" download><Download /> Download CV <ArrowUpRight /></a>
      </div>

      <div className="location-line"><span><MapPin /> Montréal, Québec / Eastern time</span></div>

      <footer className="footer">
        <div><b>Rafi Dahoui</b><span>Built with React and Vite.</span></div>
        <div className="footer-wordmark" aria-hidden="true"><span>Rafi</span><i>/</i><span>Dahoui</span></div>
      </footer>
    </section>
  );
}
