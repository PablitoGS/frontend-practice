
class Lyrics {
    execute({author, song}) {
      const url = `https://api.lyrics.ovh/v1/${author}/${song}`;
      return fetch(url)
        .then((response) => response.json())
        .catch((err) => console.error("The song was not found"));
    }
  }
  
  let lyricsRepository = new Lyrics()
  
  lyricsRepository.execute(
    {   
        author: "kiss", 
        song: "strutter"}
    )
  
  .then((data) => {
    document.getElementById("app").innerHTML = `${data.lyrics}`;
  })
  .catch((err) => console.error("La canción no existe"));
  