const API_URL = 'https://jsonplaceholder.typicode.com';

axios.get(`${API_URL}/users`, {responseType: 'json'})
  .then((response) => response.data)
  .then((data) => {
    const tpl = data.map((data) => `<li>${data.name}</li>`)
    document.querySelector('#app').innerHTML = `<ul>${tpl}</ul>`
  })
  .catch(function() {
    console.log('fallo');
  })
