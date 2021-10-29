import { useEffect, useState, useContext } from "react";
import GifContext from "../context/GifContext";

import getGifs from "../services/getGifs";

export default function UseGifs({ search }) {
  const [loading, setLoading] = useState(false);

  const { gifs, setGifs } = useContext(GifContext);

  useEffect(() => {
    setLoading(true);

    getGifs({ search }).then((gifs) => {
      //gifs es la response de UseGifs, array con url, id, title, etc
      setGifs(gifs);
      setLoading(false);
    });
  }, [search, setGifs]);

  return { loading, gifs };
}
