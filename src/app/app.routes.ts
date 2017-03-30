import { Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.comnponent';
import { CommonComponent } from './common/common.component';

import { isLoggedIn }   from './services/guard.service';

export const appRoutes: Routes = [
  {
    path: '', canActivate: [isLoggedIn], redirectTo:'/personal_data', pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];
