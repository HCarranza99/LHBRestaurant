export default function MobileDock() {
  return (
    <nav className="mobile-dock" aria-label="Acciones rápidas">
      <a href="#menus">Menú</a>
      <a href="#sucursales">Sucursales</a>
      <a className="dock-call" href="tel:+50322790781">
        Llamar
      </a>
    </nav>
  );
}
