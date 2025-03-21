import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { cambiarIdioma, toggleModoClaro } from '../../redux/uiSlice';
import "./Header.css";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const idioma = useSelector(state => state.ui.idioma);
  const modoClaro = useSelector(state => state.ui.modoClaro); // 👈 ESTA LÍNEA FALTABA

  const cerrarMenu = () => setMenuAbierto(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const irASeccion = (id) => {
    if (location.pathname === "/") {
      const seccion = document.getElementById(id);
      seccion?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
    cerrarMenu();
  };

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""} ${modoClaro ? 'light' : 'dark'}`}>
      <a
        href="https://www.linkedin.com/in/faryd-ignacio-ortiz/"
        target="_blank"
        rel="noopener noreferrer"
        className="perfil"
      >
        <img src="/profile.png" alt="Mi perfil de LinkedIn" />
      </a>

      <button className="menu-icono" onClick={() => setMenuAbierto(!menuAbierto)}>
        ☰
      </button>

      <nav className={menuAbierto ? "menu abierto" : "menu"}>
        <ul>
          <li>
            <button className="btn-enlace" onClick={() => irASeccion('espacio')}>
              {idioma === 'es' ? 'Inicio' : 'Home'}
            </button>
          </li>
          <li>
            <button className="btn-enlace" onClick={() => irASeccion('sobreMi')}>
              {idioma === 'es' ? 'Sobre mí' : 'About Me'}
            </button>
          </li>
          <li>
            <button className="btn-enlace" onClick={() => irASeccion('proyectos')}>
              {idioma === 'es' ? 'Proyectos' : 'Projects'}
            </button>
          </li>
          <li>
            <button className="btn-enlace" onClick={() => irASeccion('formacion')}>
              {idioma === 'es' ? 'Formación' : 'Education'}
            </button>
          </li>
          <li>
            <Link to="/Contacto" onClick={cerrarMenu}>
              {idioma === 'es' ? 'Contacto' : 'Contact'}
            </Link>
          </li>
        </ul>

        <div className="botones-configuracion">
          <button className="btn-idioma" onClick={() => dispatch(cambiarIdioma())}>
            {idioma === 'es' ? 'English' : 'Español'}
          </button>

          <button className="btn-modo" onClick={() => dispatch(toggleModoClaro())}>
            {modoClaro ? (idioma === 'es' ? 'Modo Oscuro' : 'Dark Mode') : (idioma === 'es' ? 'Modo Claro' : 'Light Mode')}
          </button>
        </div>

        {menuAbierto && (
          <button className="cerrar-menu" onClick={cerrarMenu}>
            {idioma === 'es' ? 'Cerrar' : 'Close'}
          </button>
        )}
      </nav>
    </header>
  );
};

export { Header };
