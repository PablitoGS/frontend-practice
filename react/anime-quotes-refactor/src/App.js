import "./App.css";
import Login from "./Login";
import { useContext, useState } from "react";
import useQuotes from "./useQuotes";
import QuoteList from "./QuoteList";
import Context from "./Context";

export default function App() {
  const { user, setUser } = useContext(Context);
  const [input, setInput] = useState("");
  const [quoteList] = useQuotes(user);

  return (
    <div className="App">
      {!user ? (
        <Login
          value={input}
          eventClick={() => setUser(input)}
          eventChange={(e) => setInput(e.target.value)}
        />
      ) : (
        <>
          <h1>Hola {user}</h1>
          <div className="list">
            <h2 className="title">Quotes:</h2>
            <QuoteList quotes={quoteList} />
          </div>
        </>
      )}
    </div>
  );
}
