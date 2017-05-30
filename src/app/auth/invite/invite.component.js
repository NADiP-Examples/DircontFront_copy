"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var InviteComponent = (function () {
    function InviteComponent(AuthService, activatedRoute, router, notify) {
        var _this = this;
        this.AuthService = AuthService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.notify = notify;
        this.activatedRoute.queryParams.subscribe(function (params) {
            var email = params['email'];
            var key = params['key'];
            if (email && key)
                _this.AuthService.inviteConfirmUser(email, key).subscribe(function () { return _this.notify.success('Успешно!', 'Добро пожаловать!'); }, function () { return _this.router.navigate(['signin']); });
        });
    }
    InviteComponent = __decorate([
        core_1.Component({
            template: "",
        })
    ], InviteComponent);
    return InviteComponent;
}());
exports.InviteComponent = InviteComponent;
