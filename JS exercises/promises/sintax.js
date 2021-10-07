const urlBooks= "https://www.anapioficeandfire.com/api/books/1"

async function fetcher(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

function fetcher3(url) {
  return fetch(url)
    .then(res => res.json())
}

async function getName() {
	const bookName = await fetcher3(urlBooks)
  return console.log(bookName.name)
}

getName()
