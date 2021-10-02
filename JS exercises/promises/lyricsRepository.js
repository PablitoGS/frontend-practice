function loadJson(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.error("The song was not found"));
}

class Lyrics {
  execute({ author, song }) {
    const url = `https://api.lyrics.ovh/v1/${author}/${song}`;
    return loadJson(url);
  }
}

let lyricsRepository = new Lyrics();

lyricsRepository
  .execute({
    author: "kiss",
    song: "deuce"
  })

  .then((data) => {
    console.log(data.lyrics);
  })
  .catch((err) => console.error("La canción no existe"));
