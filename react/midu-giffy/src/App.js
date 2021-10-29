import { Route, Link } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import StaticContext from "./context/StaticContext";
import Details from "./pages/Details";
import { GifsContextProvider } from "./context/GifContext";

import "./App.css";

function App() {
  return (
    <StaticContext.Provider value={"Leo este value"}>
      <div className="App">
        <section className="App-section">
          <h1>
            <Link to={`/`}>Home GIFS</Link>
          </h1>
          <GifsContextProvider>
            <Route path="/gif/:id" component={Details} />
            <Route path="/search/:search" component={SearchResults} />
            <Route path="/" component={Home} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
