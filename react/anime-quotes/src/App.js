import "./App.css";
import Login from "./Login";
import { useContext, useEffect, useState } from "react";
import getQuotes from "./getQuotes";
import Context from "./Context";

export default function App() {
  const { user, setUser } = useContext(Context);
  const [input, setInput] = useState("");
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    if (user) {
      getQuotes(user).then((res) => {
        console.log(res);
        if (res.length) {
          const quote = res.map(({ quote }) => {
            return quote;
          });
          setQuoteList(quote);
        }
      });
    }
  }, [user]);

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
            <ul className="qList">
              {quoteList.map((quote) => (
                <li>{quote}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
