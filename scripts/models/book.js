'use strict';
const __API_URL__ = 'https://djbookapp.herokuapp.com';
//const __API_URL__ = 'http://localhost:3737';

var app = app || {};

(function(module) {
  Book.books = [];
  function Book(bookObj) {
    Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);
  }

  Book.prototype.addBook = function() {
    $.post(`${__API_URL__}/api/db`, {author: this.author, title: this.title, isbn: this.isbn, imgUrl: this.imgUrl, description: this.description});
    $('.addbook-view input').val('');
    $('.addbook-view textarea').val('');
  }

  Book.prototype.toHtml = function() {
    var template = Handlebars.compile($('#book-list-template').text()); 
    return template(this);
  }

  Book.prototype.loadBooks = rows => {
    rows.sort((a,b) => a.title - b.title); 
    Book.books = rows.map(book => new Book(book));
  }

  Book.prototype.fetchBooks = callback => {
    $.ajax ({ 
       url:`${__API_URL__}/api/v1/books`,
       method: 'GET',
       error: app.errorCallback,
    })
    .then(data => {
       Book.prototype.loadBooks(data);
    })
   .then(callback);
  }

  Book.prototype.fetchOne = (ctx,next) => {
    $.ajax ({
      url: `${__API_URL__}/api/v1/books/${ctx.id}`,
      method: 'GET',
      error: app.errorCallback,
    }, data=>{console.log(data + ' ' + ctx.id);ctx.book=data;});
    next();
  }

  module.Book = Book;

})(app);
