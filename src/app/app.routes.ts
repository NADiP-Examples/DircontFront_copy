import { Routes } from '@angular/router';

//Other routes
import { authRoutes } from './auth/auth.routes'
import { personalDataRoutes } from './personal-data/personal-data.routers'
import { adminRoutes } from './admin/admin.routers'
import { employeesRoutes }   from 'app/employees/employees.routes';

//Layout components - компоненты обертки (компоненты, в которы встраиваются текущие компоненты)
import { CommonComponent } from './shared/layout_components/common/common.component';

//Other components
import { NotFoundComponent } from './not-found/not-found.comnponent';

//Guards
import { isLoggedIn }   from './shared/services/guard.service';
import { isHasId }   from 'app/shared/services/guard.service';

export const appRoutes: Routes = [
  { path: '', canActivate: [isLoggedIn], redirectTo: '/personal_data', pathMatch: 'full' },
  { path: '', children: authRoutes }, //auth
  {
    path: '', canActivate: [isLoggedIn], component: CommonComponent, children: [
    { path: 'personal_data', children: personalDataRoutes },
    { path: 'employees', canActivate: [isHasId], children: employeesRoutes},
    //  any routes with CommonComponent
  ]
  },
  { path: 'admin', children: adminRoutes },
  { path: '**', component: NotFoundComponent }
];
