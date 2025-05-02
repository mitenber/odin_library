const screen = document.getElementById("shelf");
const addBookBtn = document.getElementById("add-book-btn");
const bookForm = document.getElementById("book-form");
const closeForm = document.getElementById("close-form");
const submitForm = document.getElementById("submit-book");

const myLibrary = [];

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, "Not Read");
addBookToLibrary("Wind and Truth", "Brandon Sanderson", 1334,"Read");
addBookToLibrary("Pyramids","Terry Pratchett", 368, "Reading" );
addBookToLibrary("True Believer", "Jack Carr", 497, "Read")

showBooks();

const removeBtns = document.querySelectorAll('.remove-btn')
const overlay = document.createElement("div");
overlay.className = "form-overlay";
document.body.appendChild(overlay);

addBookBtn.addEventListener("click", function() {
    bookForm.style.display = "block";
    overlay.style.display = "block";
})

closeForm.addEventListener("click", function() {
    bookForm.style.display = "none";
    overlay.style.display = "none";
})

submitForm.addEventListener("click", function() {
    let title = document.getElementById("book-title").value;
    let author = document.getElementById("book-author").value;
    let length = document.getElementById("book-length").value;
    let status = document.getElementById("book-status").value;

    addBookToLibrary(title,author,length,status);
    bookForm.style.display = "none";
    overlay.style.display = "none";
    screen.innerHTML = "";
    showBooks();
})

screen.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-btn')) {
        const index = parseInt(e.target.getAttribute('data-index'));
        myLibrary.splice(index, 1);
        screen.innerHTML = '';
        showBooks();
    }
});

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



function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].info());
        console.log(myLibrary[i].id);
        let book = document.createElement("div");
        book.className = "book-container";
        book.innerHTML = myLibrary[i].info();
        book.setAttribute('data-id', myLibrary[i].id);

        let removeBtn = document.createElement("button");
        removeBtn.className = 'remove-btn';
        removeBtn.id = 'remove-btn';
        removeBtn.textContent = "Remove"
        removeBtn.setAttribute('data-index', i);

        book.appendChild(removeBtn);
        screen.appendChild(book);
    }
}