"use strict";
var router_1 = require('@angular/router');
var main_component_1 = require('../app/components/main/main.component');
var books_component_1 = require('../app/components/books/books.component');
var book_component_1 = require('../app/components/book/book.component');
exports.routes = [
    { path: '', component: main_component_1.MainComponent },
    { path: 'home', component: main_component_1.MainComponent },
    { path: 'list-books', component: books_component_1.BooksComponent, children: [
            { path: 'book/:id', component: book_component_1.BookComponent },
            { path: '', component: null },
        ] }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map