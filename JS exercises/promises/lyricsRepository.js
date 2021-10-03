async function loadJson(url) {
  try {
    let response = await fetch(url);
    let data = response.json();
    return data;
  } catch {
    throw new Error();
  }
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
