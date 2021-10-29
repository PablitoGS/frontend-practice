import Gif from "./Gifs";
import "./ListOfGifs.css";

const ListOfGifs = ({ gifs }) => {
  return (
    <div className="listGifs">
      {gifs.map((gif) => (
        <Gif id={gif.id} key={gif.id} url={gif.url} title={gif.title} />
        //<Gif key={gif.id} {...gif} />
      ))}
    </div>
  );
};

export default ListOfGifs;
