import { useContext } from "react";
import Gif from "../../components/Gifs";
import GifContext from "../../context/GifContext";

export default function Details({ params }) {
  const { gifs } = useContext(GifContext);
  const singleGif = gifs.find((gif) => gif.id === params.id);
  return (
    <>
      <Gif {...singleGif} />
    </>
  );
}
