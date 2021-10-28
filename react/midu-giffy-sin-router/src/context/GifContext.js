import React from "react";
import { useState } from "react/cjs/react.development";

const Context = React.createContext({});

export function GifsContentProvider({ children }) {
  const [gifs, setGifs] = useState([]);

  return (
    <Context.Provider value={{ gifs, setGifs }}>{children}</Context.Provider>
  );
}

export default Context;
