<<<<<<< HEAD
import Boton from "../Calculadora/Boton";
import Pantalla from "../Calculadora/Pantalla";
import BotonClear from "../Calculadora/BotonClear";
import { useState } from 'react';
import { evaluate } from 'mathjs';
import "../Hojas-de-estilo/About.css"
import Footer from "./Footer";
function About() {

    const [input, setInput] = useState('');
  
    const agregarInput = val => {
      setInput(input + val);
    };
  
    const calcularResultado = () => {
      if (input) {
        setInput(evaluate(input));
      } else {
        alert("Por favor ingrese valores para realizar los cálculos.");
      }
    };
  
    return (
      <div className='about'>
        <div className='contenedor-calculadora'>
          <Pantalla input={input}/>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={() => setInput('')}>
              Clear
            </BotonClear>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default About;
=======
import React from "react";
import Carousel from "./Carousel/Carousel";
const About = () => {
  return(
    <div>
      <h1>Hola Usuario</h1>
      <Carousel/>
    </div>
  )
}
export default About
>>>>>>> 8587f2557234f742f6ac9a96eb0f744bae4cfb7e
