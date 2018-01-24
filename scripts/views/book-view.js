'use strict';
var app = app || {};

(function(module, Book) {
  var bookView = {};

  bookView.initIndex = () => {
    $('.container').hide();
    $('.book-view').show();
    Book.books.forEach(book => $('#booklist').append(book.toHtml()));
  }

  module.bookView = bookView;

})(app, app.Book)
