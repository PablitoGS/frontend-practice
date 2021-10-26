export default function getGifs({ search = "morty" } = {}) {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=Qcfkd8glFPZuGsVzzDXNVvKCKylzxtWf&limit=10&q=${search}`;

  async function requestGifs() {
    const res = await fetch(URL);
    const json = await res.json();
    const { data } = json;

    const imgs = data.map((gif) => {
      const { url } = gif.images.downsized_medium;
      const { title } = gif;
      return { url, title };
    });
    return imgs;
  }
  return requestGifs();
}

getGifs.defaultProps = {
  search: "dogs",
};
