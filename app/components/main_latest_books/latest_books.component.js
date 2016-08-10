"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { ROUTER_DIRECTIVES } from '@angular/router'
var api_1 = require('../../../app/services/api');
var LatestBooksComponent = (function () {
    function LatestBooksComponent(apiService) {
        this.apiService = apiService;
        this.latest_books = [];
        this.book = [];
        this.index = 0;
    }
    LatestBooksComponent.prototype.getLatestBooks = function () {
        var _this = this;
        this.apiService
            .post('latest_books', {})
            .then(function (books) {
            _this.latest_books = books.result;
            _this.setBook();
        });
    };
    LatestBooksComponent.prototype.ngOnInit = function () {
        this.getLatestBooks();
    };
    LatestBooksComponent.prototype.setBook = function () {
        this.book = this.latest_books[this.index];
    };
    LatestBooksComponent.prototype.prev = function () {
        if (this.index > 0) {
            this.index -= 1;
            this.setBook();
        }
    };
    LatestBooksComponent.prototype.next = function () {
        if (this.index < this.latest_books.length - 1) {
            this.index += 1;
            this.setBook();
        }
    };
    LatestBooksComponent = __decorate([
        core_1.Component({
            selector: 'latest-books',
            templateUrl: 'app/components/main_latest_books/latest_books.html',
            directives: [],
            providers: [api_1.ApiService]
        }), 
        __metadata('design:paramtypes', [api_1.ApiService])
    ], LatestBooksComponent);
    return LatestBooksComponent;
}());
exports.LatestBooksComponent = LatestBooksComponent;
//# sourceMappingURL=latest_books.component.js.map