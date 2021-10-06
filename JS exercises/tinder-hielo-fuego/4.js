// 1. Traer una lista aleatoria de 50 personajes
// filtrar los que sean femeninos ( gender: 'Female')
// deberá devolver un array con el nombre, género y los títulos, por ejemplo
// (https://www.anapioficeandfire.com/api/characters?isAlive=true&pageSize=50&page=20, hay que jugar con el parámetro page para que sea aleatorio )
//
// 2. Traer otra lista aleatoria de 50 personajes
// filtar aquellos que tengan un nombre que contenga una "a" 
//
// 3. Una vez conseguidas ambas listas hay que organizar "matchs" entre ambas listas ordenando
// por cantidad de títulos, es decir el personaje con más títulos de la primera lista deberá emparejarse con el personaje de más títulos de la segunda lista.
//
// Nota: al ser aleatorios, lo normal es que no haya la misma cantidad de personajes en la lista 1 y en la lista 2 en ese caso,
// se ignorarán los items de la lista más grande que no tengan "match"
//
//
// 4. Obtener una lista de casas, hay que recuperar solo un número de casas igual al de parejas
// (https://www.anapioficeandfire.com/api/houses?pageSize=50, cambia el pageSize)
//
// Crear un array con los match y con el nombre de una de las casas que patrocina el match, el resultado será



const random = (min = 0, max = 20) =>
  Math.floor(Math.random() * (max - min)) + min;
const characters =
  "https://www.anapioficeandfire.com/api/characters?isAlive=true&pageSize=50&page=";
const houses = "https://www.anapioficeandfire.com/api/houses?pageSize=";

function getList(url, page) {
  return fetch(url + page)
    .then((res) => res.json())
    .then((data) => data)
}

function hasLetterList() {
  return getList(characters, random()).then(list => {
    const filteredList = list.filter((character) => character.name.includes('a'));
    return filteredList.map(({name, gender, titles})  => {
        return {name, gender, titles}
     })
  })
}

function femaleList() {
  return getList(characters, random()).then(list => {
    const filteredList = list.filter((character) => character.gender === "Female");
    return filteredList.map(value => {
        const{name, gender, titles} = value
        return {name, gender, titles}
    })
  })
}

async function match() {
  const [women, aNames] = await Promise.all([femaleList(), hasLetterList()]);
  women.sort((a, b) => b.titles.length - a.titles.length);
  aNames.sort((a, b) => b.titles.length - a.titles.length);

  const perfectMatch = women.map((pos, i) => [{characterOne: pos}, {characterTwo: aNames[i]}]);
  const pageSize = perfectMatch.length;
  const[housesList] = await getList(houses,pageSize)
  perfectMatch.map(match => match.push({house: housesList.name}))

  return perfectMatch
}
match().then(res => console.log(res)).catch(err => console.error('No hay personajes que mostrar'))
