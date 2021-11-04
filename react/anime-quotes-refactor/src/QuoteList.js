import useQuotes from "./useQuotes";

const QuoteList = () => {
  const [quotes] = useQuotes();

  return (
    <ul className="qList">
      {quotes.map((quote) => (
        <li key={quote}>{quote}</li>
      ))}
    </ul>
  );
};

export default QuoteList;
