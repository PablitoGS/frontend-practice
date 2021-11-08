const List = ({ answers, eventChange }) => {
  return (
    <ul className="list">
      {answers.map((value) => (
        <li key={value}>
          <input
            type="radio"
            id={value}
            value={value}
            name="list"
            onChange={eventChange}
          />
          <label htmlFor={value}>{value}</label>
        </li>
      ))}
    </ul>
  );
};

export default List;
