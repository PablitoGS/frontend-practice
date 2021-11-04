import { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [highscore, setHighscore] = useState({ name: "Javi", score: 2 });

  function checkScore(name, score) {
    if (score > highscore.score) {
      setHighscore({ name, score });
    }
  }
  return (
    <Context.Provider value={{ highscore, checkScore }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
