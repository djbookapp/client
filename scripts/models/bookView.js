'use strict';

bookView.initAddBook = () => {
  $('#add-book').on('submit', e => {
    e.preventDefault();
    let book = new Book($('#book-author').val(),$('#book-title').val(),$('#book-isbn').val(),$('#book-img-url').val(),$('#book-description').val());
    book.addBook();
  });
}



