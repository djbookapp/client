'use strict';
//const __API_URL__ = 'https://djbookapp.herokuapp.com';
const __API_URL__ = 'http://localhost:3000';

//this is test data
//var $content = $('.content');
//
//$.get(`${__API_URL__}/api/db`, data=> {
//  $content.append(data);
//});

Book.books = [];
function Book(author, title, isbn, imgUrl, description) {
  this.author = author;
  this.title = title;
  this.isbn = isbn;
  this.imgUrl = imgUrl;
  this.description = description;
}

Book.prototype.addBook = () => {
  $.post(`${__API_URL__}/api/db`, {author: this.author, title: this.title, isbn: this.isbn, imgUrl: this.imgUrl, description: this.description});
}
