import { Link, useLocation } from "wouter";
import { useState } from "react";

const POP_GIFS = ["Rock", "Hell", "ACDC"];

export default function Home() {
  const [input, setInput] = useState("");
  const [path, pushLocation] = useLocation();

  function updateGifs() {
    pushLocation(`/search/${input}`);
  }

  return (
    <>
      <div className="search">
        <input
          type="text"
          value={input}
          placeholder="... busca un gif"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={updateGifs}>BUSCAR</button>
      </div>
      <h2>Los gifs más populares</h2>
      <div>
        {POP_GIFS.map((gif, key) => (
          <div key={key}>
            <Link to={`/search/${gif}`}>Gifs de {gif}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
