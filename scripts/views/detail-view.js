'use strict';
var app = app || {};

(function(module) {
  var detailView = {};

  detailView.init = (ctx,next) => {
    console.log(ctx.book);
    var template = Handlebars.compile($('#detail-template').text());
    $('.container').addClass('hidden');
    $('.detail-view').empty();
    $('.detail-view').append(template(ctx.book[0]));
    $('.detail-view').removeClass('hidden');

    $('#updatebutton').on('click', () => {
      page.show(`/books/update/${ctx.book[0].id}`);
    })
    
    $('#deletebutton').on('click', () => {
        book.destroy();
        page.show('/client');
    });
  }

  module.detailView = detailView;

})(app)


