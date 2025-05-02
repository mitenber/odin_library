let screen = document.getElementById("shelf");


const myLibrary = [];

function Book(name, author, length, status) {
    if (!new.target) {
        throw Error("You must use 'new' operator to call the book")
    }

    this.name = name;
    this.author = author;
    this.length = length;
    this.status = status;
    this.id = crypto.randomUUID();

    this.info = function() {
        return name + " by " + author + ", " + length + " pages, " + status;
    }

}


function addBookToLibrary(name, author, length, status) {
  // take params, create a book then store it in the array
  const book = new Book(name, author, length, status);
  myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, "Not Read");
addBookToLibrary("Wind and Truth", "Brandon Sanderson", 1334,"Read");
addBookToLibrary("Pyramids","Terry Pratchett", 368, "Reading" );
addBookToLibrary("True Believer", "Jack Carr", 497, "Read")

for (i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].info());
    console.log(myLibrary[i].id);
    let book = document.createElement("div");
    book.className = "book-container";
    book.innerHTML = myLibrary[i].info();
    screen.appendChild(book);
}