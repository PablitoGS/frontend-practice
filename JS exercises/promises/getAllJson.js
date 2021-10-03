const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/photos",
  "https://jsonplaceholder.typicode.com/albums"
];

const requests = urls.map((url) => fetch(url));

function getAllJson(arrFetch) {
  return Promise.all(arrFetch)
    .then((responses) => Promise.all(responses.map((res) => res.json())))
}

getAllJson(requests).then(arr => console.log(arr));
