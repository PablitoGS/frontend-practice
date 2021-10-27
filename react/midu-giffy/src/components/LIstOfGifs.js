import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gifs";
import "./ListOfGifs.css";

const ListOfGists = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    myGifs();
    async function myGifs() {
      const gifs = await getGifs({ search });
      setGifs(gifs);
      setLoading(false);
    }
  }, [search]);

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
