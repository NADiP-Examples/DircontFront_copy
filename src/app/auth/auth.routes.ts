import { Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPassComponent } from './resetpass/resetpass.component';
import { ConfirmResetPassComponent } from './confirm_resetpass/confirm_resetpass.component';
import { ActivateComponent } from './activate/activate.component'
import { ConfirmChangeEmailComponent } from './confirm-change-email/confirm-change-email.component'

import { isLoggedOut }   from '../services/guard.service';

export const authRoutes: Routes = [
  { path: 'signin', canActivate: [isLoggedOut], component: SigninComponent },
  { path: 'signup', canActivate: [isLoggedOut], children: [
    { path: '', redirectTo: '/signup/admins_of_user', pathMatch: 'full' },
    { path: 'admins_of_user', component: SignupComponent, data: {role: 'admins_of_user'} },
    { path: 'partners', component: SignupComponent, data: {role: 'partners'} },
  ] },
  { path: 'activate', canActivate: [isLoggedOut], component: ActivateComponent },
  { path: 'reset_pass', canActivate: [isLoggedOut], component: ResetPassComponent },
  { path: 'confirm_reset_pass', canActivate: [isLoggedOut], component: ConfirmResetPassComponent },
  { path: 'confirm_change_email', component: ConfirmChangeEmailComponent },
];
