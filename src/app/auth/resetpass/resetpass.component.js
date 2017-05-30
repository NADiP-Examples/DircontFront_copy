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
var ResetPassComponent = (function () {
    function ResetPassComponent(AuthService, notify, router, translate) {
        this.AuthService = AuthService;
        this.notify = notify;
        this.router = router;
        this.translate = translate;
        this.email = '';
        this.errors = {};
    }
    ResetPassComponent.prototype.reset = function () {
        var _this = this;
        this.errors = {};
        var mail_error = validation_service_1.Validation.validateEmail(this.email);
        if (mail_error.length)
            this.errors.email = mail_error;
        if (!_.isEmpty(this.errors))
            return;
        this.AuthService.resetPass(this.email)
            .subscribe(function () {
            _this.notify.success('Успешно!', 'Вам на почту отправлено письмо для восстановления пароля!');
            _this.router.navigate(['signin']);
        }, function (error) {
            if (error.errors)
                _this.errors = error.errors;
            if (error.message !== 'Validation failed')
                _this.notify.error('Ошибка!', _this.translate.instant(error.message));
        });
    };
    ResetPassComponent = __decorate([
        core_1.Component({
            selector: 'resetpass',
            templateUrl: "./resetpass.component.html",
            styleUrls: ['../auth.component.sass'],
        })
    ], ResetPassComponent);
    return ResetPassComponent;
}());
exports.ResetPassComponent = ResetPassComponent;
