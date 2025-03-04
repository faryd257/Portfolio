import "./Sobre-Mi.css";


const SobreMi = () => {
  return (
    <section className="sobre-mi-section text-white py-5">
      {/* Sección principal de "Sobre mí", centrada */}
      <div className="container text-center">
        <h2 className="display-4 mb-4">Sobre mí</h2>
        <p className="sobre-mi-parrafo">
          ¡Hola! Soy <strong>Faryd Ignacio Tupak Ortiz Abalos</strong>, 
          desarrollador Front End con un toque creativo. Me dedico a diseñar 
          interfaces atractivas y funcionales que mejoren la experiencia de 
          usuario. Disfruto trabajar en equipo, compartir ideas y aprender 
          continuamente para llevar cada proyecto al siguiente nivel.
        </p>
        <p className="sobre-mi-parrafo mt-4">
          Gracias por tomarse el tiempo de leer sobre mí. 
          ¡Espero que pronto podamos trabajar juntos y crear soluciones memorables!
        </p>
      </div>

      {/* Sección para el CV, margen adicional y alineada a la izquierda */}
      <div className="container mt-5 text-start">
        <div className="row justify-content-start">
          <div className="col-md-8">
            <h3 className="cv-header mb-3">
              A continuación te dejo mi CV para que puedas conocer más sobre mi trayectoria.
            </h3>
            
            <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
              En él encontrarás detalles acerca de mi formación, proyectos en los que he participado 
              y las habilidades que he desarrollado a lo largo de mi carrera.
            </p>
            
            <a
              href="/Faryd_Ortiz_2025_Profesional.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              style={{
                fontSize: "1.25rem",
                color: "#fff",
                backgroundColor: "#007bff",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
              }}
            >
              Ver mi CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SobreMi };
