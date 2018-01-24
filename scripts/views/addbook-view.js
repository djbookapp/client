'use strict';
var app = app || {};

(function(module) {
  var addBookView = {};

  addBookView.initAddBookPage = () => {
    $('.container').hide();
    $('.addbook-view').show();
  }

  module.addBookView = addBookView;
})(app)
