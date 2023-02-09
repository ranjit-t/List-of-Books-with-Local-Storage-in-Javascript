// class Books {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
// }

// class UI {
//   static displayBooks() {
//     const storedBooks = [
//       {
//         title: "Earth",
//         author: "Ran",
//         year: 2020,
//       },
//       {
//         title: "Venus",
//         author: "Ran",
//         year: 2021,
//       },
//     ];
//     //const books = storedBooks;
//     storedBooks.forEach((book) => {
//       UI.addBooktoList(book);
//     });
//   }
//   static addBooktoList(book) {
//     const list = document.querySelector("#booksList");
//     const row = document.createElement("tr");
//     row.innerHTML = `
//     <td>${book.title}</td>
//     <td>${book.author}</td>
//     <td>${book.year}</td>
//     <td><i class="fa fa-trash  btn btn-danger btn-sm" aria-hidden="true"></i></td>`;
//     list.appendChild(row);
//   }
// }

// document.addEventListener("DOMContentLoaded", UI.displayBooks);

// document.addEventListener("DOMContentLoaded", UI.displayBooks);

// document.querySelector("button").addEventListener("click", (e) => {
//   e.preventDefault();
//   const title = document.querySelector("#title").value;
//   const author = document.querySelector("#author").value;
//   const year = document.querySelector("#year").value;

//   const book = new Books(title, author, year);
//   UI.addBooktoList(book);
// });

class Books {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

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

class UI {
  static displayStoredBooks() {
    const storedBooks = [
      {
        title: "Our Planet",
        author: "Ran",
        year: 2020,
      },
      {
        title: "Greatest Minds",
        author: "Ran",
        year: 2021,
      },
    ];
    storedBooks.forEach((book) => {
      addBooktoList(book);
    });
  }
}

document.addEventListener("DOMContentLoaded", UI.displayStoredBooks);

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const year = document.querySelector("#year").value;

  const book = new Books(title, author, year);
  addBooktoList(book);
});
