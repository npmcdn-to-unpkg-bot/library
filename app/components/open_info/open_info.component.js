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
var OpenInfoComponent = (function () {
    function OpenInfoComponent(apiService) {
        this.apiService = apiService;
        this.open_info = [];
        this.book = [];
    }
    OpenInfoComponent.prototype.getopenInfo = function () {
        var _this = this;
        this.apiService
            .post('open_info', {})
            .then(function (open) {
            _this.open_info = open;
        });
    };
    OpenInfoComponent.prototype.ngOnInit = function () {
        this.getopenInfo();
    };
    OpenInfoComponent = __decorate([
        core_1.Component({
            selector: 'open-info',
            templateUrl: 'app/components/open_info/open_info.html',
            directives: [],
            providers: [api_1.ApiService]
        }), 
        __metadata('design:paramtypes', [api_1.ApiService])
    ], OpenInfoComponent);
    return OpenInfoComponent;
}());
exports.OpenInfoComponent = OpenInfoComponent;
//# sourceMappingURL=open_info.component.js.map