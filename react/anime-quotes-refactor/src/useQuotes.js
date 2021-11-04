import { useState, useEffect } from "react";
import getQuotes from "./getQuotes";

export default function useQuotes(user) {
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    if (user) {
      getQuotes(user).then((res) => {
        if (res.length) {
          const quote = res.map(({ quote }) => {
            return quote;
          });
          setQuoteList(quote);
        }
      });
    }
  }, [user]);

  return [quoteList];
}
