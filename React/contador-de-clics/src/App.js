import './App.css';
import Boton from './componentes/Boton';
import freeCodeCamp from './imagenes/freecodecamp-logo.png'

function App() {
  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContado = () => {
    console.log('Reiniciar')
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
