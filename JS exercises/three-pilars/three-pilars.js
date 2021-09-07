class Bookshelf {
  constructor() {
		this.favoriteBooks = [];
	}

  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }

  printFavoriteBooks() {
    console.log(`My favorite books are these ${String(this.favoriteBooks.length)}`);
    for(let book of this.favoriteBooks) {
      console.log(`* ${book}`)
    }
  }
}

function loadBooks(books) {
  fakeAjax(BOOK_API, function(bookNames) { 
    for(let index of bookNames) {
    	books.addFavoriteBook(index);
    }
  	books.printFavoriteBooks();
  }
           
 )
}

var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf();
loadBooks(myBooks);
// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
