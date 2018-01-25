'use strict';
var app = app || {};

page('/', app.Book.prototype.fetchBooks(app.bookView.initIndex));
page('/books/new', app.addBookView.initAddBook);
page('/books/:id', app.Book.prototype.fetchOne, app.detailView.init);
page('*', () => page.redirect('/'));
page();
