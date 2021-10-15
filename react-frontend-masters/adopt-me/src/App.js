import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Gardfield" animal="cat" breed="Orange Persian" />
      <Pet name="Perales" animal="bird" breed="Canario" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
