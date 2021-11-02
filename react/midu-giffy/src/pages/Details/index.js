import Gif from "../../components/Gifs";
import useGlobalGifs from "../../hooks/useGlobalGifs";

export default function Details({ params }) {
  const gifs = useGlobalGifs();
  const singleGif = gifs.find((gif) => gif.id === params.id);
  return (
    <>
      <Gif {...singleGif} />
    </>
  );
}
