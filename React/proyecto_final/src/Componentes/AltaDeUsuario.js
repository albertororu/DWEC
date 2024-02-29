import React from "react";
import { useState } from "react";
import Inicio from "./Inicio";
import "../Hojas-de-estilo/AltaDeUsuario.css"

function AltaDeUsuario() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [login, setLogin] = useState(false);

  const enviar = (event) => {
    event.preventDefault();
    if (usuario === "admin" && contrasena === "123" || usuario === "alberto" && contrasena === "alberto16") {
      setLogin(true);
      document.getElementById("titulo").style.display = "none";
      document.getElementById("login").style.display = "none";
    } else {
      setLogin(false);
    }
  };

  return (
    <div>
      <h1 id="titulo">Iniciar Sesión</h1>

      <form onSubmit={enviar} id="login">
        Usuario
        <input
          type="text"
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)}
        /> <br />
        Contraseña
        <input
          type="password"
          value={contrasena}
          onChange={(event) => setContrasena(event.target.value)}
        /> <br />
        <button>Iniciar sesión</button>
      </form>

      {login === true && <Inicio />} 
    </div>
  );
}

export default AltaDeUsuario;