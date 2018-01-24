'use strict';
var app = app || {};

(function(module, Book) {
var bookView = {};

bookView.initAddBook = () => {
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

bookView.initIndex = () => {
  $('.container').hide();
  $('.book-view').show();
  Book.books.forEach(book => $('#booklist').append(book.toHtml()));
}
module.bookView = bookView;

})(app, app.Book)
