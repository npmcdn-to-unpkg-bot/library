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
var data_1 = require('../../../app/services/data');
var api_1 = require('../../../app/services/api');
var ng2_select_1 = require('ng2-select/ng2-select');
var SearchBooksComponent = (function () {
    function SearchBooksComponent(dataService, apiService, router) {
        this.dataService = dataService;
        this.apiService = apiService;
        this.router = router;
        this.selectData = {};
        this.optionsSelect = [];
        this.categories = {};
        this.allPages = [];
        this.page = 1;
        this.text = "";
        this.category = 1;
        this.type = "";
        this.books = [];
    }
    SearchBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectData = this.dataService.searchData();
        this.optionsSelect = this.dataService.optionsSelect();
        this.type = this.options()[0];
        this.apiService.post('categories', {})
            .then(function (categories) {
            _this.categories = categories.result;
        });
    };
    SearchBooksComponent.prototype.options = function () {
        return Object.values(this.selectData);
    };
    SearchBooksComponent.prototype.getCategories = function () {
        return Object.keys(this.categories);
    };
    SearchBooksComponent.prototype.setCategory = function (id) {
        if (this.categories[id.text] != null)
            this.category = this.categories[id.text];
    };
    SearchBooksComponent.prototype.search = function (search_button) {
        var _this = this;
        if (search_button === void 0) { search_button = true; }
        if (search_button) {
            this.page = 1;
        }
        this.apiService.post('books', { 'type': this.type, 'text': this.text, 'page': this.page, 'category': this.category })
            .then(function (books) {
            _this.books = books.result.books;
            _this.allPages = Array(books.all_pages).fill(1).map(function (x, i) { return i + 1; });
        });
        setTimeout(function () {
            _this.setActiveclassPagination(_this.page);
        }, 100);
    };
    SearchBooksComponent.prototype.setType = function (data) {
        console.log(data);
        for (var category in this.selectData) {
            if (this.selectData[category] == data.text)
                this.type = category;
        }
    };
    SearchBooksComponent.prototype.setPage = function (num) {
        this.page = num;
        this.search(false);
    };
    SearchBooksComponent.prototype.plusPage = function () {
        if (this.page < this.allPages.length) {
            this.page += 1;
            this.search(false);
        }
    };
    SearchBooksComponent.prototype.minusPage = function () {
        if (this.page > 1) {
            this.page -= 1;
            this.search(false);
        }
    };
    SearchBooksComponent.prototype.setActiveclassPagination = function (num) {
        for (var _i = 0, _a = this.paginate.nativeElement.children; _i < _a.length; _i++) {
            var test = _a[_i];
            test.classList = [];
        }
        this.paginate.nativeElement.children[num].classList.add('active');
    };
    SearchBooksComponent.prototype.onSelect = function (book) {
        this.router.navigate(['/list-books/book', book.id]);
    };
    __decorate([
        core_1.ViewChild('paginate'), 
        __metadata('design:type', core_1.ElementRef)
    ], SearchBooksComponent.prototype, "paginate", void 0);
    SearchBooksComponent = __decorate([
        core_1.Component({
            selector: 'search-books',
            templateUrl: 'app/components/search_books/search_books.html',
            directives: [router_1.ROUTER_DIRECTIVES, ng2_select_1.SELECT_DIRECTIVES],
            providers: [data_1.DataService, api_1.ApiService]
        }), 
        __metadata('design:paramtypes', [data_1.DataService, api_1.ApiService, router_1.Router])
    ], SearchBooksComponent);
    return SearchBooksComponent;
}());
exports.SearchBooksComponent = SearchBooksComponent;
//# sourceMappingURL=search_books.component.js.map