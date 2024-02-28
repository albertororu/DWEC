import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AltaDeUsuario from "./Componentes/AltaDeUsuario";
import About from "./Componentes/About";
import Inicio from "./Componentes/Inicio";
import Error from "./Componentes/Error";
import NavBar from "./Componentes/NavBar";
import "./App.css";
function App() {
  return (
  
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/" element={<AltaDeUsuario />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
    
  );
}

import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import AltaDeUsuario from "./Componentes/AltaDeUsuario";
import About from "./Componentes/About";
import Inicio from "./Componentes/Inicio";
import 'bootstrap/dist/css/bootstrap.min.css';


