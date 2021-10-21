import { useState, useEffect } from "react";

const useGifList = ({ search }) => {
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
        const gif = data.map((value) => ({
          url: value.images.downsized.url,
          title: value.title,
        }));
        updateGifs(gif);
      }
    },
    [search]
  );
  return [gifs];
};

useGifList.defaultProps = {
  search: "Dogs",
};

export default useGifList;
