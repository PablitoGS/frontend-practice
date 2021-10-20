import { useState, useEffect } from "react";

const useGifList = ({ search = "cats" } = {}) => {
  const [gifs, updateGifs] = useState([]);

  useEffect(
    function () {
      requestGifs();

      async function requestGifs() {
        const res = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=Qcfkd8glFPZuGsVzzDXNVvKCKylzxtWf&limit=10&q=${search}`
        );
        const json = await res.json();
        const data = await json.data;
        const imgs = await data.map((gif) => gif.images.downsized.url);
        updateGifs(imgs);
      }
    },
    [search]
  );
  return [gifs];
};

export default useGifList;
