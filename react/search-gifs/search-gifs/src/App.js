import Button from "./components/Button";
import InputText from "./components/InputText";
import Label from "./components/Label";
import GifList from "./components/GifList";

import useGifList from "./useGifList";
import { useState } from "react";

import "./App.css";

function App() {
  const [search, updateValue] = useState("");
  const [input, updateInput] = useState("");
  const [gifs, alt] = useGifList({ search });

  return (
    <div className="App">
      <section>
        <div className="section">
          <div className="section-form">
            <div className="inputText">
              <Label text="Busca tu GIF" />
              <InputText
                value={input}
                onChange={(e) => updateInput(e.target.value)}
              />
            </div>
            <Button
              text="Me siento con suerte"
              onClick={(e) => {
                e.preventDefault();
                updateValue(input);
              }}
            />
          </div>
          <GifList gifs={gifs} alt={alt} />
        </div>
      </section>
    </div>
  );
}

export default App;
