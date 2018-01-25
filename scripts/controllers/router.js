'use strict';
var app = app || {};

page('/client', app.bookView.initIndex);
page('/books/new', app.addBookView.initAddBook);
page('/books/update', app.updateView.init);
page('/books/:id', app.Book.prototype.fetchOne, app.detailView.init);
page('*', () => page.redirect('/client'));
page();
