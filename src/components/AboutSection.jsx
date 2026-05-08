export default function AboutSection() {
  const metrics = [
    "+30 años de experiencia",
    "Recetas originales",
    "Mariscos y pastas",
    "2 sucursales activas",
  ];

  return (
    <section className="section about-section" id="quienes-somos">
      <div className="container about-grid">
        <div className="about-image" data-reveal>
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
            alt="Mesa elegante de restaurante costero"
          />
        </div>
        <div className="section-copy" data-reveal>
          <p className="eyebrow">Quiénes somos</p>
          <h2>Tradición marina con carácter salvadoreño</h2>
          <p>
            La H'ola Restaurantes es una cadena con más de 30 años de
            experiencia en preparar exquisitas recetas originales de mariscos y
            pastas.
          </p>
          <div className="metric-grid" aria-label="Resumen de marca">
            {metrics.map((metric) => (
              <div className="metric-card" key={metric}>
                <span>{metric}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
