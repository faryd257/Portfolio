import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="header">
      {/* Foto de perfil con enlace a LinkedIn */}
      <a href="https://www.linkedin.com/in/faryd-ignacio-ortiz/" target="_blank" rel="noopener noreferrer" className="perfil">
      <img src="/profile.png" alt="Mi perfil de LinkedIn" />

      </a>

      {/* Icono del menú en móvil */}
      <button className="menu-icono" onClick={() => setMenuAbierto(!menuAbierto)}>
        ☰
      </button>

      {/* Menú de navegación */}
      <nav className={menuAbierto ? "menu abierto" : "menu"}>
        <ul>
          <li><Link to="/" onClick={cerrarMenu}>Home</Link></li>
          <li><Link to="/Projects" onClick={cerrarMenu}>Projects</Link></li>
           <li><Link to="/Contacto" onClick={cerrarMenu}>Contacto</Link></li>
         
        </ul>

        {/* Botón para cerrar el menú SOLO en móviles */}
        {menuAbierto && (
          <button className="cerrar-menu" onClick={cerrarMenu}>Cerrar</button>
        )}
      </nav>
    </header>
  );
};

export { Header };
