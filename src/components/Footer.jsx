import { menuPdfUrl } from "../data/links.js";

const links = [
  ["Inicio", "#inicio"],
  ["Quiénes somos", "#quienes-somos"],
  ["Menús", menuPdfUrl, true],
  ["Sucursales", "#sucursales"],
  ["Promociones", "#promociones"],
  ["Contacto", "#contacto"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="#inicio">
            <span className="brand-mark">LH</span>
            <span>
              <strong>La H'ola Restaurantes</strong>
              <small>Mariscos & Pastas</small>
            </span>
          </a>
          <p>Mariscos y pastas desde hace más de 30 años.</p>
        </div>
        <div>
          <h3>Links rapidos</h3>
          <ul>
            {links.map(([label, href, external]) => (
              <li key={href}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contacto</h3>
          <ul>
            <li>
              <a href="tel:+50322236865">(503) 2223-6865</a>
            </li>
            <li>
              <a href="https://www.laholarestaurantes.com" target="_blank" rel="noreferrer">
                laholarestaurantes.com
              </a>
            </li>
            <li>Zona Rosa y Costa del Sol, El Salvador</li>
          </ul>
        </div>
        <div>
          <h3>Redes</h3>
          <div className="social-links">
            <a href="#inicio" aria-label="Facebook">
              Fb
            </a>
            <a href="#inicio" aria-label="Instagram">
              Ig
            </a>
            <a href="#inicio" aria-label="TikTok">
              Tk
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 La H'ola Restaurantes. Todos los derechos reservados.</span>
        <span>Rediseño conceptual premium.</span>
      </div>
    </footer>
  );
}
