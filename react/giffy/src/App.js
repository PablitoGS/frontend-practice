import React, {useState} from 'react'
import './App.css';

function App() {
  const arrGifs = [
    'https://media4.giphy.com/media/4qx6IRdg26uZ3MTtRn/200w.webp?cid=790b7611boxyvrm8jxzln18mu8403njbkc771w99aw8qjtc4&rid=200w.webp&ct=g',
  ]

  const arrMoreGifs = [
    'https://media4.giphy.com/media/1kjcpvAiRJx0uTL3Nh/200.webp?cid=790b7611bqfpjejxfdyvehz5rq7jlylbc7a2gyc24m44ymez&rid=200.webp&ct=g',
    'https://media1.giphy.com/media/3jiLt1aBGfF37ZmK8a/200w.webp?cid=790b7611bqfpjejxfdyvehz5rq7jlylbc7a2gyc24m44ymez&rid=200w.webp&ct=g'

  ]

  const [gifs, setGifs] = useState([arrGifs])

  return (
    <div className="App">
      <section className="App-content">
      {
        gifs.map((item,key) => <img src={item} alt='' key={item}/>)
      }
        <button onClick={() => setGifs(arrMoreGifs)}>Dame otros gifs</button>
      </section>
    </div>
  );
}

export default App;
