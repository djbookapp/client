'use strict';
var app = app || {};

(function(module) {
    var updateView = {};
    updateView.init = (ctx,next) => {
        var book;
        app.Book.books.forEach(el => {
            if (el.book_id == ctx.params.id) book = el;
        });

        var template = Handlebars.compile($('#update-template').text());
        $('.container').addClass('hidden');
        $('.update-view').empty();
        $('.update-view').removeClass('hidden');
        $('.update-view').append(template(book));

        $('#updatebookbutton').on('click', e => {
          e.preventDefault();
          book.author = $('#book-author').val();
          book.title = $('#book-title').val();
          book.isbn = $('#book-isbn').val();
          book.imgUrl = $('#book-img-url').val();
          book.description = $('#book-description').val();
          console.log(book);
          book.update();
        });

    }

    module.updateView = updateView;

})(app)
