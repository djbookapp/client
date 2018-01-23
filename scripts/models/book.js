'use strict';
const __API_URL__ = 'https://djbookapp.herokuapp.com';
//const __API_URL__ = 'http://localhost:3000';

Book.books = [];
function Book(bookObj) {
  Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);
}

Book.prototype.addBook = function() {
  $.post(`${__API_URL__}/api/db`, {author: this.author, title: this.title, isbn: this.isbn, imgUrl: this.imgUrl, description: this.description});
}

var numbook = function(){
  return this.books.length;
}

Book.prototype.toHtml = () => {
  return Handlebars.compile($('#book-list-template').text()); 
}

Book.prototype.loadBooks = rows => {
  rows.sort((a,b) => a.title - b.title); 
  Book.books = rows.map(book => new Book(book));
}

Book.prototype.fetchBooks = callback => {
  $.ajax ({ 
     url:`${__API_URL__}/api/v1/books`,
     method: 'GET',
     error: errorView.errorCallback,
  })
  .then(data => {
     Books.loadBooks(data);
  })
  .then(callback);
}
