const axios = require("axios");

const urlUsers = "https://jsonplaceholder.typicode.com/users";
const urlAlbums = "https://jsonplaceholder.typicode.com/albums";

promise().then((res) => console.log(res));

function getNames() {
  return axios
    .get(urlUsers, { responseType: "json" })
    .then(function (response) {
      return response.data.map((value) => value.name);
    });
}

function getAlbums() {
  return axios
    .get(urlAlbums, { responseType: "json" })
    .then(function (response) {
      return response.data.map((value) => value.title);
    });
}

async function promise() {
  const [names, albums] = await Promise.all([getNames(), getAlbums()]);
  return names.map(function (name, i) {
    let album = albums[i];
    return { name, album };
  });
}
