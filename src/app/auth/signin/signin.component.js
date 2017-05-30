"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var validation_service_1 = require('app/shared/services/validation.service');
var _ = require("lodash");
var SigninComponent = (function () {
    function SigninComponent(AuthService, notify, translate) {
        this.AuthService = AuthService;
        this.notify = notify;
        this.translate = translate;
        this.email = '';
        this.password = '';
        this.errors = {};
    }
    SigninComponent.prototype.login = function () {
        var _this = this;
        this.errors = validation_service_1.Validation.ValidateLogin(this.email, this.password);
        if (!_.isEmpty(this.errors))
            return;
        this.AuthService.login(this.email, this.password)
            .subscribe(function () { return _this.notify.success('Успешно!', 'Добро пожаловать!'); }, function (error) {
            if (error.errors)
                _this.errors = error.errors;
            if (!(error.message === 'Validation failed' || error.message === 'User is inactive'))
                _this.notify.error('Ошибка!', _this.translate.instant(error.message));
            if (error.message === 'User is inactive')
                _this.AuthService.activateUser(_this.email)
                    .subscribe(function () { return _this.notify.error('Ошибка!', _this.translate.instant(error.message)); });
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'signin',
            templateUrl: "./signin.component.html",
            styleUrls: ['../auth.component.sass']
        })
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
