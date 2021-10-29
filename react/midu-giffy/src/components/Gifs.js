import "./Gif.css";
import { Link } from "wouter";

const Gif = ({ title, url, id }) => {
  return (
    <div className="gif">
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    </div>
  );
};

export default Gif;
