import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import AltaDeUsuario from "./Componentes/AltaDeUsuario";
import About from "./Componentes/About";
import Inicio from "./Componentes/Inicio";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
    
      <nav className="navbar navbar-light bg-light">
        <Link to="/Inicio">Inicio</Link>
        <Link to="/AltaDeUsuario">AltaDeUsuario</Link>
        <Link to="/About">Acerca de</Link>
      </nav>
      
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/AltaDeUsuario" element={<AltaDeUsuario />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
