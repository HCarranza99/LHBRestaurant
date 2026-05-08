export default function ContactSection() {
  return (
    <section className="section contact-section" id="contacto">
      <div className="container contact-panel" data-reveal>
        <div>
          <p className="eyebrow">Contáctenos</p>
          <h2>Reserva, consulta horarios o encuentra tu sucursal más cercana.</h2>
          <p>
            Pedidos y consultas para Zona Rosa y Costa del Sol, abiertos todos
            los días de 10 am a 11 pm.
          </p>
        </div>
        <div className="contact-details">
          <a href="tel:+50322236865">(503) 2223-6865</a>
          <a href="tel:+50371889745">(503) 7188-9745</a>
          <a href="https://www.laholarestaurantes.com" target="_blank" rel="noreferrer">
            laholarestaurantes.com
          </a>
        </div>
        <div className="contact-actions">
          <a className="btn btn-accent" href="tel:+50322236865">
            Llamar ahora
          </a>
          <a className="btn btn-outline" href="https://www.laholarestaurantes.com" target="_blank" rel="noreferrer">
            Ver sitio
          </a>
          <a className="btn btn-ghost-dark" href="#sucursales">
            Ver sucursales
          </a>
        </div>
      </div>
    </section>
  );
}
