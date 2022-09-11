import './App.css';
import Botones from './components/Botones'
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs'                     //instalar npm i mathjs

function App() {
 
  const[mostrar, setMostrar] = useState('')

  const agregarValor = (val)=> {
    setMostrar(mostrar + val)
  }

  const calcularResultados = ()=> {
    mostrar ? setMostrar(evaluate(mostrar)) : alert("Ingrese un valor valido")
    
  }
  

  return (
    <div className="App">
      <div className='contenedorCalculadora'>
        <div>
          <Pantalla valor={mostrar} />
        </div>
        
        <div className='contenedor-botones'>
          <div className='fila'>
            <Botones manejarClick={agregarValor} >1</Botones>
            <Botones manejarClick={agregarValor} >2</Botones>
            <Botones manejarClick={agregarValor} >3</Botones>
            <Botones manejarClick={agregarValor} >+</Botones>
          </div>
          <div className='fila'>
            <Botones manejarClick={agregarValor} >4</Botones>
            <Botones manejarClick={agregarValor} >5</Botones>
            <Botones manejarClick={agregarValor} >6</Botones>
            <Botones manejarClick={agregarValor} >-</Botones>
          </div>
          <div className='fila'>
            <Botones manejarClick={agregarValor} >7</Botones>
            <Botones manejarClick={agregarValor} >8</Botones>
            <Botones manejarClick={agregarValor} >9</Botones>
            <Botones manejarClick={agregarValor} >*</Botones>
          </div>
          <div className='fila'>
            <Botones manejarClick={calcularResultados} >=</Botones>
            <Botones manejarClick={agregarValor} >0</Botones>
            <Botones manejarClick={agregarValor} >.</Botones>
            <Botones manejarClick={agregarValor} >/</Botones>
          </div>
        </div>
        <div>
          <BotonClear manejarClear={()=> setMostrar('')} />
        </div>
      </div>

    </div>
  );
}

export default App;
