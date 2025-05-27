let books = ["The Alchemist", "1984", "The Hobbit"];

function renderBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  for (let book of books) {
    const li = document.createElement("li");
    li.textContent = book;
    bookList.appendChild(li);
  }
}

function addBook() {
  const input = document.getElementById("bookInput");
  const newBook = input.value.trim();

  if (newBook) {
    books.push(newBook); // Add to array
    input.value = "";
    renderBooks();
  } else {
    alert("Please enter a book name!");
  }
}

function removeBook() {
  if (books.length > 0) {
    books.pop(); // Remove from array
    renderBooks();
  } else {
    alert("No books to remove!");
  }
}

// Initial render
renderBooks();
