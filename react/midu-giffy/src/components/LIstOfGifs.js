import Gif from "./Gifs";
import UseGifs from "../hooks/UseGifs";
import "./ListOfGifs.css";

const ListOfGists = ({ search }) => {
  const { loading, gifs } = UseGifs({ search });

  if (loading) return <i>Cargando...</i>;

  return (
    <div className="listGifs">
      {gifs.map((gif) => (
        <Gif key={gif.id} url={gif.url} title={gif.title} />
        //<Gif key={gif.id} {...gif} />
      ))}
    </div>
  );
};

export default ListOfGists;
