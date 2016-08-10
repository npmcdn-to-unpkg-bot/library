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
var user_registration_1 = require('../../classes/user_registration');
var api_1 = require('../../../app/services/api');
var RegistrationComponent = (function () {
    function RegistrationComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.model = new user_registration_1.UserRegistration();
    }
    RegistrationComponent.prototype.registration = function () {
        var _this = this;
        this.apiService
            .post('signup', { 'user': JSON.parse(JSON.stringify(this.model)) })
            .then(function (registration) {
            if (registration.error) {
                alert(registration.error[0]);
            }
            else {
                alert('Rejestracja przebiegła pomyslnie');
                _this.router.navigateByUrl('home');
            }
        });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'registration',
            templateUrl: 'app/components/registration/registration.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [api_1.ApiService]
        }), 
        __metadata('design:paramtypes', [api_1.ApiService, router_2.Router])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map