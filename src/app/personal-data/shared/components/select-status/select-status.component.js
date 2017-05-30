"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SelectStatusComponent = (function () {
    function SelectStatusComponent() {
        this.onChangedResidence = new core_1.EventEmitter();
    }
    SelectStatusComponent.prototype.ngOnChanges = function (value) {
        if (value['loadComplete'])
            this.onLoadComplete();
    };
    SelectStatusComponent.prototype.onLoadComplete = function () {
        if (this.status['residency'] == 'other')
            this.tmp = this.tmp ? this.tmp : this.LEGAL_STATUSES.splice(1, 1);
        this.onChangedResidence.emit(this.status['residency']);
    };
    SelectStatusComponent.prototype.ngOnInit = function () {
    };
    SelectStatusComponent.prototype.changeResidence = function () {
        this.onChangedResidence.emit(this.status['residency']);
        // Немного костыльное решение -(
        if (this.status['residency'] == 'other') {
            this.status['legal_status'] = 'natural_person';
            this.tmp = this.LEGAL_STATUSES.splice(1, 1);
        }
        else {
            this.LEGAL_STATUSES.splice(1, 0, this.tmp[0]);
        }
    };
    __decorate([
        core_1.Input()
    ], SelectStatusComponent.prototype, "status", void 0);
    __decorate([
        core_1.Input()
    ], SelectStatusComponent.prototype, "loadComplete", void 0);
    __decorate([
        core_1.Input()
    ], SelectStatusComponent.prototype, "RESIDENCES", void 0);
    __decorate([
        core_1.Input()
    ], SelectStatusComponent.prototype, "LEGAL_STATUSES", void 0);
    __decorate([
        core_1.Output()
    ], SelectStatusComponent.prototype, "onChangedResidence", void 0);
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
