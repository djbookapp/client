'use strict';
var app = app || {};

(function(module) {
    var updateView = {};
    updateView.init = (ctx,next) => {
        var book = {};
        app.Book.books.forEach(el => {
            if (el.id === ctx.id) {
                book = el;
            }
        });

        var template = Handlebars.compile($('#update-template').text());
        $('.container').addClass('hidden');
        $('.update-view').empty();
        $('.update-view').removeClass('hidden');
        $('.update-view').append(template(book));

        $('#updatebookbutton').on('submit', e => {
          e.preventDefault();
          book.author = $('#book-author').val();
          book.title = $('#book-title').val();
          book.isbn = $('#book-isbn').val();
          book.imgUrl = $('#book-img-url').val();
          book.description = $('#book-description').val();

          book.update();
          page.show(`/books/${book.id}`);
        });

    }

    module.updateView = updateView;

})(app)
