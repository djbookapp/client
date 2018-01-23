'use strict';
const __API_URL__ = 'https://djbookapp.herokuapp.com';

var $content = $('.content');

$.get(`${__API_URL__}/api/db`, data=> {
  $content.append(data));
});
