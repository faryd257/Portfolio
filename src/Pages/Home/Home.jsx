import { Layout } from "../../components/Layout/Layout";
import "./Home.css";
import { Espacio } from "../../components/Espacio/Espacio";
import { SobreMi } from "../../components/Sobre-Mi/Sobre-Mi";
import { Muestra } from "../../components/Muestra/Muestra";
import { Formacion } from "../../components/Formacion/Formacion";

const Home = () => {
  return (
    <Layout>
      <div id="espacio">
        <Espacio />
      </div>

      <div className="ss" id="sobreMi">
        <SobreMi />
      </div>

      <div id="formacion">
        <Formacion />
      </div>

      <div id="proyectos">
        <Muestra />
      </div>
    </Layout>
  );
};

export { Home };
