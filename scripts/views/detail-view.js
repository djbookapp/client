'use strict';
var app = app || {};

(function(module) {
  var detailView = {};

  detailView.init = (ctx,next) => {
    var template = Handlebars.compile($('#detail-template').text());
    $('.container').addClass('hidden');
    $('.detail-view').empty();
    $('.detail-view').append(template(ctx.book[0]));
    $('.detail-view').removeClass('hidden');

    $('#updatebutton').on('click', () => {
      page.show(`/books/update/${ctx.book[0].book_id}`);
    })
    
    $('#deletebutton').on('click', () => {
        var book = new app.Book(ctx.book[0]);
        book.destroy(book.fetchBooks(app.bookView.init));
    });
  }

  module.detailView = detailView;

})(app)


