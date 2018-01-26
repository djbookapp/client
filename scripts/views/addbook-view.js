'use strict';
var app = app || {};

(function(module, Book) {
  var addBookView = {};
  
  addBookView.initAddBook = () => {
    $('.container').addClass('hidden');
    $('.addbook-view').removeClass('hidden');
    $('#add-book').on('submit', e => {
      e.preventDefault();
      let book = new Book({
        author: $('#ab-book-author').val(),
        title: $('#ab-book-title').val(),
        isbn: $('#ab-book-isbn').val(),
        imgUrl: $('#ab-book-img-url').val(),
        description: $('#ab-book-description').val()
      });
      book.addBook();
    });
  }

  module.addBookView = addBookView;

})(app, app.Book)
