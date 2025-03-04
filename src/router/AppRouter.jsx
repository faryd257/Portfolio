// src/router/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";

import { Layout } from "../components/Layout/Layout";

import { Projects } from "../Pages/Projects/Projects";
import { Contacto } from "../Pages/Contacto/Contacto";

const AppRouter = ()=>{
  return(

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/layout" element={<Layout />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>

  )
}

export{AppRouter}