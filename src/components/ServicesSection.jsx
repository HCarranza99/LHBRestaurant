const services = [
  "Restaurante",
  "Eventos",
  "Comida para compartir",
  "Mariscos y pastas",
  "Atención familiar y corporativa",
];

export default function ServicesSection() {
  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-heading center" data-reveal>
          <p className="eyebrow">Nuestros servicios</p>
          <h2>Hospitalidad pensada para cada ocasión</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service} data-reveal>
              <span aria-hidden="true" />
              <h3>{service}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
