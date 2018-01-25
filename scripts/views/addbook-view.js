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
        author: $('#book-author').val(),
        title: $('#book-title').val(),
        isbn: $('#book-isbn').val(),
        imgUrl: $('#book-img-url').val(),
        description: $('#book-description').val()
      });
      book.addBook();
    });
  }

  module.addBookView = addBookView;

})(app, app.Book)