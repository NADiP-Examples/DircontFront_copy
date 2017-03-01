import { Routes } from '@angular/router';

import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { ResetPassComponent } from './auth/resetpass.component';
import { ConfirmResetPassComponent } from './auth/confirm_resetpass.component';
import { NotFoundComponent } from './not-found/not-found.comnponent';
import { CommonComponent } from './common/common.component';
import { ActivateComponent } from './auth/activate.component'

import { ProfileComponent } from './profile/profile.comnponent';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';

import { isLoggedIn, isLoggedOut }   from './services/guard.service';

export const appRoutes: Routes = [
  {
    path: '', component: CommonComponent, canActivate: [isLoggedIn], children: [
    { path: '', redirectTo: '/profile', pathMatch: 'full' },
    {
      path: 'profile', component: ProfileComponent, children: [
      { path: '', component: ProfileViewComponent },
      { path: 'edit', component: ProfileEditComponent }
    ]
    },
  ]
  },
  { path: 'signin', canActivate: [isLoggedOut], component: SigninComponent },
  { path: 'signup', canActivate: [isLoggedOut], children: [
    { path: '', redirectTo: '/signup/admins_of_user', pathMatch: 'full' },
    { path: 'admins_of_user', component: SignupComponent, data: {role: 'admins_of_user'} },
    { path: 'partners', component: SignupComponent, data: {role: 'partners'} },
  ] },
  { path: 'activate', canActivate: [isLoggedOut], component: ActivateComponent },
  { path: 'reset_pass', canActivate: [isLoggedOut], component: ResetPassComponent },
  { path: 'confirm_reset_pass', canActivate: [isLoggedOut], component: ConfirmResetPassComponent },
  { path: '**', component: NotFoundComponent }
];
