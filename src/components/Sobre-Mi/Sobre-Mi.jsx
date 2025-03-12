import "./Sobre-Mi.css";

const SobreMi = () => {
  return (
    <section className="sobre-mi-section text-white py-5">
      <div className="container text-center">
        <h2 className="sobre-mi-titulo">Sobre mí</h2>
        <p className="sobre-mi-parrafo">
          ¡Hola! Soy <strong>Faryd Ignacio Tupak Ortiz Abalos</strong>,
          desarrollador Front End con un toque creativo. Me dedico a diseñar
          interfaces atractivas y funcionales que mejoren la experiencia de
          usuario. Disfruto trabajar en equipo, compartir ideas y aprender
          continuamente para llevar cada proyecto al siguiente nivel.
        </p>
        <p className="sobre-mi-parrafo">
          Gracias por tomarte el tiempo de leer sobre mí. ¡Espero que pronto podamos trabajar juntos y crear soluciones memorables!
        </p>

        <div className="cv-container">
          <h3 className="cv-header">
            A continuación te dejo mi CV para que puedas conocer más sobre mi trayectoria.
          </h3>
          <p className="cv-descripcion">
            En él encontrarás detalles acerca de mi formación, proyectos en los que he trabajado y habilidades que he desarrollado.
          </p>

          <a
            href="/Faryd_Ortiz_2025_Profesional.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn"
          >
            Ver mi CV
          </a>
        </div>
      </div>
    </section>
  );
};

export { SobreMi };
