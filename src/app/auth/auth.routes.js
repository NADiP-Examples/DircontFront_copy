"use strict";
var signin_component_1 = require('./signin/signin.component');
var signup_component_1 = require('./signup/signup.component');
var resetpass_component_1 = require('./resetpass/resetpass.component');
var confirm_resetpass_component_1 = require('./confirm_resetpass/confirm_resetpass.component');
var activate_component_1 = require('./activate/activate.component');
var invite_component_1 = require('./invite/invite.component');
var confirm_change_email_component_1 = require('./confirm-change-email/confirm-change-email.component');
var guard_service_1 = require('app/shared/services/guard.service');
exports.authRoutes = [
    { path: 'signin', canActivate: [guard_service_1.isLoggedOut], component: signin_component_1.SigninComponent },
    { path: 'signup', canActivate: [guard_service_1.isLoggedOut], children: [
            { path: '', redirectTo: '/signup/admin_of_user', pathMatch: 'full' },
            { path: 'admin_of_user', component: signup_component_1.SignupComponent, data: { role: 'admin_of_user' } },
            { path: 'partner', component: signup_component_1.SignupComponent, data: { role: 'partner' } },
        ] },
    { path: 'activate', canActivate: [guard_service_1.isLoggedOut], component: activate_component_1.ActivateComponent },
    { path: 'reset_pass', canActivate: [guard_service_1.isLoggedOut], component: resetpass_component_1.ResetPassComponent },
    { path: 'confirm_reset_pass', canActivate: [guard_service_1.isLoggedOut], component: confirm_resetpass_component_1.ConfirmResetPassComponent },
    { path: 'confirm_change_email', component: confirm_change_email_component_1.ConfirmChangeEmailComponent },
    { path: 'invite', canActivate: [guard_service_1.isLoggedOut], component: invite_component_1.InviteComponent },
];
