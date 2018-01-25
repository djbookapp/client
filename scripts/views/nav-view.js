'use strict';

var app = app || {};

(function(module) {
  var navView = {};

  navView.init = () => {
    $('.icon-menu').on('click', () => {
      $('.menu-item').toggleClass('hidden');
    });

    $('#addbook').on('click', () => {
      $('.menu-item').toggleClass('hidden');
      page.show('/books/new');
    });

    $('#allbooks').on('click', () => {
      $('.menu-item').toggleClass('hidden');
      page.show('/');
    });
  }

  module.navView = navView;
})(app)
