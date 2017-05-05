import { Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component'

import { isHasId }   from 'app/shared/services/guard.service';

export const adminRoutes: Routes = [
  { path: '', redirectTo: 'personal_data', pathMatch: 'full' },
  { path: 'personal_data', component: AdminComponent },
];
