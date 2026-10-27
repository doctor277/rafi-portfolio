import { ArrowUpRight, Check, Copy, Download, Github, Linkedin, MapPin } from "lucide-react";
import { useState } from "react";

const email = "rafi.dahoui@umontreal.ca";

export function Contact() {
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
        <h2>Bring me the<br />messy problem<span>.</span></h2>
        <p>If it involves reliability, useful software, or turning a complicated system into something people can trust, I want to hear about it.</p>
      </div>

      <div className="contact-action reveal">
        <a href={`mailto:${email}`} className="email-link"><ArrowUpRight /><span>{email}</span></a>
        <button type="button" onClick={copyEmail} aria-label={copied ? "Email copied" : "Copy email address"}>
          {copied ? <Check /> : <Copy />}<span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      <div className="contact-links reveal">
        <a href="https://github.com/doctor277" target="_blank" rel="noreferrer"><Github /> GitHub <ArrowUpRight /></a>
        <a href="https://linkedin.com/in/rafi-dahoui" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ArrowUpRight /></a>
        <a href="./Rafi-Dahoui-CV.pdf" download><Download /> Download CV <ArrowUpRight /></a>
      </div>

      <div className="location-line"><span><MapPin /> Montréal, Québec</span><span><i /> Eastern time</span></div>

      <footer className="footer">
        <div><b>Rafi Dahoui</b><span>Built with care, tested under pressure.</span></div>
        <div className="footer-values"><span>Real problems</span><span>Practical solutions</span><span>Lasting impact</span></div>
        <div className="footer-wordmark" aria-hidden="true"><span>Rafi</span><i>/</i><span>Dahoui</span></div>
      </footer>
    </section>
  );
}
