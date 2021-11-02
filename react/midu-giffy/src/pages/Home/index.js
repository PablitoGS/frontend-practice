import { useLocation } from "wouter";
import { useState } from "react";
import Category from "../../components/Category";

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
      <Category options={POP_GIFS} title="Mis Gifs favoritos" />
    </>
  );
}
