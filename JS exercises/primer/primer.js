var favoriteBooks = [];
var toReadBooks = [];

function addFavoriteBook(bookName) {
 if(!bookName.includes("Great")) {
   favoriteBooks.push(bookName)
 } else {
   toReadBooks.push(bookName)
 }
}

function printFavoriteBooks() {
  console.log(`My favorite books are these ${favoriteBooks.length}`);
  for(let book of favoriteBooks) {
    console.log(`* ${book}`)
  }
  console.log(`And I have ${toReadBooks.length} books to read`);
  for(let book of toReadBooks) {
    console.log(`* ${book}`)
  }
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks();
