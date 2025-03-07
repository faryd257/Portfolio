import { Layout } from "../../components/Layout/Layout";

import "./Home.css";
import { Espacio } from "../../components/Espacio/Espacio";
import { SobreMi } from "../../components/Sobre-Mi/Sobre-Mi";
import { Muestra } from "../../components/Muestra/Muestra";
import { Formacion } from "../../components/Formacion/Formacion";

const Home = () => {
  return (
    <Layout>
      <div>
        <Espacio />
      </div>

      <div className="ss">
        <SobreMi />
      </div>
      <div>
        <Formacion />
      </div>
      <div>
        <Muestra />
      </div>
    </Layout>
  );
};
export { Home };
