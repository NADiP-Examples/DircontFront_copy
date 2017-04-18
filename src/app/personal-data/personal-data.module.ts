import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome'
import { TextMaskModule } from 'angular2-text-mask'
import { DatePickerModule } from 'app/ng2-datepicker/ng2-datepicker.module'
import { TranslateModule } from 'ng2-translate';
import { CustomFormsModule } from 'ng2-validation';

//custom Services
import { PersonalDataService } from 'app/shared/services/personal-data.service'
import { personalDataRoutes } from './personal-data.routers';

//custom Directives
import { RequiredFieldDirective } from 'app/shared/directives/required-field.directive';

//custom Components
import { PersonalDataEditComponent } from './personal-data-edit/personal-data-edit.component'
import { PersonalDataViewComponent } from './personal-data-view/personal-data-view.component'
import { UserDataComponent } from './shared/components/user-data/user-data.component'
import { SelectStatusComponent } from './shared/components/select-status/select-status.component'
import { SpoilerBlockComponent } from 'app/shared/components/spoiler-block/spoiler-block.component'
import { LocationComponent } from 'app/shared//components/location/location.component'
import { ContractDataNPComponent } from './shared/components/contract-data-n-p/contract-data-n-p.component'
import { ContractDataIEComponent } from './shared/components/contract-data-i-e/contract-data-i-e.component';
import { ContractDataLEComponent } from './shared/components/contract-data-l-e/contract-data-l-e.component';
import { BankDataComponentIE } from './shared/components/bank-data-ie/bank-data-ie.component'
import { BankDataComponentLE } from './shared/components/bank-data-le/bank-data-le.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Angular2FontAwesomeModule,
    RouterModule,
    TextMaskModule,
    DatePickerModule,
    TranslateModule,
    CustomFormsModule
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
    BankDataComponentIE,
    BankDataComponentLE,
    SpoilerBlockComponent,
    LocationComponent,
  ],
  providers: [
    PersonalDataService
  ]
})
export class PersonalDataModule {
}
