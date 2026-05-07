export default function ContactSection() {
  return (
    <section className="section contact-section" id="contacto">
      <div className="container contact-panel" data-reveal>
        <div>
          <p className="eyebrow">Contáctenos</p>
          <h2>Reserva, consulta horarios o encuentra tu sucursal más cercana.</h2>
          <p>
            Blvd. del Hipódromo y Av. Las Magnolias No. 230, Col. San Benito,
            Zona Rosa, San Salvador, El Salvador.
          </p>
        </div>
        <div className="contact-details">
          <a href="tel:+50322790781">(503) 2279-0781</a>
          <a href="tel:+50322236865">(503) 2223-6865</a>
          <a href="tel:+50322450553">(503) 2245-0553</a>
          <a href="mailto:info@laholabetos.com">info@laholabetos.com</a>
        </div>
        <div className="contact-actions">
          <a className="btn btn-accent" href="tel:+50322790781">
            Llamar ahora
          </a>
          <a className="btn btn-outline" href="mailto:info@laholabetos.com">
            Enviar correo
          </a>
          <a className="btn btn-ghost-dark" href="#sucursales">
            Ver sucursales
          </a>
        </div>
      </div>
    </section>
  );
}
