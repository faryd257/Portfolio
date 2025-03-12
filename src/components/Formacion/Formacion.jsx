import React, { useState } from "react";
import "./Formacion.css";

const Formacion = () => {
  const certificados = [
    {
      id: 1,
      titulo: "Certificado de Front-End",
      descripcion: "Curso de Desarrollo Front-End en [UTN].",
      imagen: "/certificados/front-inicial.png",
    },
    {
      id: 2,
      titulo: "Certificado de JavaScript",
      descripcion: "Curso de Desarrollo en JavaScript en [UTN].",
      imagen: "/certificados/2-JavaScript.png",
    },
    {
      id: 3,
      titulo: "Certificado de Html5 y Css3",
      descripcion: "Curso de Desarrollo web en Html5 y Css3 en [UTN].",
      imagen: "/certificados/2.png",
    },
    {
      id: 4,
      titulo: "Certificado de WordPress",
      descripcion: "Curso de Diseño Web con WordPress en [UTN].",
      imagen: "/certificados/WordPress4.png",
    },
    {
      id: 5,
      titulo: "Certificado de Html5  Css3 y JavaScript",
      descripcion: "Curso de Html5  Css3 y JavaScript (Nivel Avanzado) en [UTN].",
      imagen: "/certificados/5.png",
    },
    {
      id: 6,
      titulo: "Certificado de Bootstrap",
      descripcion: "Curso de Desarrollo web en Bootstrap en [UTN].",
      imagen: "/certificados/6.png",
    },
    {
      id: 7,
      titulo: "Professional Front End Developer",
      descripcion: "Curso de Professional Front End Developer [UTN].",
      imagen: "/certificados/7.png",
    },
    {
      id: 8,
      titulo: "Certificado de Quality Assurance",
      descripcion: "Curso de Quality Assurance en [LinkedIn].",
      imagen: "/certificados/Q.A.png",
    },
    {
      id: 9,
      titulo: "Certificado de React JS",
      descripcion: "Curso de Desarrollo en React JS en [UTN].",
      imagen: "/certificados/8.png",
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  const handleSelectCert = (cert) => {
    setSelectedCert(cert);
  };

  return (
    <section className="container my-5 certificaciones">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="mb-3">Certificaciones</h2>
          <p className="lead">
            En esta sección podrás ver mi formación académica y profesional, así
            como un panorama de mis conocimientos en diferentes tecnologías.
          </p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12 text-center">
          <h5 className="mb-3">
            Selecciona una de mis certificaciones para verla en detalle:
          </h5>
          <button
            className="btn btn-outline-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCertificados"
            aria-controls="offcanvasCertificados"
          >
            <span className="navbar-toggler"></span> Menú de Certificados
          </button>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasCertificados"
        aria-labelledby="offcanvasCertificadosLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasCertificadosLabel">Selecciona un Certificado</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Cerrar"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            {certificados.map((cert) => (
              <li
                className="list-group-item list-group-item-action"
                key={cert.id}
              >
                <button
                  className="btn btn-link text-decoration-none"
                  onClick={() => handleSelectCert(cert)}
                  data-bs-dismiss="offcanvas"
                >
                  {cert.titulo}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          {selectedCert ? (
            <div
              className="card certificado-card dynamic-card"
              style={{ maxWidth: "800px", width: "100%" }}
            >
              <img
                src={selectedCert.imagen}
                className="card-img-top dynamic-img"
                alt={selectedCert.titulo}
              />
              <div className="card-body text-background">
                <h5 className="card-title">{selectedCert.titulo}</h5>
                <p className="card-text">{selectedCert.descripcion}</p>
              </div>
            </div>
          ) : (
            <p className="text-center">
              Selecciona un certificado del menú para visualizarlo.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export { Formacion };
