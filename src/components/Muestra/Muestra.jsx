import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Muestra.css';

const Muestra = () => {
  const navigate = useNavigate();
  
  const proyectos = [
    {
      id: 1,
      titulo: 'Proyecto 1',
      urlImg: '/muestras/cerveceria.png',
      descripcion: 'Sitio web para una cervecería artesanal, con menú interactivo y sistema de reservas.',
      demoLink: 'https://cerveceria-nu.vercel.app/', 
      codigoLink: 'https://github.com/usuario/cerveceria-project'
    },
    {
      id: 2,
      titulo: 'Proyecto 2',
      urlImg: '/muestras/historia2.png',
      descripcion: 'Landing page para un evento histórico, con secciones de cronología y galería de fotos.',
      demoLink: 'https://programacion-e-historia.vercel.app/ ',
      codigoLink: 'https://github.com/usuario/historia2'
    },
    {
      id: 3,
      titulo: 'Proyecto 3',
      urlImg: '/muestras/tienda.png',
      descripcion: 'E-commerce de productos con carrito de compras, pasarela de pagos y panel de administrador.',
      demoLink: 'https://productos-xi.vercel.app/',
      codigoLink: 'https://github.com/usuario/tienda'
    },
    {
      id: 4,
      titulo: 'Proyecto 4',
      urlImg: '/muestras/portfolio.png',
      descripcion: 'Mi portafolio personal con secciones de proyectos, blog y contacto.',
      demoLink: 'https://ejemplo-portfolio.com',
      codigoLink: 'https://github.com/usuario/portfolio'
    },
  ];

  const handleClick = () => {
    // Ejemplo: redirigir a tu ruta de proyectos detallados
    navigate('/');
  };

  return (
    <div className="muestra-container">
      <h1 className="text-center mb-4">Aquí mostraré mis proyectos</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        {proyectos.map(({ id, titulo, urlImg, descripcion, demoLink, codigoLink }) => (
          <div className="col" key={id}>
            <div className="card h-100" onClick={handleClick}>
              <img
                src={urlImg}
                className="card-img-top"
                alt={titulo}
                loading="lazy"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                {/* Botones de Demo y Código */}
                <div className="mt-auto d-flex justify-content-around">
                  <a
                    href={demoLink}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Demo
                  </a>
                  <a
                    href={codigoLink}
                    className="btn btn-outline-light"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Muestra };
