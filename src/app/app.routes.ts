import { Routes } from '@angular/router';

//Other routes
import { authRoutes } from './auth/auth.routes'
import { personalDataRoutes } from './personal-data/personal-data.routers'
import { adminRoutes } from './admin/admin.routers'
import { employeesRoutes }   from 'app/employees/employees.routes';

//Layout components - компоненты обертки (компоненты, в которы встраиваются текущие компоненты)
import { CommonComponent } from './shared/layout_components/common/common.component';
import { AdminLayoutComponent } from './shared/layout_components/admin-layout/admin-layout.component'

//Other components
import { NotFoundComponent } from './not-found/not-found.comnponent';

//Guards
import { isLoggedIn, isHasId, isNotBlocked }   from 'app/shared/services/guard.service';

export const appRoutes: Routes = [
  { path: '', canActivate: [isLoggedIn], redirectTo: '/personal_data', pathMatch: 'full' },
  { path: '', children: authRoutes }, //auth
  {
    path: '', canActivate: [isLoggedIn], component: CommonComponent, children: [
    { path: 'personal_data', children: personalDataRoutes },
    { path: 'employees', canActivate: [isHasId, isNotBlocked], children: employeesRoutes},
    //  any routes with CommonComponent
  ]
  },
  { path: 'admin', component: AdminLayoutComponent, children: adminRoutes },
  { path: '**', component: NotFoundComponent }
];
