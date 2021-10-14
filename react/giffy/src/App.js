import React, {useEffect, useState} from 'react'
import getImages from './getImages'
import './App.css';

function App() {
  const apiURL = 'https://jsonplaceholder.typicode.com/photos'

  const [thumbnails, setThumbnails] = useState([])

  useEffect(() => {
    getImages(apiURL).then(imgs => setThumbnails(imgs))
  },[])

  return (
    <div className="App">
    <section className="App-content">
      {thumbnails.map(( item, key ) => {
        return <div key={key}>
          <img src={item.thumbnailUrl} alt={item.title} />
          <p>{item.title}</p>
        </div>
      })}
    </section>
    </div>
  );
}

export default App;
