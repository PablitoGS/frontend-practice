import Button from "./Button";
//import InputText from './InputText';
import useGifList from "./GifList";
import { useState } from "react";

import "./App.css";

function App() {
  const [search, updateValue] = useState("");
  const [input, updateInput] = useState("");
  const [gifs] = useGifList({ search });

  return (
    <div className="App">
      <section>
        <div className="section">
          <div className="inputText">
            <label>Busca tu GIF</label>
            <input
              type="text"
              value={input}
              onChange={(e) => updateInput(e.target.value)}
            ></input>
          </div>
          <Button
            text="Me siento con suerte"
            onClick={(e) => {
              e.preventDefault();
              updateValue(input);
            }}
          />
          <div className="gifList">
            {gifs.map((gif, index) => (
              <img key={index} alt="" src={gif} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
