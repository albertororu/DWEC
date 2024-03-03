import React,{useState} from 'react'
import Inicio from './Inicio'


const InicioSesion = () => {
  const [login, setLogin] = useState(false)
  const [input, setInput] = useState ({
    nombreUsuario: '',
    contrasena: ''
  }) 


  const handleChange = (e) => {
    const{name,value}=e.target;
    setInput(prevInput =>({
      ...prevInput,
      [name]:value
    }))
  }
 

  const handleSubmit =(e)=>{
    e.preventDefault()
    fetch('http://localhost:3001/usuarios')
    .then(response => {
      if (!response.ok) {
        throw new Error ('No hay usuarios con ese nombre')
      }
      return response.json()
    })
    .then(usuarios => {
      const usuarioLocalizado = usuarios.find(
        usuario => usuario.nombreUsuario === input.nombreUsuario && usuario.contrasena === input.contrasena
      )
      if (usuarioLocalizado){
        setLogin(true)
        document.getElementById ("titulo").style.display = "none"
        document.getElementById("login").style.display = "none"
      } 
      else {
        setLogin(false)
        alert('Usuario o constraseña incorrecta')
        
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} id='login' >
            <h1 id='titulo'>Inicio de Sesion</h1>
            <label>Nombre de usuario</label>
            <input type='text' name='nombreUsuario' value={input.nombreUsuario} onChange={handleChange}></input>
            <label>Contraseña</label>
            <input type='password' name='contrasena' value={input.contrasena} onChange={handleChange}></input>

            <button type='submit'>Registrarse</button>
        </form>

      {login === true && <Inicio/>}
    </div>
  );
}

export default InicioSesion