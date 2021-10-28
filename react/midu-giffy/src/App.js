import { Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults/SearchResults";

import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="App-section">
        <Route path="/search/:search" component={SearchResults} />
        <Route path="/" component={Home} />
      </section>
    </div>
  );
}

export default App;
