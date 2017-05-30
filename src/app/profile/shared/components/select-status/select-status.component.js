"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CONSTANTS_1 = require('app/CONSTANTS');
var SelectStatusComponent = (function () {
    function SelectStatusComponent() {
        this.onChangeStatus = new core_1.EventEmitter();
        this.RESIDENCES = CONSTANTS_1.RESIDENCES;
        this.LEGAL_STATUSES = CONSTANTS_1.LEGAL_STATUSES.slice();
    }
    SelectStatusComponent.prototype.ngOnChanges = function (value) {
        // if (value['loadComplete']) this.onLoadComplete()
        console.log('ngOnChanges!!!');
        this.onChangeStatus.emit(this.status);
    };
    // onLoadComplete(){
    //   // console.log('Load Complete');
    //   if (this.status['residency'] == 'other') this.tmp = this.tmp ? this.tmp : this.LEGAL_STATUSES.splice(1, 1);
    //   this.onChangeStatus.emit(this.status['residency']);
    // }
    SelectStatusComponent.prototype.ngOnInit = function () {
        // this.status = this.status ? this.status : {};
    };
    SelectStatusComponent.prototype.changeResidency = function () {
        // console.log('inside sect status changeResidency');
        this.onChangeStatus.emit(this.status);
        if (this.status['residency'] == 'other') {
            this.status['legal_status'] = 'natural_person';
            this.LEGAL_STATUSES.splice(1, 1);
        }
        else {
            this.LEGAL_STATUSES = CONSTANTS_1.LEGAL_STATUSES.slice();
        }
    };
    SelectStatusComponent.prototype.changeLegalStatus = function () {
        this.onChangeStatus.emit(this.status);
    };
    __decorate([
        core_1.Input()
    ], SelectStatusComponent.prototype, "status", void 0);
    __decorate([
        core_1.Output()
    ], SelectStatusComponent.prototype, "onChangeStatus", void 0);
    SelectStatusComponent = __decorate([
        core_1.Component({
            selector: 'select-status',
            templateUrl: 'select-status.component.html',
            styleUrls: ['select-status.component.sass']
        })
    ], SelectStatusComponent);
    return SelectStatusComponent;
}());
exports.SelectStatusComponent = SelectStatusComponent;
