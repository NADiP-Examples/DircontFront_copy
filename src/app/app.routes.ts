import { Routes } from '@angular/router';

import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { ResetPassComponent } from './auth/resetpass.component';
import { ConfirmResetPassComponent } from './auth/confirm_resetpass.component';
import { NotFoundComponent } from './not-found/not-found.comnponent';
import { CommonComponent } from './common/common.component';
import { ProfileComponent } from './profile/profile.comnponent';
import { ActivateComponent } from './auth/activate.component'
import { isLoggedIn, isLoggedOut}   from './services/guard.service';

export const appRoutes: Routes = [
  { path: '', component: CommonComponent, canActivate: [isLoggedIn], children: [
    { path: '', redirectTo: '/profile', pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent },
  ] },
  { path: 'signin', canActivate: [isLoggedOut], component: SigninComponent },
  { path: 'signup', canActivate: [isLoggedOut], component: SignupComponent },
  { path: 'activate', canActivate: [isLoggedOut], component: ActivateComponent },
  { path: 'reset_pass', canActivate: [isLoggedOut], component: ResetPassComponent },
  { path: 'confirm_reset_pass', canActivate: [isLoggedOut], component: ConfirmResetPassComponent },
  { path: '**', component: NotFoundComponent }
];
