import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand-wordmark" href="#top" aria-label="Rafi Dahoui — home">
        <span>Rafi</span>
        <i aria-hidden="true">/</i>
        <span>Dahoui</span>
      </a>

      <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Let&apos;s talk <ArrowUpRight size={16} strokeWidth={1.6} />
        </a>
      </nav>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <div className="scroll-progress" aria-hidden="true" />
    </header>
  );
}
