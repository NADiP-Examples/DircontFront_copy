import { Routes } from '@angular/router';

// import { PersonalDataComponent } from './personal-data.comnponent';
import { CommonComponent } from 'app/common/common.component'
import { PersonalDataEditComponent } from './personal-data-edit/personal-data-edit.component';
import { PersonalDataViewComponent } from './personal-data-view/personal-data-view.component';

import { isLoggedIn }   from 'app/services/guard.service';

export const personalDataRoutes: Routes = [
  {
    path: 'personal_data', canActivate: [isLoggedIn], component: CommonComponent, children: [
    { path: '', component: PersonalDataViewComponent },
    { path: 'edit', component: PersonalDataEditComponent }
  ]
  },
];
