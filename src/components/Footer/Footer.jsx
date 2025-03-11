import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
       
        
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/faryd-ignacio-ortiz/" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
          <a href="https://github.com/faryd257/Portfolio" target="_blank" rel="noreferrer">
            <FaGithub className="icon" /> GitHub
          </a>
          <a href="mailto:OrtizFaryd.I.T@gmail.com">
            <FaEnvelope className="icon" /> Gmail
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Todos los derechos reservados.</p>
        <p>Portafolio creado por <strong>Faryd I.T. Ortiz Abalos</strong> | Construido en <strong>React.js</strong></p>
      </div>
    </footer>
  );
};

export { Footer };
