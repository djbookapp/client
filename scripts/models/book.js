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
    $.post(`${__API_URL__}/api/db`, {author: this.author, title: this.title, isbn: this.isbn, imgUrl: this.imgUrl, description: this.description})
      .then(this.fetchBooks(() => {
        $('.addbook-view input').val('');
        $('.addbook-view textarea').val('');
      }
    ));

  }

  Book.prototype.update = function() {
    $.ajax({
      url: `${__API_URL__}/api/db/${this.book_id}`,
      method: 'POST',
      headers: {"X-HTTP-Method-Override": "PUT"},
      contentType: 'application/json',
      data: {author: this.author, title: this.title, isbn: this.isbn, imgUrl: this.imgUrl, description: this.description},
    })
  }

  Book.prototype.destroy = function() {
    $.delete(`${__API_URL__}/api/db/${this.id}`);
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

  Book.prototype.fetchOne = function (ctx,next) {
    $.ajax ({
      url: `${__API_URL__}/api/v1/books/${ctx.params.id}`,
      method: 'GET',
      error: app.errorCallback,
    })
    .then(data => {
      ctx.book=data;
      next();
    })
  }

  module.Book = Book;

})(app);
