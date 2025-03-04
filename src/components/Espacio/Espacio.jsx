// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Espacio.css"; // Archivo de estilos
import planetImage from "../../assets/tierraoscura.jpg"; // Imagen de fondo

import { CarouselMarquee } from "../CarouselMarquee/CarouselMarquee.jsx";



const Espacio = () => {
  return (
    <section className="espacio">
      <div className="espacio-content">
        <p className="espacio-greeting">Hola Soy Faryd Ortiz 👋</p>
        <h1 className="espacio-title">
          <span>FrontEnd</span> Developer.
        </h1>
        <p className="espacio-description">
          Desarrollador Web de Buenos Aires, Argentina. Me especializo en desarrollo Front-end, con experiencia en la creación de interfaces de usuario eficientes y visualmente atractivas.
        </p>
      </div>
      {/* Imagen de fondo */}
      <div className="espacio-background">
        <img src={planetImage} alt="Tierra Oscura" />
      </div>
      <div>
    <CarouselMarquee />
    
</div>

    </section>
  );
};

export  {Espacio};
