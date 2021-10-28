import ListOfGifs from "./components/LIstOfGifs";

import { Route } from "wouter";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="App-section">
        <Route path="/search/:keyword">
          {(params) => <ListOfGifs search={params.keyword} />}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </section>
    </div>
  );
}

export default App;
