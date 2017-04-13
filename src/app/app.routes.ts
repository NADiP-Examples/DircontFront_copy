import { Routes } from '@angular/router';

//Other routes
import { authRoutes } from './auth/auth.routes'
import { personalDataRoutes } from './personal-data/personal-data.routers'

//Layout components - компоненты обертки (компоненты, в которы встраиваются текущие компоненты)
import { CommonComponent } from './shared/layout_components/common/common.component';

//Other components
import { NotFoundComponent } from './not-found/not-found.comnponent';

import { isLoggedIn }   from './shared/services/guard.service';

export const appRoutes: Routes = [
  { path: '', canActivate: [isLoggedIn], redirectTo: '/personal_data', pathMatch: 'full' },
  { path: '', children: authRoutes }, //auth
  {
    path: 'personal_data', canActivate: [isLoggedIn], component: CommonComponent, children: [
    { path: '', children: personalDataRoutes },
    //  any routes with CommonComponent
  ]
  },
  { path: '**', component: NotFoundComponent }
];
