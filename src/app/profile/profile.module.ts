import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { CommonModule } from '@angular/common';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

import { SharedModule } from 'app/shared/shared.module';

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
    ProfileComponent
  ]
})
export class ProfileModule {
}
