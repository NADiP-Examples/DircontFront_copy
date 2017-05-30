"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
// import * as _ from "lodash";
var global_data_1 = require('app/personal-data/global.data');
var UserDataComponent = (function () {
    function UserDataComponent(parentForm, notify, translateService, authService) {
        this.parentForm = parentForm;
        this.notify = notify;
        this.translateService = translateService;
        this.authService = authService;
        // TODO: Create class ValidateErrors
        this.errors = {};
        this.MASKS = global_data_1.MASKS;
    }
    UserDataComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.controls.forEach(function (control) {
            _this.parentForm.addControl(control);
        });
    };
    UserDataComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.controls.forEach(function (control) {
            _this.parentForm.removeControl(control);
        });
    };
    UserDataComponent.prototype.addPhone = function () {
        this.personal_data['phones'].push('');
    };
    UserDataComponent.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    UserDataComponent.prototype.changeEmail = function (emailBlock, changeEmailBlock) {
        emailBlock.hidden = true;
        changeEmailBlock.hidden = false;
    };
    UserDataComponent.prototype.confirmEmail = function (emailBlock, changeEmailBlock, form) {
        var _this = this;
        this.authService.changeEmail(form.controls['current_password'].value, form.controls['new_email'].value)
            .subscribe(function () {
            _this.notify.success("Подтвердите!", "Вам на почту отправлено письмо для подтверждения смены почты");
            emailBlock.hidden = false;
            changeEmailBlock.hidden = true;
        }, function (error) {
            error = error.json();
            if (error['message'] && error['message'] == 'Current password is incorrect')
                error = { errors: { current_password: ['password is incorrect'] } };
            _this.errors = error.errors ? error.errors : {};
        });
    };
    UserDataComponent.prototype.chancelChangeEmail = function (emailBlock, changeEmailBlock, form) {
        emailBlock.hidden = false;
        changeEmailBlock.hidden = true;
        // form.reset();
    };
    UserDataComponent.prototype.changePassword = function (passwordBlock, changePasswordBlock) {
        passwordBlock.hidden = true;
        changePasswordBlock.hidden = false;
    };
    UserDataComponent.prototype.confirmPassword = function (passwordBlock, changePasswordBlock, form) {
        var _this = this;
        if (form.controls['new_password'].value == form.controls['confirm_password'].value) {
            this.authService.changePassword(form.controls['old_password'].value, form.controls['new_password'].value)
                .subscribe(function () {
                _this.notify.success("Успешно!", "Пароль изменен");
                passwordBlock.hidden = false;
                changePasswordBlock.hidden = true;
                form.reset();
            }, function (error) {
                error = error.json();
                if (error['message'] && error['message'] == 'Current password is incorrect')
                    error = { errors: { current_password: ['password is incorrect'] } };
                _this.errors = error.errors ? error.errors : {};
            });
        }
        else {
            this.errors = {
                new_password: ['Passwords do not match.'],
                confirm_password: ['Passwords do not match.']
            };
        }
    };
    UserDataComponent.prototype.chancelChangePassword = function (passwordBlock, changePasswordBlock, form) {
        passwordBlock.hidden = false;
        changePasswordBlock.hidden = true;
        form.reset();
        this.errors = {};
    };
    UserDataComponent.prototype.removePhone = function (index) {
        this.personal_data['phones'].splice(index, 1);
    };
    __decorate([
        core_1.ViewChildren(forms_1.NgModel)
    ], UserDataComponent.prototype, "controls", void 0);
    __decorate([
        core_1.Input()
    ], UserDataComponent.prototype, "user_data", void 0);
    __decorate([
        core_1.Input()
    ], UserDataComponent.prototype, "personal_data", void 0);
    __decorate([
        core_1.Input()
    ], UserDataComponent.prototype, "form_view", void 0);
    UserDataComponent = __decorate([
        core_1.Component({
            selector: 'user-data',
            templateUrl: './user-data.component.html',
            styleUrls: ['./user-data.component.sass']
        })
    ], UserDataComponent);
    return UserDataComponent;
}());
exports.UserDataComponent = UserDataComponent;
