'use strict';
const __API_URL__ = 'https://djbookapp.herokuapp.com';

//this is test data
//var $content = $('.content');
//
//$.get(`${__API_URL__}/api/db`, data=> {
//  $content.append(data);
//});

Book.books = [];
function Book(bookObj) {
  Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);
}

Book.prototype.addBook = () => {
  $.post(`${__API_URL__}/api/db`, {author: this.author, title: this.title, isbn: this.isbn, img-url: this.img-url, description: this.description});
}

var numbook = function(){
  return this.books.length;
}
console.log(numbook);

Book.prototype.toHtml() = function() {
  return Handlebars.compile($('#book-list-template').text()); 
}

Book.prototype.loadBooks(rows) = function() {
  rows.sort((a,b) => a.title - b.title); 
  Book.books = rows.map(book => new Book(book));
}


  /* OLD forEach():
  rawData.forEach(articleObject => Article.all.push(new Article(articleObject)));
  */

Book.prototype.fetchBooks = callback => {
  $.ajax ({ 
     url:`${__API_URL__}/api/v1/books`,
     method: 'GET',
     error: errorView.errorCallback,
  })
    .then(data => {
      Books.loadBooks(data);
    })
    .then(callback);
};

