import { useSelector } from 'react-redux';
import "./Espacio.css"; 
import darkPlanetImage from "../../assets/tierraoscura.jpg"; 
import lightPlanetImage from "../../assets/tierraclara.webp"; 
import { CarouselMarquee } from "../CarouselMarquee/CarouselMarquee.jsx";
import { textos } from "../../utils/textos";

const Espacio = () => {
  const idioma = useSelector(state => state.ui.idioma);
  const modoClaro = useSelector(state => state.ui.modoClaro);

  const textoEspacio = textos[idioma].espacio;
  const backgroundImage = modoClaro ? lightPlanetImage : darkPlanetImage; 

  return (
    <section className={`espacio ${modoClaro ? 'light' : 'dark'}`}>
      <div className="espacio-content">
        <p className="espacio-greeting">{textoEspacio.bienvenida}</p>
        <h1 className="espacio-title">
          <span>{textoEspacio.especialidad}</span> {textoEspacio.puesto}.
        </h1>
        <p className="espacio-description">
          {textoEspacio.descripcion}
        </p>
      </div>

      <div className="espacio-background">
        <img src={backgroundImage} alt="Tierra" />
      </div>

      <CarouselMarquee />
    </section>
  );
};

export { Espacio };
