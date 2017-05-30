"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ConfirmChangeEmailComponent = (function () {
    function ConfirmChangeEmailComponent(authService, activatedRoute, router, notify) {
        var _this = this;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.notify = notify;
        this.activatedRoute.queryParams.subscribe(function (params) {
            // let email = params['email'];
            var key = params['key'];
            if (key)
                _this.authService.confirmChangeEmail(key).subscribe(function () { return _this.notify.success('Успешно!', 'Email изменен'); }, function (error) {
                    _this.errors = error.json();
                    if (_this.errors && _this.errors['message'] == "Key does not exist") {
                        _this.notify.error('Ошибка!', 'Ссылка некорректна или устарела');
                    }
                    else if (_this.errors && _this.errors['message']) {
                        _this.notify.error('Ошибка!', _this.errors['message']);
                    }
                });
        });
    }
    ConfirmChangeEmailComponent = __decorate([
        core_1.Component({
            selector: 'activate',
            templateUrl: './confirm-change-email.component.html',
            styleUrls: ['./confirm-change-email.component.sass']
        })
    ], ConfirmChangeEmailComponent);
    return ConfirmChangeEmailComponent;
}());
exports.ConfirmChangeEmailComponent = ConfirmChangeEmailComponent;
