export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="waterlight" aria-hidden="true" />
      <div className="container hero-content" data-reveal>
        <p className="eyebrow">El Salvador, Centroamérica</p>
        <h1>
          <span>Sabores del mar</span>
          <span>desde hace más</span>
          <span>de 30 años</span>
        </h1>
        <p className="hero-copy">
          La H'ola Restaurantes es una cadena especializada en mariscos y
          pastas, reconocida por sus recetas originales, frescura y tradición.
        </p>
        <div className="hero-actions">
          <a className="btn btn-accent" href="#firma">
            Ver Especialidades
          </a>
          <a className="btn btn-ghost" href="#sucursales">
            Encontrar sucursal
          </a>
        </div>
      </div>
      <div className="hero-reserve" data-reveal>
        <span>Ritual La H'ola</span>
        <strong>Frescura del mar, mesa generosa y recetas originales.</strong>
      </div>
      <div className="hero-tokens container" aria-label="Sellos de marca" data-reveal>
        <span>30+ años</span>
        <span>Recetas originales</span>
        <span>Mariscos & pastas</span>
      </div>
    </section>
  );
}
