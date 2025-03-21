import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { textos } from '../../utils/textos';
import './Muestra.css';

const Muestra = () => {
  const navigate = useNavigate();
  const idioma = useSelector((state) => state.ui.idioma);
  const modoClaro = useSelector((state) => state.ui.modoClaro);

  const texto = textos[idioma].muestra;

  const proyectos = [
    {
      id: 1,
      titulo: texto.proyecto1.titulo,
      urlImg: '/muestras/cerveceria.png',
      descripcion: texto.proyecto1.descripcion,
      demoLink: 'https://cerveceria-nu.vercel.app/',
      codigoLink: 'https://github.com/faryd257/cerveceria'
    },
    {
      id: 2,
      titulo: texto.proyecto2.titulo,
      urlImg: '/muestras/tienda.png',
      descripcion: texto.proyecto2.descripcion,
      demoLink: 'https://productos-xi.vercel.app/',
      codigoLink: 'https://github.com/faryd257/trabajo-practico-2-react'
    },
    {
      id: 3,
      titulo: texto.proyecto3.titulo,
      urlImg: '/muestras/historia2.png',
      descripcion: texto.proyecto3.descripcion,
      demoLink: 'https://programacion-e-historia.vercel.app/',
      codigoLink: 'https://github.com/faryd257/html-css-y-javascript-avanzado'
    },
    {
      id: 4,
      titulo: texto.proyecto4.titulo,
      urlImg: '/muestras/portfolio.png',
      descripcion: texto.proyecto4.descripcion,
      demoLink: 'https://ejemplo-portfolio.com',
      codigoLink: 'https://github.com/faryd257/Portfolio'
    },
  ];

  const handleNavigation = (id) => {
    navigate(`/proyecto/${id}`);
  };

  return (
    <div className={`muestra-container ${modoClaro ? 'light' : 'dark'}`}>
      <h1 className="text-center mb-4">{texto.titulo}</h1>

      <div className="row row-cols-1 row-cols-md-2 justify-content-center">
        {proyectos.map(({ id, titulo, urlImg, descripcion, demoLink, codigoLink }) => (
          <div className="col" key={id}>
            <div className="card h-100" onClick={() => handleNavigation(id)} style={{ cursor: 'pointer' }}>
              <img
                src={urlImg}
                className="card-img-top"
                alt={titulo}
                loading="lazy"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{titulo}</h5>
                <p className="card-text">{descripcion}</p>

                <div className="mt-auto d-flex justify-content-around">
                  <a
                    href={demoLink}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Evita la navegación al hacer clic en los botones
                  >
                    {texto.verDemo}
                  </a>
                  <a
                    href={codigoLink}
                    className="btn btn-outline-light"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {texto.verCodigo}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/")} className="btn btn-secondary mt-3">
        Volver al Inicio
      </button>
    </div>
  );
};

export { Muestra };
