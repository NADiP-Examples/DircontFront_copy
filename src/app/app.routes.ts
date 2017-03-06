import { Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.comnponent';
import { CommonComponent } from './common/common.component';
import { ProfileComponent } from './profile/profile.comnponent';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';

import { isLoggedIn }   from './services/guard.service';

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
  { path: '**', component: NotFoundComponent }
];
