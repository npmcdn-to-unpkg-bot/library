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
var router_1 = require('@angular/router');
var latest_books_component_1 = require('../main_latest_books/latest_books.component');
var articles_component_1 = require('../articles/articles.component');
var open_info_component_1 = require('../open_info/open_info.component');
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main-component',
            templateUrl: 'app/components/main/main.html',
            directives: [router_1.ROUTER_DIRECTIVES, latest_books_component_1.LatestBooksComponent, articles_component_1.ArticlesComponent, open_info_component_1.OpenInfoComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map