import { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [highscore, setHighscore] = useState({ score: 0 });

  function checkScore(score) {
    if (score > highscore.score) {
      setHighscore({ score });
    }
  }
  return (
    <Context.Provider value={{ highscore, checkScore }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
