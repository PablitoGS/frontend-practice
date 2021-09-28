
promise()

function getNames() {
  const url = "https://jsonplaceholder.typicode.com/users";
  return axios
  .get(url, { responseType: "json" })
  .then(function (response) {
    return response.data;
  })
  .then(function (data) {
    let arr = []
    data.map((data) => arr.push(data.name))
    return arr
  })
}

function getAlbums() {
  const url = "https://jsonplaceholder.typicode.com/albums";
  return axios
  .get(url, { responseType: "json" })
  .then(function (response) {
    return response.data;
  })
  .then(function (data) {
    let arr = []
    data.map((data) => arr.push(data.title ))
    return arr

  })
}


// async function promise() {
//   return await Promise.all([getNames(), getAlbums()]).then(
//
//     function([names, albums]) {
//       const arr = []
//       names.map(
//         function(name, i) {
//           let album = albums[i];
//           arr.push({name,album})
//           return arr
//         }
//       )
//       console.log(arr)
//      return arr
//     }
//   )
// }

async function promise() {
  const [names, albums] = await Promise.all([getNames(), getAlbums()]);
  const arr = [];
  names.map(function (name, i) {
    let album = albums[i];
    arr.push({ name, album });
    return arr;
  });
  return arr;
}
