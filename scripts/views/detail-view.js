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
    next();
  }

  module.detailView = detailView;

})(app)
