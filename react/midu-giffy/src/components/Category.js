import { Link } from "wouter";

const Category = ({ options, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {options.map((gif, key) => (
        <div key={key}>
          <Link to={`/search/${gif}`}>Gifs de {gif}</Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
