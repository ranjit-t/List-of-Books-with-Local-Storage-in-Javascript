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

let storedBooks = [
  {
    title: "Silva Mind Control Technique",
    author: "José Silva",
    year: 2020,
  },
  {
    title: "Peaks and Valleys",
    author: "Johnson",
    year: 2021,
  },
];

class UI {
  static displayStoredBooks() {
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
  if (title && author && year) {
    const book = new Books(title, author, year);
    storedBooks.push(book);
    addBooktoList(book);
    message("success");
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#year").value = "";
  } else {
    message("failed");
  }
});

let rows = document.querySelector("tr");
document.querySelector("#booksList").addEventListener("click", (e) => {
  e.target.nodeName === "I" && e.target.parentElement.parentElement.remove();
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
  } else {
    const message = document.createElement("div");
    message.innerHTML = `<div class="alert alert-success">Book Added</div>`;
    const form = document.querySelector("form");
    const container = document.querySelector(".container");
    container.insertBefore(message, form);
    setTimeout(() => {
      message.remove();
    }, 2000);
  }
}
