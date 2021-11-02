import { useContext } from "react";
import GifContext from "../context/GifContext";

export default function UseGlobalGifs() {
  const { gifs } = useContext(GifContext);

  return gifs;
}
