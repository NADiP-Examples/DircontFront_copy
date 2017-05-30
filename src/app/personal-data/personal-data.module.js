"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
// import { RouterModule } from '@angular/router'
var forms_1 = require('@angular/forms');
var angular2_font_awesome_1 = require('angular2-font-awesome/angular2-font-awesome');
var angular2_text_mask_1 = require('angular2-text-mask');
var ng2_datepicker_module_1 = require('app/ng2-datepicker/ng2-datepicker.module');
var ng2_translate_1 = require('ng2-translate');
var ng2_validation_1 = require('ng2-validation');
//custom Services
var personal_data_service_1 = require('app/shared/services/personal-data.service');
//custom Directives
var required_field_directive_1 = require('app/shared/directives/required-field.directive');
//custom Module
var shared_module_1 = require('app/shared/shared.module');
//custom Components
var personal_data_edit_component_1 = require('./personal-data-edit/personal-data-edit.component');
var personal_data_view_component_1 = require('./personal-data-view/personal-data-view.component');
var user_data_component_1 = require('./shared/components/user-data/user-data.component');
var select_status_component_1 = require('./shared/components/select-status/select-status.component');
var contract_data_n_p_component_1 = require('./shared/components/contract-data-n-p/contract-data-n-p.component');
var contract_data_i_e_component_1 = require('./shared/components/contract-data-i-e/contract-data-i-e.component');
var contract_data_l_e_component_1 = require('./shared/components/contract-data-l-e/contract-data-l-e.component');
var bank_data_ie_component_1 = require('./shared/components/bank-data-ie/bank-data-ie.component');
var bank_data_le_component_1 = require('./shared/components/bank-data-le/bank-data-le.component');
var PersonalDataModule = (function () {
    function PersonalDataModule() {
    }
    PersonalDataModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular2_font_awesome_1.Angular2FontAwesomeModule,
                // RouterModule,
                angular2_text_mask_1.TextMaskModule,
                ng2_datepicker_module_1.DatePickerModule,
                ng2_translate_1.TranslateModule,
                ng2_validation_1.CustomFormsModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                personal_data_edit_component_1.PersonalDataEditComponent,
                personal_data_view_component_1.PersonalDataViewComponent,
                select_status_component_1.SelectStatusComponent,
                user_data_component_1.UserDataComponent,
                contract_data_n_p_component_1.ContractDataNPComponent,
                required_field_directive_1.RequiredFieldDirective,
                contract_data_i_e_component_1.ContractDataIEComponent,
                contract_data_l_e_component_1.ContractDataLEComponent,
                bank_data_ie_component_1.BankDataComponentIE,
                bank_data_le_component_1.BankDataComponentLE,
            ],
            providers: [
                personal_data_service_1.PersonalDataService
            ]
        })
    ], PersonalDataModule);
    return PersonalDataModule;
}());
exports.PersonalDataModule = PersonalDataModule;
