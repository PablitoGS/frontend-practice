import Button from "./Button";
import { useState, useEffect } from "react";

const GifList = () => {
  const [gifs, updateGifs] = useState([]);
  const [inputvalue, updateValue] = useState("");

  useEffect(function ({ search } = {}) {
    requestGifs();
  }, []);

  async function requestGifs({ search } = {}) {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=Qcfkd8glFPZuGsVzzDXNVvKCKylzxtWf&limit=10&q=${search}`
    );
    const json = await res.json();
    const data = await json.data;
    const imgs = data.map((gif) => gif.images.downsized.url);
    updateGifs(imgs);
  }

  return (
    <div className="section">
      <div className="inputText">
        <label>Busca tu GIF</label>
        <input
          type="text"
          value={inputvalue}
          onChange={(e) => updateValue(e.target.value)}
        ></input>
      </div>
      <Button
        text="Me siento con suerte"
        onClick={(e) => {
          e.preventDefault();
          requestGifs({ search: inputvalue });
        }}
      />
      <div className="gifList">
        {gifs.map((gif, index) => (
          <img key={index} alt="" src={gif} />
        ))}
      </div>
    </div>
  );
};

export default GifList;
