import {Routes} from '@angular/router';

import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { NotFoundComponent } from './not-found/not-found.comnponent';
import { CommonComponent } from './common/common.component';
import { ProfileComponent } from './profile/profile.comnponent';

export const appRoutes: Routes =[
  { path: '', component: CommonComponent, children: [
    { path: '', redirectTo: '/profile', pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent },
  ] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: NotFoundComponent }
];
