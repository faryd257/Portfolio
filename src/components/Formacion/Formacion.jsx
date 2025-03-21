import React, { useState } from "react";
import { useSelector } from "react-redux";
import { textos } from "../../utils/textos";
import "./Formacion.css";

const Formacion = () => {
  const idioma = useSelector(state => state.ui.idioma);
  const modoClaro = useSelector(state => state.ui.modoClaro);
  const texto = textos[idioma].formacion;

  const certificados = [
    {
      id: 1,
      titulo: texto.certificados[0].titulo,
      descripcion: texto.certificados[0].descripcion,
      imagen: "/certificados/front-inicial.png",
    },
    {
      id: 2,
      titulo: texto.certificados[1].titulo,
      descripcion: texto.certificados[1].descripcion,
      imagen: "/certificados/2-JavaScript.png",
    },
    {
      id: 3,
      titulo: texto.certificados[2].titulo,
      descripcion: texto.certificados[2].descripcion,
      imagen: "/certificados/2.png",
    },
    {
      id: 4,
      titulo: texto.certificados[3].titulo,
      descripcion: texto.certificados[3].descripcion,
      imagen: "/certificados/WordPress4.png",
    },
    {
      id: 5,
      titulo: texto.certificados[4].titulo,
      descripcion: texto.certificados[4].descripcion,
      imagen: "/certificados/5.png",
    },
    {
      id: 6,
      titulo: texto.certificados[5].titulo,
      descripcion: texto.certificados[5].descripcion,
      imagen: "/certificados/6.png",
    },
    {
      id: 7,
      titulo: texto.certificados[6].titulo,
      descripcion: texto.certificados[6].descripcion,
      imagen: "/certificados/7.png",
    },
    {
      id: 8,
      titulo: texto.certificados[7].titulo,
      descripcion: texto.certificados[7].descripcion,
      imagen: "/certificados/Q.A.png",
    },
    {
      id: 9,
      titulo: texto.certificados[8].titulo,
      descripcion: texto.certificados[8].descripcion,
      imagen: "/certificados/8.png",
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  const handleSelectCert = (cert) => {
    setSelectedCert(cert);
  };

  return (
    <section className={`container my-5 certificaciones ${modoClaro ? 'light' : 'dark'}`}>
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="mb-3">{texto.titulo}</h2>
          <p className="lead">{texto.descripcion}</p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12 text-center">
          <h5 className="mb-3">{texto.indicacion}</h5>
          <button
            className="btn btn-outline-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCertificados"
            aria-controls="offcanvasCertificados"
          >
            <span className="navbar-toggler"></span> {texto.menuBoton}
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
          <h5 id="offcanvasCertificadosLabel">{texto.menuTitulo}</h5>
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
            <p className="text-center">{texto.placeholder}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export { Formacion };
