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
var isLogged_1 = require('../../../app/services/isLogged');
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var HeaderComponent = (function () {
    function HeaderComponent(logged) {
        this.logged = logged;
    }
    HeaderComponent.prototype.User = function () {
        return ng2_cookies_1.Cookie.get('lib_usr');
    };
    //    set active class to element of menu
    HeaderComponent.prototype.menuClick = function (child) {
        for (var _i = 0, _a = this.menu.nativeElement.children; _i < _a.length; _i++) {
            var test = _a[_i];
            test.classList = [];
        }
        this.menu.nativeElement.children[parseInt(child)].classList.add('active_tab');
    };
    HeaderComponent.prototype.logout = function () {
        console.log('Wyloguj');
        ng2_cookies_1.Cookie.set('cookie.is', '0');
    };
    __decorate([
        core_1.ViewChild('menu'), 
        __metadata('design:type', core_1.ElementRef)
    ], HeaderComponent.prototype, "menu", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header',
            templateUrl: 'app/components/header/header.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [isLogged_1.IsLoggedService]
        }), 
        __metadata('design:paramtypes', [isLogged_1.IsLoggedService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map