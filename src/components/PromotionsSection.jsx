import { promotions } from "../data/promotions.js";

export default function PromotionsSection() {
  return (
    <section className="section promotions-section" id="promociones">
      <div className="container">
        <div className="section-heading center light" data-reveal>
          <p className="eyebrow">Promociones</p>
          <h2>Momentos especiales con sabor de costa</h2>
          <p>
            Propuestas realistas para activar temporada, mesas compartidas y
            platos de autor sin perder sobriedad.
          </p>
        </div>
        <div className="promo-grid">
          {promotions.map((promotion) => (
            <article className="promo-card" key={promotion.title} data-reveal>
              <span>{promotion.eyebrow}</span>
              <h3>{promotion.title}</h3>
              <p>{promotion.description}</p>
            </article>
          ))}
        </div>
        <div className="center-action" data-reveal>
          <a className="btn btn-accent" href="#contacto">
            Ver promociones
          </a>
        </div>
      </div>
    </section>
  );
}
