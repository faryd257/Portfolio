import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from "../../components/Layout/Layout";
import './Projects.css'; // Archivo CSS personalizado para la página de Projects

const Projects = () => {
  const navigate = useNavigate();
  
  const proyectos = [
    {
      id: 1,
      titulo: 'Proyecto 1',
      urlImg: '/muestras/cerveceria.png',
      descripcion: 'Sitio web para una cervecería artesanal, con menú interactivo y sistema de reservas.',
      infoAdicional: 'Tecnologías: HTML, CSS, JavaScript, React. Fecha: Enero 2024. Características: Diseño responsive y animaciones interactivas.',
      demoLink: 'https://cerveceria-nu.vercel.app/', 
      codigoLink: 'https://github.com/usuario/cerveceria-project'
    },
    {
      id: 2,
      titulo: 'Proyecto 2',
      urlImg: '/muestras/historia2.png',
      descripcion: 'Landing page para un evento histórico, con secciones de cronología y galería de fotos.',
      infoAdicional: 'Tecnologías: HTML, CSS, Bootstrap, JavaScript. Fecha: Febrero 2024. Características: Integración con redes sociales y slider de imágenes.',
      demoLink: 'https://programacion-e-historia.vercel.app/',
      codigoLink: 'https://github.com/usuario/historia2'
    },
    {
      id: 3,
      titulo: 'Proyecto 3',
      urlImg: '/muestras/tienda.png',
      descripcion: 'E-commerce de productos con carrito de compras, pasarela de pagos y panel de administrador.',
      infoAdicional: 'Tecnologías: React, Node.js, Express, MongoDB. Fecha: Marzo 2024. Características: Plataforma escalable, seguro y con integración de API de pagos.',
      demoLink: 'https://productos-xi.vercel.app/',
      codigoLink: 'https://github.com/usuario/tienda'
    },
    {
      id: 4,
      titulo: 'Proyecto 4',
      urlImg: '/muestras/portfolio.png',
      descripcion: 'Mi portafolio personal con secciones de proyectos, blog y contacto.',
      infoAdicional: 'Tecnologías: React, CSS, React Router. Fecha: Abril 2024. Características: Diseño moderno, navegación intuitiva y sección de blog integrada.',
      demoLink: 'https://ejemplo-portfolio.com',
      codigoLink: 'https://github.com/usuario/portfolio'
    },
  ];

  // Función para manejar el clic en una tarjeta y navegar a una vista detallada
  const handleCardClick = (id) => {
    // Por ejemplo, redirigir a /projects/:id para ver más detalles del proyecto
    navigate(`/projects/${id}`);
  };

  return (
    <Layout>
      <div className="projects-container">
        <h1 className="text-center mb-4">Mis Proyectos</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {proyectos.map(({ id, titulo, urlImg, descripcion, infoAdicional, demoLink, codigoLink }) => (
            <div className="col mb-4" key={id}>
              <div className="card h-100 project-card" onClick={() => handleCardClick(id)}>
                <img
                  src={urlImg}
                  className="card-img-top"
                  alt={titulo}
                  loading="lazy"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{titulo}</h5>
                  <p className="card-text">{descripcion}</p>
                  <p className="additional-info">{infoAdicional}</p>
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
    </Layout>
  );
};

export { Projects };
