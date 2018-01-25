'use strict';
var app = app || {};

(function(module) {
  var detailView = {};

  detailView.init = (ctx,next) => {
    console.log(ctx.book);
    next();
  }

  module.detailView = detailView;

})(app)
