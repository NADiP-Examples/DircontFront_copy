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
var environment_1 = require('environments/environment');
var captcha_component_1 = require('angular2-recaptcha/lib/captcha.component');
var SignupComponent = (function () {
    function SignupComponent(AuthService, notify, router, activatedRoute, translate) {
        this.AuthService = AuthService;
        this.notify = notify;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.email = '';
        this.password = '';
        this.password_double = '';
        this.role = 'admin_of_user';
        this.errors = {};
        this.env = environment_1.environment;
        this.role = this.activatedRoute.snapshot.data['role'];
    }
    SignupComponent.prototype.handleCorrectCaptcha = function () {
        this.captcha_token = this.captcha.getResponse();
    };
    SignupComponent.prototype.register = function () {
        var _this = this;
        this.errors = validation_service_1.Validation.ValidateRegister(this.email, this.password, this.password_double, this.captcha_token);
        if (!_.isEmpty(this.errors))
            return;
        this.AuthService.register(this.email, this.password, this.role, this.captcha_token)
            .subscribe(function () {
            _this.notify.success('Успешно!', 'Вы успешно зарегестрировались. Вам на почту отправлено письмо с подтверждением!');
            _this.router.navigate(['signin']);
        }, function (error) {
            if (error.errors)
                _this.errors = error.errors;
            if (error.message !== 'Validation failed')
                _this.notify.error('Ошибка!', _this.translate.instant(error.message));
        });
    };
    __decorate([
        core_1.ViewChild(captcha_component_1.ReCaptchaComponent)
    ], SignupComponent.prototype, "captcha", void 0);
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'signup',
            templateUrl: "./signup.component.html",
            styleUrls: ['../auth.component.sass'],
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
