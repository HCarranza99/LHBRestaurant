import { dishes } from "../data/dishes.js";

export default function FeaturedDishes() {
  return (
    <section className="section featured-section" id="menus">
      <div className="container">
        <div className="section-heading center" data-reveal>
          <p className="eyebrow">Nuestros menús</p>
          <h2>Platos con frescura, técnica y memoria</h2>
          <p>
            Una selección de sabores reconocidos por la casa, reinterpretados con
            una presentación limpia y contemporánea.
          </p>
        </div>
        <div className="dish-grid">
          {dishes.map((dish) => (
            <article className="dish-card" key={dish.id} data-reveal>
              <div className="dish-media">
                <img src={dish.image} alt={dish.name} />
              </div>
              <div className="dish-card-content">
                <span className="pill">{dish.label}</span>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <a href="#contacto">Ver menú completo</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
