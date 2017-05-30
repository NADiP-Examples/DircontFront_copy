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
var BankDataComponentIE = (function () {
    function BankDataComponentIE(parentForm) {
        this.parentForm = parentForm;
        this.bank_data_select = 'requisites';
        this.MASKS = global_data_1.MASKS;
    }
    BankDataComponentIE.prototype.ngOnChanges = function (value) {
        if (value['personal_data']) {
            var personal_data = value['personal_data']['currentValue'];
            if (personal_data['bankcard_number']) {
                this.bank_data_select = 'card';
            }
        }
    };
    BankDataComponentIE.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.controls.forEach(function (control) {
            _this.parentForm.addControl(control);
        });
    };
    BankDataComponentIE.prototype.ngOnDestroy = function () {
        var _this = this;
        this.controls.forEach(function (control) {
            _this.parentForm.removeControl(control);
        });
    };
    BankDataComponentIE.prototype.toggle_bank_data = function () {
        var _this = this;
        this.bank_data_select = this.bank_data_select == 'requisites' ? 'card' : 'requisites';
        this.controls.forEach(function (control) {
            _this.parentForm.removeControl(control);
            control.reset();
        });
        setTimeout(function () {
            _this.controls.forEach(function (control) {
                _this.parentForm.addControl(control);
            });
        }, 0);
    };
    __decorate([
        core_1.ViewChildren(forms_1.NgModel)
    ], BankDataComponentIE.prototype, "controls", void 0);
    __decorate([
        core_1.Input()
    ], BankDataComponentIE.prototype, "personal_data", void 0);
    __decorate([
        core_1.Input()
    ], BankDataComponentIE.prototype, "form_view", void 0);
    BankDataComponentIE = __decorate([
        core_1.Component({
            selector: 'bank-data-ie',
            templateUrl: './bank-data-ie.component.html',
            styleUrls: ['./bank-data-ie.component.sass']
        })
    ], BankDataComponentIE);
    return BankDataComponentIE;
}());
exports.BankDataComponentIE = BankDataComponentIE;
