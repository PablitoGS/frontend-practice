import ListOfGifs from "./components/LIstOfGifs";
import { useState } from "react";
import "./App.css";

function App({ initialValue }) {
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState(initialValue);
  return (
    <div className="App">
      <section className="App-section">
        <div className="search">
          <input
            type="text"
            value={input}
            placeholder="... busca un gif"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => setKeyword(input)}>BUSCAR</button>
        </div>
        <ListOfGifs search={keyword} />
      </section>
    </div>
  );
}

App.defaultProps = {
  initialValue: "dogs",
};

export default App;
