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
var router_2 = require('@angular/router');
var api_1 = require('../../../app/services/api');
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var LoginComponent = (function () {
    function LoginComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.model = { email: null, password: null };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.model);
        this.apiService
            .post('login', { 'user': JSON.parse(JSON.stringify(this.model)) })
            .then(function (login) {
            if (login.error) {
                console.log(login.error);
            }
            else {
                console.log('ok');
                ng2_cookies_1.Cookie.set('cookie.is', '1');
                ng2_cookies_1.Cookie.set('cookie.s', login.result.token);
                ng2_cookies_1.Cookie.set('lib_usr', login.result.first_name + ' ' + login.result.last_name);
                _this.router.navigateByUrl('home');
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/components/login/login.html',
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [api_1.ApiService, router_2.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map