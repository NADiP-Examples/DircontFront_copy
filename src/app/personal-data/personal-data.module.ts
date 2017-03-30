import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome'
import { TextMaskModule } from 'angular2-text-mask'
import { DatePickerModule } from 'ng2-datepicker'

import { SharedModule } from 'app/shared/shared.module'

import { PersonalDataEditComponent } from './personal-data-edit/personal-data-edit.component'
import { PersonalDataViewComponent } from './personal-data-view/personal-data-view.component'
import { UserDataComponent } from './shared/user-data/user-data.component'
import { SelectStatusComponent } from './shared/select-status/select-status.component'

import { personalDataRoutes } from './personal-data-routing';
import { ContractDataNPComponent } from './shared/contract-data-n-p/contract-data-n-p.component'

//Directives
import { RequiredFieldDirective } from '../directives/required-field.directive';
import { ContractDataIEComponent } from './shared/contract-data-i-e/contract-data-i-e.component';
import { ContractDataLEComponent } from './shared/contract-data-l-e/contract-data-l-e.component';
import { BankDataComponent } from './shared/bank-data/bank-data.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Angular2FontAwesomeModule,
    RouterModule.forChild(personalDataRoutes),
    SharedModule,
    TextMaskModule,
    DatePickerModule,
  ],
  declarations: [
    PersonalDataEditComponent,
    PersonalDataViewComponent,
    SelectStatusComponent,
    UserDataComponent,
    ContractDataNPComponent,
    RequiredFieldDirective,
    ContractDataIEComponent,
    ContractDataLEComponent,
    BankDataComponent
  ]
})
export class PersonalDataModule {
}
