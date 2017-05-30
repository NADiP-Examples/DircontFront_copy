import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { CommonModule } from '@angular/common';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

import { SharedModule } from 'app/shared/shared.module';

import { SelectStatusComponent } from './shared/components/select-status/select-status.component';
import { UserDataComponent } from './shared/components/user-data/user-data.component';
import { UserDataViewComponent } from './shared/components/user-data-view/user-data-view.component';
import { CompanyDataComponent } from './shared/components/company-data/company-data.component';
import { CompanyDataViewComponent } from './shared/components/company-data-view/company-data-view.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    FormsModule,
    CustomFormsModule,
    SharedModule,
    CommonModule,
    Angular2FontAwesomeModule
  ],
  declarations: [
    SelectStatusComponent,
    UserDataComponent,
    UserDataViewComponent,
    CompanyDataComponent,
    CompanyDataViewComponent,
    ProfileComponent
  ]
})
export class ProfileModule {
}
