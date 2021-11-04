import { useState, useEffect, useContext } from "react";
import Context from "./Context";
import getQuotes from "./getQuotes";

export default function useQuotes() {
  const [quoteList, setQuoteList] = useState([]);
  const { user } = useContext(Context);

  useEffect(() => {
    getQuotes(user).then((res) => {
      const quote = res.map(({ quote }) => {
        return quote;
      });
      setQuoteList(quote);
    });
  }, [user]);

  return [quoteList];
}
