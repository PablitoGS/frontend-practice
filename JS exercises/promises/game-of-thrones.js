const urlBooks= "https://www.anapioficeandfire.com/api/books/"

async function fetcher(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

function fetcher3(url) {
  return fetch(url)
    .then(res => res.json())
}


async function getBooks() {
  	let value = await fetcher(urlBooks)
    const allNames =  await value.map(value => `${value.name}, ${value.numberOfPages} pages`)

    return allNames
}

async function nChars() {
  const books = await fetcher(urlBooks)
  const res = books.map(value => `${value.name} has ${value.characters.length} characters`)
  return res
}

async function resumen() {
 	const[books, chars] = await Promise.all([getBooks(), nChars()])
    return books.map((book,i) => ({book, characters: chars[i]}))
}

async function output() {
	const res= await resumen()

    console.log(res)
}

 output()
