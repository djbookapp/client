'use strict';
var app = app || {};

(function(module, Book) {
  var addBookView = {};
  
  addBookView.initAddBook = () => {
    $('.container').hide();
    $('.addbook-view').show();

    $('.addbook-view').html('<form id="add-book"><fieldset><label for="book-author">Author:</label><input id="book-author" type="text"></fieldset><fieldset><label for="book-title">Title:</label><input id="book-title" type="text"></fieldset><fieldset><label for="book-isbn">ISBN:</label><input id="book-isbn" type="text"></fieldset><fieldset><label for="book-img-url">Image URL:</label><input id="book-img-url" type="text"></fieldset><fieldset><label for="book-description">Description:</label><textarea id="book-description"></textarea></fieldset><button type="submit">Add Book</button</form>');
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
