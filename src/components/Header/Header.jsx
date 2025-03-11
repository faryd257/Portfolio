// Header.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const irAlEspacio = () => {
    if (location.pathname === "/") {
      const seccionEspacio = document.getElementById("espacio");
      if (seccionEspacio) {
        seccionEspacio.scrollIntoView({ behavior: "smooth" });
      }
      cerrarMenu();
    } else {
      navigate("/#espacio");
      cerrarMenu();
    }
  };

  const irASobreMi = () => {
    if (location.pathname === "/") {
      const seccionSobreMi = document.getElementById("sobreMi");
      if (seccionSobreMi) {
        seccionSobreMi.scrollIntoView({ behavior: "smooth" });
      }
      cerrarMenu();
    } else {
      navigate("/#sobreMi");
      cerrarMenu();
    }
  };

  const irAProyectos = () => {
    if (location.pathname === "/") {
      const seccionProyectos = document.getElementById("proyectos");
      if (seccionProyectos) {
        seccionProyectos.scrollIntoView({ behavior: "smooth" });
      }
      cerrarMenu();
    } else {
      navigate("/#proyectos");
      cerrarMenu();
    }
  };

  const irAFormacion = () => {
    if (location.pathname === "/") {
      const seccionFormacion = document.getElementById("formacion");
      if (seccionFormacion) {
        seccionFormacion.scrollIntoView({ behavior: "smooth" });
      }
      cerrarMenu();
    } else {
      navigate("/#formacion");
      cerrarMenu();
    }
  };

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <a
        href="https://www.linkedin.com/in/faryd-ignacio-ortiz/"
        target="_blank"
        rel="noopener noreferrer"
        className="perfil"
      >
        <img src="/profile.png" alt="Mi perfil de LinkedIn" />
      </a>

      <button
        className="menu-icono"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰
      </button>

      <nav className={menuAbierto ? "menu abierto" : "menu"}>
        <ul>
          <li>
            <button className="btn-enlace" onClick={irAlEspacio}>
              inicio
            </button>
          </li>
          <li>
            <button className="btn-enlace" onClick={irASobreMi}>
              Sobre Mi
            </button>
          </li>
          <li>
            <button className="btn-enlace" onClick={irAProyectos}>
              Proyectos
            </button>
          </li>

          <li>
            <button className="btn-enlace" onClick={irAFormacion}>
              Formación
            </button>
          </li>

          <li>
            <Link to="/Contacto" onClick={cerrarMenu}>
              Contacto
            </Link>
          </li>
        </ul>

        {menuAbierto && (
          <button className="cerrar-menu" onClick={cerrarMenu}>
            Cerrar
          </button>
        )}
      </nav>
    </header>
  );
};

export { Header };
