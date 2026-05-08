import { menuPdfUrl } from "../data/links.js";

export default function MobileDock() {
  return (
    <nav className="mobile-dock" aria-label="Acciones rápidas">
      <a href={menuPdfUrl} target="_blank" rel="noreferrer">
        Menú
      </a>
      <a href="#sucursales">Sucursales</a>
      <a className="dock-call" href="tel:+50322236865">
        Llamar
      </a>
    </nav>
  );
}
