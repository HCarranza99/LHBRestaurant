import { useEffect, useState } from "react";
import { menuPdfUrl } from "../data/links.js";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Menús", href: menuPdfUrl, external: true },
  { label: "Sucursales", href: "#sucursales" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar container" aria-label="Navegación principal">
        <a className="brand" href="#inicio" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">LH</span>
          <span>
            <strong>La H'ola Restaurantes</strong>
            <small>Mariscos & Pastas</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-panel ${isOpen ? "is-open" : ""}`}>
          <div className="nav-kicker">
            <span>Zona Rosa y Costa del Sol</span>
            <strong>Una carta costera para compartir.</strong>
          </div>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a className="btn btn-small btn-accent" href="#contacto" onClick={() => setIsOpen(false)}>
            Reservar
          </a>
        </div>
      </nav>
    </header>
  );
}
