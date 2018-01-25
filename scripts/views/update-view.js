'use strict';

var app = app || {};
(function(module) {
    var updateView = {};
    updateView.init = (ctx,next) => {
        var book = {};
        app.Book.books.forEach(el => {
            if (el.id === ctx.id) {
                book = el;
                break;
            }
        });
        var template = Handlebars.compile($('#update-template').text());
        $('.container').addClass('hidden');
        $('.update-view').empty();
        $('.update-view').removeClass('hidden');
        $('.update-view').append(template(book));
    };
})(app)
