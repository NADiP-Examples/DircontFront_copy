"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var angular2_recaptcha_1 = require('angular2-recaptcha');
var ng2_translate_1 = require('ng2-translate');
var signin_component_1 = require('./signin/signin.component');
var signup_component_1 = require('./signup/signup.component');
var resetpass_component_1 = require('./resetpass/resetpass.component');
var confirm_resetpass_component_1 = require('./confirm_resetpass/confirm_resetpass.component');
var activate_component_1 = require('./activate/activate.component');
var invite_component_1 = require('./invite/invite.component');
var confirm_change_email_component_1 = require('./confirm-change-email/confirm-change-email.component');
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                angular2_recaptcha_1.ReCaptchaModule,
                router_1.RouterModule,
                ng2_translate_1.TranslateModule
            ],
            declarations: [
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
                activate_component_1.ActivateComponent,
                invite_component_1.InviteComponent,
                resetpass_component_1.ResetPassComponent,
                confirm_resetpass_component_1.ConfirmResetPassComponent,
                confirm_change_email_component_1.ConfirmChangeEmailComponent
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
