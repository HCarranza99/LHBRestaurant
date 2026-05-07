const ritualSteps = [
  {
    title: "Frescura del mar",
    text: "Ingredientes elegidos para mantener brillo, textura y sabor limpio.",
  },
  {
    title: "Recetas originales",
    text: "Preparaciones reconocibles, abundantes y con sello propio.",
  },
  {
    title: "Mesa generosa",
    text: "Platos pensados para compartir sin perder presentación.",
  },
  {
    title: "Servicio cercano",
    text: "Hospitalidad salvadoreña con ritmo de restaurante consolidado.",
  },
];

export default function RitualSection() {
  return (
    <section className="section ritual-section" id="ritual">
      <div className="container ritual-grid">
        <div className="section-copy" data-reveal>
          <p className="eyebrow">El ritual La Hola</p>
          <h2>El mar servido con memoria, frescura y carácter salvadoreño.</h2>
          <p>
            La experiencia se construye con detalles: producto fresco, recetas
            de la casa, mesa amplia y una atención que acompaña sin invadir.
          </p>
        </div>

        <div className="ritual-timeline" data-reveal>
          {ritualSteps.map((step, index) => (
            <article key={step.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
