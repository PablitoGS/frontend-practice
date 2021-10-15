import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: 1 }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Gardfield",
      animal: "cat",
      breed: "Orange Persian",
    }),
    React.createElement(Pet, {
      name: "Perales",
      animal: "bird",
      breed: "Canario",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
