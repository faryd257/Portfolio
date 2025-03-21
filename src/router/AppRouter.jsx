import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Contacto } from "../Pages/Contacto/Contacto";
import { Layout } from "../components/Layout/Layout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  );
};

export { AppRouter };
