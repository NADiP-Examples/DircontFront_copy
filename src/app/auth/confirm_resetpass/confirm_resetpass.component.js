"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var validation_service_1 = require('app/shared/services/validation.service');
var ConfirmResetPassComponent = (function () {
    function ConfirmResetPassComponent(AuthService, activatedRoute, router, notify) {
        this.AuthService = AuthService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.notify = notify;
        this.password = '';
        this.password_double = '';
        this.errors = {};
    }
    ConfirmResetPassComponent.prototype.confirm = function () {
        var _this = this;
        this.errors = {};
        var equals_pass_error = validation_service_1.Validation.equalsPasswords(this.password, this.password_double);
        var pass_error = validation_service_1.Validation.validatePassword(this.password);
        if (equals_pass_error.length) {
            this.errors.password_double = equals_pass_error;
            return;
        }
        if (pass_error.length) {
            this.errors.password = pass_error;
            return;
        }
        this.activatedRoute.queryParams.subscribe(function (params) {
            var email = params['email'];
            var key = params['key'];
            if (email && key)
                _this.AuthService.resetPassConform(email, key, _this.password).subscribe(function () { return _this.notify.success('Успешно!', 'Добро пожаловать!'); }, function () { return _this.router.navigate(['signin']); });
        });
    };
    ConfirmResetPassComponent = __decorate([
        core_1.Component({
            selector: 'confirmresetpass',
            templateUrl: './confirm_resetpass.component.html',
            styleUrls: ['../auth.component.sass'],
        })
    ], ConfirmResetPassComponent);
    return ConfirmResetPassComponent;
}());
exports.ConfirmResetPassComponent = ConfirmResetPassComponent;
