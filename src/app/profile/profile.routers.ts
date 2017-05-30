import { Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';

export const profileRoutes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'one', component: ProfileComponent },
  { path: 'two', component: ProfileComponent },
  { path: 'three', component: ProfileComponent },
];
