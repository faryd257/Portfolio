import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";
import { textos } from "../../utils/textos";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const idioma = useSelector(state => state.ui.idioma);
  const modoClaro = useSelector(state => state.ui.modoClaro);
  const texto = textos[idioma].footer;

  return (
    <footer className={`footer-container ${modoClaro ? "light" : "dark"}`}>
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/faryd-ignacio-ortiz/" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon" /> {texto.linkedin}
          </a>
          <a href="https://github.com/faryd257/Portfolio" target="_blank" rel="noreferrer">
            <FaGithub className="icon" /> {texto.github}
          </a>
          <a href="mailto:OrtizFaryd.I.T@gmail.com">
            <FaEnvelope className="icon" /> {texto.gmail}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} {texto.derechos}</p>
        <p>{texto.creadoPor} <strong>Faryd I.T. Ortiz Abalos</strong> | {texto.construidoCon} <strong>React.js</strong></p>
      </div>
    </footer>
  );
};

export { Footer };
