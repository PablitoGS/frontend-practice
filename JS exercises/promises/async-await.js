const { default: axios } = require("axios");

console.clear();

async function main() {
  const names = await getNames()
  const albums = await getAlbums()

  const tpl = names.map(
    function(item, i) {
      let item2 = albums[i]
      return `<li><i>${item}</i>: <strong>${item2}</strong> </li>`
    }
  )
  document.querySelector('#app').innerHTML = `<ul>${tpl}</ul>`
}

async function main2() {
  const names = await getNames()
  const albums = await getAlbums()
  const arr = []
  names.map(
    function(name, i) {
      let album = albums[i];
      arr.push({name,album})
      return arr
    }
  )
  console.log(arr)
}

const getNames = () => {
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

const getAlbums = () => {
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

main()
main2()
