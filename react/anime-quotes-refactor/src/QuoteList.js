const QuoteList = ({ quotes }) => {
  return (
    <ul className="qList">
      {quotes.map((quote) => (
        <li key={quote}>{quote}</li>
      ))}
    </ul>
  );
};

export default QuoteList;
