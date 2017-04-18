import { Routes } from '@angular/router';

import { PersonalDataEditComponent } from './personal-data-edit/personal-data-edit.component';
import { PersonalDataViewComponent } from './personal-data-view/personal-data-view.component';

import { isHasId }   from 'app/shared/services/guard.service';

export const personalDataRoutes: Routes = [
  { path: '', canActivate: [isHasId], component: PersonalDataViewComponent },
  { path: 'edit', component: PersonalDataEditComponent }
];
