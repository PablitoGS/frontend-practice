async function loadJson(url) {
  let response = await fetch(url);
  let data = response.json();
  return data;
}

class Lyrics {
  execute({ author, song }) {
    const url = `https://api.lyrics.ovh/v1/${author}/${song}`;
    return loadJson(url);
    .catch(() => {
      throw new Error("La canción no existe");
    });
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
  .catch((error) => console.error(error));
