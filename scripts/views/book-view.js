'use strict';
var app = app || {};

(function(module, Book) {
  var bookView = {};

  bookView.initIndex = () => {
    $('.container').addClass('hidden');
    $('.book-view').empty();
    $('.book-view').html('<p>my books</p>');
    $('.book-view').removeClass('hidden');
    Book.books.forEach(book => $('#booklist').append(book.toHtml()));
  }

  module.bookView = bookView;

})(app, app.Book)
