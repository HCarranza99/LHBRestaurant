import { menuItems } from "../data/menuItems.js";
import { news } from "../data/promotions.js";

export default function MenuPreview() {
  return (
    <>
      <section className="section menu-preview">
        <div className="container menu-preview-grid">
          <div className="section-copy" data-reveal>
            <p className="eyebrow">Carta de la casa</p>
            <h2>Un menú amplio, curado para disfrutar sin prisa</h2>
            <p>
              Desde ceviches frescos hasta pastas con mariscos, cada categoria
              mantiene el espíritu abundante y cercano de La Hola Betos.
            </p>
          </div>
          <div className="menu-list" data-reveal>
            {menuItems.map((group) => (
              <article key={group.category}>
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section news-section">
        <div className="container">
          <div className="section-heading split" data-reveal>
            <div>
              <p className="eyebrow">Novedades</p>
              <h2>Qué hay de nuevo</h2>
            </div>
            <a className="btn btn-outline" href="#contacto">
              Ver todo
            </a>
          </div>
          <div className="news-grid">
            {news.map((item) => (
              <article className="news-card" key={item.title} data-reveal>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
