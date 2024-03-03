import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InicioSesion from './InicioSesion';
import About from './About'
import Inicio from './Inicio'
import Registro from './Registro'
import Cartas from './Cartas';
function NavBar(){
    return (
        <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/Inicio">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/Inicio'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/About' >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Registro'>Registrarse</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/InicioSesion'>Inicio de sesion</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/Cartas'>Pokemons</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
        <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/About" element={<About/>} />
                <Route path="/Inicio" element={<Inicio/>} />
                <Route path="/Registro" element={<Registro />} />
                <Route path="/InicioSesion" element={< InicioSesion/>} />
                <Route path="/Cartas" element={< Cartas/>} />
              
            </Routes>
        </Router>
    )
}

export default NavBar
