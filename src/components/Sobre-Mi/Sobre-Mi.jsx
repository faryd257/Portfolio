import { useSelector } from 'react-redux';
import { textos } from "../../utils/textos";
import "./Sobre-Mi.css";

const SobreMi = () => {
  const idioma = useSelector(state => state.ui.idioma);
  const modoClaro = useSelector(state => state.ui.modoClaro);

  const textoSobreMi = textos[idioma].sobreMi;

  return (
    <section className={`sobre-mi-section ${modoClaro ? 'light' : 'dark'}`}>
      <div className="container text-center">
        <h2 className="sobre-mi-titulo">{textoSobreMi.titulo}</h2>
        <p className="sobre-mi-parrafo">
          {textoSobreMi.presentacion} <strong>Faryd Ignacio Tupak Ortiz Abalos</strong>, {textoSobreMi.descripcion}.
        </p>
        <p className="sobre-mi-parrafo">
          {textoSobreMi.agradecimiento}
        </p>

        <div className="cv-container">
          <h3 className="cv-header">
            {textoSobreMi.cvHeader}
          </h3>
          <p className="cv-descripcion">
            {textoSobreMi.cvDescripcion}
          </p>

          <a
            href="/Faryd_Ortiz_2025_Profesional.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn"
          >
            {textoSobreMi.verCv}
          </a>
        </div>
      </div>
    </section>
  );
};

export { SobreMi };
