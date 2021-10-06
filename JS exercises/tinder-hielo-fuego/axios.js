const axios = require("axios");

const random = (min = 0, max = 20) =>
  Math.floor(Math.random() * (max - min)) + min;
const characters =
  "https://www.anapioficeandfire.com/api/characters?isAlive=true&pageSize=50&page=";
const houses = "https://www.anapioficeandfire.com/api/houses?pageSize=";

async function getList(url, page) {
  const res = await axios.get(url + page, { responseType: "json" });
  return res.data;
}

async function hasLetterList() {
  const list = await getList(characters, random());
  const filteredList = list.filter((character) => character.name.includes("a"));
  return filteredList.map(({ name, gender, titles }) => {
    return { name, gender, titles };
  });
}

async function femaleList() {
  const list = await getList(characters, random());
  const filteredList = list.filter(
    (character) => character.gender === "Female"
  );
  return filteredList.map((value) => {
    const { name, gender, titles } = value;
    return { name, gender, titles };
  });
}

async function match() {
  const [women, aNames] = await Promise.all([femaleList(), hasLetterList()]);
  women.sort((a, b) => b.titles.length - a.titles.length);
  aNames.sort((a, b) => b.titles.length - a.titles.length);

  const perfectMatch = women.map((pos, i) => [
    { characterOne: pos },
    { characterTwo: aNames[i] }
  ]);
  const pageSize = perfectMatch.length;
  const [housesList] = await getList(houses, pageSize);
  perfectMatch.map((match) => match.push({ house: housesList.name }));

  return perfectMatch;
}
match()
  .then((res) => console.log(res))
  .catch((err) => console.error("No hay personajes que mostrar"));
