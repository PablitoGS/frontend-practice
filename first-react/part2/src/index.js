import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useState } from "react";

const Counter = ({ number }) => <h1>El valor es: {number}</h1>;

const App = (props) => {
  //const counter = useState(0) //valor inicial del estado
  // El estado tiene un array de 2 posiciones

  //const valueCounter = counter[0] //Primera posision es valor del estado
  //const updateCounter = counter[1] //Segunda posicion Metodo que al ejecutarlo podemos actualizar el estado

  const [counter, setCounter] = useState(0);
  const [newCounter, setNewCounter] = useState({
    left: 0,
    right: 0,
    clicks: 0,
    message: "Mensaje de estado",
  });

  const eClickLeft = () => {
    setNewCounter({
      ...newCounter,
      left: newCounter.left + 1,
      clicks: newCounter.clicks + 1,
    });
  };

  const eClickRight = () => {
    setNewCounter({
      ...newCounter,
      right: newCounter.right + 1,
      clicks: newCounter.clicks + 1,
    });
  };

  const handleClick = (param) => {
    if (param === "down") {
      return () => setCounter((prevNumber) => prevNumber - 1);
    }
    if (param === "up") {
      return () => setCounter((prevNumber) => prevNumber + 1);
    }
  };

  function handleClickReset() {
    setCounter(0);
  }

  const isEven = counter % 2 === 0;

  return (
    <>
      <Counter number={counter} />
      <p>El número es {isEven ? "par" : "impar"}</p>
      <div>
        <button onClick={handleClick("up")}>Incrementar</button>
        <button onClick={handleClick("down")}>Decrementar</button>
        <button onClick={handleClickReset}>Reset</button>
      </div>
      <hr></hr>
      <div>
        {newCounter.left}
        <button onClick={eClickLeft}>left</button>
        <button onClick={eClickRight}>right</button>
        {newCounter.right}
        <p>Click totales: {newCounter.clicks}</p>
        <p>{newCounter.message}</p>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
