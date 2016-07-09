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
var ArticlesComponent = (function () {
    function ArticlesComponent(apiService) {
        this.apiService = apiService;
        this.articles = [];
        this.book = [];
        this.index = 1;
    }
    ArticlesComponent.prototype.getArticles = function () {
        var _this = this;
        this.apiService
            .post('articles', { page: this.index })
            .then(function (articles) {
            console.log('yyyyy');
            console.log(articles);
            _this.articles = articles.articles;
            _this.max = articles.all;
        });
    };
    ArticlesComponent.prototype.ngOnInit = function () {
        this.getArticles();
    };
    ArticlesComponent.prototype.prev = function () {
        if (this.index > 1) {
            this.index -= 1;
            this.getArticles();
        }
    };
    ArticlesComponent.prototype.next = function () {
        if (this.index * 3 < this.max) {
            this.index += 1;
            this.getArticles();
        }
    };
    ArticlesComponent = __decorate([
        core_1.Component({
            selector: 'articles',
            templateUrl: 'app/components/articles/articles.html',
            directives: [],
            providers: [api_1.ApiService]
        }), 
        __metadata('design:paramtypes', [api_1.ApiService])
    ], ArticlesComponent);
    return ArticlesComponent;
}());
exports.ArticlesComponent = ArticlesComponent;
//# sourceMappingURL=articles.component.js.map