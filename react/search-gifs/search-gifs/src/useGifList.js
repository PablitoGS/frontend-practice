import { useState, useEffect } from "react";

const useGifList = ({ search }) => {
  const [gifs, updateGifs] = useState([]);
  const [alt, updateAlt] = useState([]);

  useEffect(
    function () {
      requestGifs();

      async function requestGifs() {
        const res = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=Qcfkd8glFPZuGsVzzDXNVvKCKylzxtWf&limit=10&q=${search}`
        );
        const json = await res.json();
        const data = await json.data;
        const url = data.map((value) => value.images.downsized.url);
        const title = await data.map((value) => value.title);

        updateGifs(url);
        updateAlt(title);
      }
    },
    [search]
  );
  return [gifs, alt];
};

useGifList.defaultProps = {
  search: "Dogs",
};

export default useGifList;
