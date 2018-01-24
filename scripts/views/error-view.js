'use strict';

var app = app || {};

(function(module) {
  var errorView = {};

  errorView.initErrorPage = err => {
    var template = Handlebars.compile($('#error-template').text());
    $('.container').hide();
    $('#error-message').empty();
    $('#error-message').append(template(err));
    $('.error-view').show();
  }

  errorView.errorCallback = err => {
    console.log(err);
    errorView.initErrorPage(err);
  }

  module.errorCallback = errorView.errorCallback;

})(app)
