import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import freeCodeCamp from './imagenes/freecodecamp-logo.png'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContado = () => {
   setNumClics(0)
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCamp}
        alt='Logo de freeCodeCamp'/>
      </div>

      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton
         texto='Clic'
         esBotonDeClic={true}
         manejarClic={manejarClic}/>
          
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContado}
        />
      </div>
    </div>
  );
}

export default App;
