import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { ContextProvider } from "./Context";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
  rootElement
);
