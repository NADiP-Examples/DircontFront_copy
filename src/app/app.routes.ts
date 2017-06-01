import { Routes } from '@angular/router';

//Other routes
import { authRoutes } from './auth/auth.routes'
import { personalDataRoutes } from './personal-data/personal-data.routers';
import { employeesRoutes }   from 'app/employees/employees.routes';
import { fileSharingRoutes } from 'app/file-sharing/file-sharing.routes';
import { profileRoutes } from 'app/profile/profile.routers';
import { designDemoRoutes } from 'app/design-demo/design-demo.routes'

//Layout components - компоненты обертки (компоненты, в которы встраиваются текущие компоненты)
import { DashboardLayoutComponent } from './shared/layout_components/dashboard_layout/dashboard_layout.component'

//Other components
import { NotFoundComponent } from './not-found/not-found.comnponent';

//Guards
import { isLoggedIn, isHasId, isNotBlocked }   from 'app/shared/services/guard.service';

export const appRoutes: Routes = [
  { path: '', canActivate: [isLoggedIn], redirectTo: '/profile', pathMatch: 'full' },
  { path: '', children: authRoutes }, //auth
  { path: 'demo', component: DashboardLayoutComponent, data:{type:'demo'}, children: designDemoRoutes },
  {
    path: '', canActivate: [isLoggedIn], component: DashboardLayoutComponent, children: [
    { path: 'personal_data', children: personalDataRoutes },
    { path: 'profile', children: profileRoutes },
    { path: 'file-sharing', children: fileSharingRoutes },
    { path: 'employees', canActivate: [isHasId, isNotBlocked], children: employeesRoutes },
    //  any routes with DashboardLayoutComponent
  ]
  },
  { path: '**', component: NotFoundComponent }
];
