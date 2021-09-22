import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useState} from 'react'

const App = (props) => {
  //const counter = useState(0) //valor inicial del estado
  // El estado tiene un array de 2 posiciones

  //const valueCounter = counter[0] //Primera posision es valor del estado
  //const updateCounter = counter[1] //Segunda posicion Metodo que al ejecutarlo podemos actualizar el estado

  const [valueCounter, updateCounter] = useState(0)

  return (
    <>
    <h1>{valueCounter}</h1>
    <button onClick={() =>
      updateCounter(valueCounter+1)}
      >Incrementar</button>
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);
