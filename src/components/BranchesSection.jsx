import { branches } from "../data/branches.js";

const phoneHref = (phone) => `tel:${phone.split("/")[0].replace(/[^\d+]/g, "")}`;

export default function BranchesSection() {
  return (
    <section className="section branches-section" id="sucursales">
      <div className="container">
        <div className="section-heading split" data-reveal>
          <div>
            <p className="eyebrow">Sucursales</p>
            <h2>Encuentra tu mesa en San Salvador</h2>
          </div>
          <p>
            Tres puntos clave para disfrutar mariscos, pastas y recetas
            originales en ambientes familiares, ejecutivos y de celebración.
          </p>
        </div>
        <div className="branch-grid">
          {branches.map((branch, index) => (
            <article className="branch-card" key={branch.id} data-reveal>
              <div>
                <span className="branch-number">0{index + 1}</span>
                <h3>{branch.name}</h3>
                <strong>{branch.mood}</strong>
              </div>
              <p>{branch.address}</p>
              <a className="branch-phone" href={phoneHref(branch.phone)}>
                {branch.phone}
              </a>
              <div className="branch-actions">
                <a className="btn btn-small btn-outline" href={branch.mapUrl} target="_blank" rel="noreferrer">
                  Cómo llegar
                </a>
                <a className="btn btn-small btn-dark" href={phoneHref(branch.phone)}>
                  Llamar
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="map-panel" data-reveal>
          <div>
            <p className="eyebrow">Mapa</p>
            <h3>San Salvador, El Salvador</h3>
            <p>
              Bloque preparado para insertar un iframe de Google Maps o un mapa
              propio con las ubicaciones de las sucursales.
            </p>
          </div>
          <a
            className="btn btn-accent"
            href="https://www.google.com/maps/search/?api=1&query=La+Hola+Betos+San+Salvador"
            target="_blank"
            rel="noreferrer"
          >
            Abrir mapa
          </a>
        </div>
      </div>
    </section>
  );
}
