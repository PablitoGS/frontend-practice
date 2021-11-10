import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useState } from "react";
import Counter from "./Counter";
import WarningNotUsed from "./WarningNotUsed";
import ListOfClicks from "./ListOfClicks";

const initialCounterState = { left: 0, right: 0, message: "Mensaje de estado" };
const initialSingleCounterState = 0;

const App = (props) => {
  //const counter = useState(0) //valor inicial del estado
  // El estado tiene un array de 2 posiciones
  //const valueCounter = counter[0] //Primera posision es valor del estado
  //const updateCounter = counter[1] //Segunda posicion Metodo que al ejecutarlo podemos actualizar el estado

  const [counter, setCounter] = useState(initialSingleCounterState);
  const [clicks, setClicks] = useState([]);
  const [newCounterLR, setNewCounterLR] = useState(initialCounterState);

  const eClickLeft = () => {
    setNewCounterLR({
      ...newCounterLR,
      left: newCounterLR.left + 1,
    });
    setClicks([...clicks, "L"]);
  };

  const eClickRight = () => {
    setNewCounterLR({
      ...newCounterLR,
      right: newCounterLR.right + 1,
    });
    setClicks((prevClicks) => [...prevClicks, "R"]);
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
    setCounter(initialSingleCounterState);
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
      <hr />
      <div>
        {newCounterLR.left}
        <button onClick={eClickLeft}>left</button>
        <button onClick={eClickRight}>right</button>
        {newCounterLR.right}
        <p>Click totales: {clicks.length}</p>
        {clicks.length === 0 ? (
          <WarningNotUsed />
        ) : (
          <ListOfClicks clicks={clicks} />
        )}
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
