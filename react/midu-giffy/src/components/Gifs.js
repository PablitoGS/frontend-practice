import "./Gif.css";

const Gif = ({ title, url }) => {
  return (
    <div className="gif">
      <h4>{title}</h4>
      <img src={url} alt="" />
    </div>
  );
};

export default Gif;
