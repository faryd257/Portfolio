import { useSelector } from 'react-redux';
import "./Home.css";
import { Espacio } from "../../components/Espacio/Espacio";
import { SobreMi } from "../../components/Sobre-Mi/Sobre-Mi";
import { Muestra } from "../../components/Muestra/Muestra";
import { Formacion } from "../../components/Formacion/Formacion";
import { textos } from "../../utils/textos";

const Home = () => {
  const idioma = useSelector(state => state.ui.idioma);
  const modoClaro = useSelector(state => state.ui.modoClaro);

  const textoHome = textos[idioma].home;

  return (
    <div className={`home-container ${modoClaro ? 'light' : 'dark'}`}>
      <div id="espacio">
        <Espacio texto={textoHome} />
      </div>

      <div className="ss" id="sobreMi">
        <SobreMi texto={textoHome} />
      </div>

      <div id="formacion">
        <Formacion texto={textoHome} />
      </div>

      <div id="proyectos">
        <Muestra texto={textoHome} />
      </div>
    </div>
  );
};

export { Home };
