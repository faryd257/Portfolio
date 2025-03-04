import "./Footer.css"; // Importa el CSS separado


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="my-footer">
      <div className="container text-center py-3">
        <p className="developer-info">
          Sitio desarrollado por{" "}
          <a
            href="https://www.linkedin.com/in/faryd-ignacio-ortiz/"
            target="_blank"
            rel="noreferrer"
            className="dev-link"
          >
            FARYD ORTIZ
          </a>
        </p>
        <p className="rights-info">&copy; {currentYear} Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export { Footer };
