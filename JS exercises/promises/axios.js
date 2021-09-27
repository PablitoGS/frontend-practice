class lyrics {
    execute({ author, song }) {
      const url = `https://api.lyrics.ovh/v1/${author}/${song}`;
  
      return axios.get(url, {
          responseType: 'json'
        })
        .then((response) => response.data)
        .catch((err) => console.error("The song was not found"));
  
    }
  }
  
  let lyricsRepository = new lyrics();
  
  lyricsRepository.execute({author: "kiss",song: "strutter"})
    .then((data) => {
       document.getElementById("app").innerHTML = `${data.lyrics}`;
  
    })
    .catch((err) => console.error("La canción no existe"));
  