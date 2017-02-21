import { Routes } from '@angular/router';

import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { ConfirmComponent } from './auth/confirm.component';
import { NotFoundComponent } from './not-found/not-found.comnponent';
import { CommonComponent } from './common/common.component';
import { ProfileComponent } from './profile/profile.comnponent';
import { isLoggedIn, isLoggedOut, isUserInactive, isUserActive }   from './services/guard.service';

export const appRoutes: Routes = [
  { path: '', component: CommonComponent, canActivate: [isLoggedIn, isUserActive], children: [
    { path: '', redirectTo: '/profile', pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent },
  ] },
  { path: 'confirmation', canActivate: [isLoggedIn, isUserInactive], component: ConfirmComponent },
  { path: 'signin', canActivate: [isLoggedOut], component: SigninComponent },
  { path: 'signup', canActivate: [isLoggedOut], component: SignupComponent },
  { path: '**', component: NotFoundComponent }
];
