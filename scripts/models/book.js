'use strict';
const __API_URL__ = 'https://djbookapp.herokuapp.com';

//this is test data
//var $content = $('.content');
//
//$.get(`${__API_URL__}/api/db`, data=> {
//  $content.append(data);
//});

Book.books = [];
function Book(author, title, isbn, img-url, description) {
  this.author = author;
  this.title = title;
  this.isbn = isbn;
  this.img-url = img-url;
  this.description = description;
}

Book.prototype.addBook = () => {
  $.post(`${__API_URL__}/api/db`, {author: this.author, title: this.title, isbn: this.isbn, img-url: this.img-url, description: this.description});
}
