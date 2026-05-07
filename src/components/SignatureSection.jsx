const signatures = [
  {
    name: "Ceviche Hawaiano",
    mood: "Dulce tropical",
    description: "Pescado, piña, coco, plátano y especias La Hola.",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=82",
  },
  {
    name: "Super Hola",
    mood: "Intenso marino",
    description: "Con todos los mariscos y exquisito jugo de concha.",
    image:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1200&q=82",
  },
  {
    name: "Pasta con mariscos",
    mood: "Cremoso y abundante",
    description: "Pasta de la casa con carácter costero y mesa generosa.",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=82",
  },
];

export default function SignatureSection() {
  return (
    <section className="section signature-section" id="firma">
      <div className="container">
        <div className="signature-intro" data-reveal>
          <p className="eyebrow">La firma de la casa</p>
          <h2>Sabores que no se piden por antojo, se recuerdan.</h2>
        </div>

        <div className="signature-showcase">
          {signatures.map((dish, index) => (
            <article className="signature-card" key={dish.name} data-reveal>
              <img src={dish.image} alt={dish.name} />
              <div className="signature-content">
                <span>0{index + 1}</span>
                <p>{dish.mood}</p>
                <h3>{dish.name}</h3>
                <small>{dish.description}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
