"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var global_data_1 = require('app/personal-data/global.data');
var ContractDataNPComponent = (function () {
    function ContractDataNPComponent(parentForm) {
        this.parentForm = parentForm;
        this.MASKS = global_data_1.MASKS;
        // this.options = new DatePickerOptions(
        //   {
        //     format: 'YYYY-MM-DD',
        //     autoApply: true,
        //     locale: 'ru'
        //   });
    }
    ContractDataNPComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.controls.forEach(function (control) {
            _this.parentForm.addControl(control);
        });
    };
    ContractDataNPComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.controls.forEach(function (control) {
            _this.parentForm.removeControl(control);
        });
    };
    ContractDataNPComponent.prototype.duplicateAddress = function () {
        this.personal_data['postal_address_postcode'] = this.personal_data['registration_address_postcode'];
        this.personal_data['postal_address_street'] = this.personal_data['registration_address_street'];
        if (this.personal_data['registration_address_country_id']) {
            this.personal_data['postal_address_country'] = { id: this.personal_data['registration_address_country_id'] };
        }
        if (this.personal_data['registration_address_region_id']) {
            this.personal_data['postal_address_region'] = { id: this.personal_data['registration_address_region_id'] };
        }
        if (this.personal_data['registration_address_city_id']) {
            this.personal_data['postal_address_city'] = { id: this.personal_data['registration_address_city_id'] };
        }
    };
    __decorate([
        core_1.ViewChildren(forms_1.NgModel)
    ], ContractDataNPComponent.prototype, "controls", void 0);
    __decorate([
        core_1.Input()
    ], ContractDataNPComponent.prototype, "personal_data", void 0);
    __decorate([
        core_1.Input()
    ], ContractDataNPComponent.prototype, "form_view", void 0);
    ContractDataNPComponent = __decorate([
        core_1.Component({
            selector: 'contract-data-np',
            templateUrl: 'contract-data-n-p.component.html',
            styleUrls: ['contract-data-n-p.component.sass']
        })
    ], ContractDataNPComponent);
    return ContractDataNPComponent;
}());
exports.ContractDataNPComponent = ContractDataNPComponent;
