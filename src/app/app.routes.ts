import { Routes } from '@angular/router';

import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { NotFoundComponent } from './not-found/not-found.comnponent';
import { CommonComponent } from './common/common.component';
import { ProfileComponent } from './profile/profile.comnponent';
import { isLoggedIn, isLoggedOut }   from './services/guard.service';

export const appRoutes: Routes = [
  { path: '', component: CommonComponent, canActivate: [isLoggedIn], children: [
    { path: '', redirectTo: '/profile', pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent },
  ] },
  { path: 'signin', canActivate: [isLoggedOut], component: SigninComponent },
  { path: 'signup', canActivate: [isLoggedOut], component: SignupComponent },
  { path: '**', component: NotFoundComponent }
];
