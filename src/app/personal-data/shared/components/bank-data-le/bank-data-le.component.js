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
var BankDataComponentLE = (function () {
    function BankDataComponentLE(parentForm) {
        this.parentForm = parentForm;
        this.MASKS = global_data_1.MASKS;
    }
    BankDataComponentLE.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.controls.forEach(function (control) {
            _this.parentForm.addControl(control);
        });
    };
    BankDataComponentLE.prototype.ngOnDestroy = function () {
        var _this = this;
        this.controls.forEach(function (control) {
            _this.parentForm.removeControl(control);
        });
    };
    __decorate([
        core_1.ViewChildren(forms_1.NgModel)
    ], BankDataComponentLE.prototype, "controls", void 0);
    __decorate([
        core_1.Input()
    ], BankDataComponentLE.prototype, "personal_data", void 0);
    __decorate([
        core_1.Input()
    ], BankDataComponentLE.prototype, "form_view", void 0);
    BankDataComponentLE = __decorate([
        core_1.Component({
            selector: 'bank-data-le',
            templateUrl: './bank-data-le.component.html',
            styleUrls: ['./bank-data-le.component.sass']
        })
    ], BankDataComponentLE);
    return BankDataComponentLE;
}());
exports.BankDataComponentLE = BankDataComponentLE;
