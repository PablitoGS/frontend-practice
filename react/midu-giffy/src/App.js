import { useState, useEffect } from "react";
import getGifs from "./services/getGifs";
import Gif from "./Gifs";

import "./App.css";
function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    myGifs();
    async function myGifs() {
      const gifs = await getGifs({ search: "cats" });
      return setGifs(gifs);
    }
  }, []);

  return (
    <div className="App">
      <section className="App-section">
        {gifs.map((gif, i) => (
          <Gif key={i} url={gif.url} title={gif.title} />
        ))}
      </section>
    </div>
  );
}

export default App;
