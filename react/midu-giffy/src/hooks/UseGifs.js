import { useEffect, useState } from "react";

import getGifs from "../services/getGifs";

export default function UseGifs({ search }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);

    getGifs({ search }).then((gifs) => {
      //gifs es la response de UseGifs, array con url, id, title, etc
      setGifs(gifs);
      setLoading(false);
    });

    // myGifs();
    // async function myGifs() {
    //   const gifs = await getGifs({ search });
    //   setGifs(gifs);
    //   setLoading(false);
    // }
  }, [search]);

  return { loading, gifs };
}
