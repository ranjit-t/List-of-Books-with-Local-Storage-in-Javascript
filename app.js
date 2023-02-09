class Books {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

//
//Storage Class
//

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static remove(title) {
    const books = Store.getBooks();
    books.forEach((book, idx) => {
      if (book.title === title) {
        books.splice(idx, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

//
// Function that is adding books
//
function addBooktoList(book) {
  const list = document.querySelector("#booksList");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.year}</td>
    <td><i class="fa fa-trash  btn btn-danger btn-sm" aria-hidden="true"></i></td>`;
  list.appendChild(row);
}

//
// Function that is displaying books
//

function displayStoredBooks() {
  Store.getBooks().forEach((book) => {
    addBooktoList(book);
  });
}

//
//
//DOM Event to display in UI
//

document.addEventListener("DOMContentLoaded", displayStoredBooks);

//
//
//DOM Event to add an instant book in UI
//

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const year = document.querySelector("#year").value;
  if (title && author && year) {
    const book = new Books(title, author, year);
    Store.addBook(book);
    addBooktoList(book);
    message("success");
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#year").value = "";
  } else {
    message("failed");
  }
});

//
// DOM to Remove Book
//

let rows = document.querySelector("tr");
document.querySelector("#booksList").addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    e.target.parentElement.parentElement.remove();
    Store.remove(
      e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling
        .innerHTML
    );
    message("removed");
  }
});
//
//
// Creating a function for Alerting
//
//
function message(status) {
  if (status === "failed") {
    const message = document.createElement("div");
    message.innerHTML = `<div class="alert alert-danger">Please Fill in All Fields</div>`;
    const form = document.querySelector("form");
    const container = document.querySelector(".container");
    container.insertBefore(message, form);
    setTimeout(() => {
      message.remove();
    }, 2000);
  } else if (status === "success") {
    const message = document.createElement("div");
    message.innerHTML = `<div class="alert alert-success">Book Added</div>`;
    const form = document.querySelector("form");
    const container = document.querySelector(".container");
    container.insertBefore(message, form);
    setTimeout(() => {
      message.remove();
    }, 2000);
  } else {
    const message = document.createElement("div");
    message.innerHTML = `<div class="alert alert-info">Book Removed</div>`;
    const form = document.querySelector("form");
    const container = document.querySelector(".container");
    container.insertBefore(message, form);
    setTimeout(() => {
      message.remove();
    }, 2000);
  }
}
