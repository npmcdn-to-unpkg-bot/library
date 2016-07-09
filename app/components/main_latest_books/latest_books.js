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
var LastestbooksComponent = (function () {
    function LastestbooksComponent(apiService) {
        this.apiService = apiService;
        this.latest_books = [];
    }
    LastestbooksComponent.prototype.getLatestBooks = function () {
        var _this = this;
        this.apiService
            .post('latest_books', {})
            .then(function (books) { return _this.latest_books = books; });
    };
    LastestbooksComponent.prototype.ngOnInit = function () {
        this.getLatestBooks();
    };
    LastestbooksComponent = __decorate([
        core_1.Component({
            selector: 'latest-books',
            templateUrl: 'app/components/main_latest_books/latest_books.html',
            directives: [],
            providers: [api_1.ApiService]
        }), 
        __metadata('design:paramtypes', [api_1.ApiService])
    ], LastestbooksComponent);
    return LastestbooksComponent;
}());
exports.LastestbooksComponent = LastestbooksComponent;
//# sourceMappingURL=latest_books.js.map