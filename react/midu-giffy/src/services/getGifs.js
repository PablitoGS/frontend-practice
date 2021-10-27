export default function getGifs({ search }) {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=Qcfkd8glFPZuGsVzzDXNVvKCKylzxtWf&limit=10&q=${search}`;

  async function requestGifs() {
    const res = await fetch(URL);
    const json = await res.json();
    const { data } = json;

    const imgs = data.map((gif) => {
      const { url } = gif.images.downsized_medium;
      const { title, id } = gif;
      return { url, title, id };
    });
    return imgs;
  }

  return requestGifs();
}
