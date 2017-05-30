"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UserDataComponent = (function () {
    function UserDataComponent() {
        this.isFilledChange = new core_1.EventEmitter();
        this.open = false;
    }
    Object.defineProperty(UserDataComponent.prototype, "_", {
        // @ViewChild('second_name')
        // input_second_name;
        // Set Focus to input #second_name
        set: function (input_second_name) {
            if (input_second_name)
                input_second_name.nativeElement.focus();
        },
        enumerable: true,
        configurable: true
    });
    UserDataComponent.prototype.ngOnInit = function () {
    };
    UserDataComponent.prototype.ngOnChanges = function (value) {
        if (this.user_data['second_name'])
            this.open = true;
    };
    UserDataComponent.prototype.onSelect = function () {
        console.log(this.user_data);
        this.open = true;
    };
    UserDataComponent.prototype.next = function () {
        console.log('Next');
        this.isFilled = true;
        this.isFilledChange.emit(this.isFilled);
    };
    UserDataComponent.prototype.addPhone = function () {
        this.user_data['phones'].push('');
    };
    UserDataComponent.prototype.removePhone = function (index) {
        this.user_data['phones'].splice(index, 1);
    };
    UserDataComponent.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    __decorate([
        core_1.ViewChild('second_name')
    ], UserDataComponent.prototype, "_", null);
    __decorate([
        core_1.Input()
    ], UserDataComponent.prototype, "user_data", void 0);
    __decorate([
        core_1.Input()
    ], UserDataComponent.prototype, "isFilled", void 0);
    __decorate([
        core_1.Output()
    ], UserDataComponent.prototype, "isFilledChange", void 0);
    UserDataComponent = __decorate([
        core_1.Component({
            selector: 'user-data',
            templateUrl: './user-data.component.html',
            // providers: [ ApplicationService]
            styleUrls: ['./user-data.component.sass'],
            animations: [
                core_1.trigger('fadeInOut', [
                    core_1.transition(':enter', [
                        core_1.style({ opacity: 0 }),
                        core_1.animate(1000, core_1.style({ opacity: 1 }))
                    ]),
                    core_1.transition(':leave', [
                        core_1.animate(500, core_1.style({ opacity: 0 }))
                    ])
                ])
            ]
        })
    ], UserDataComponent);
    return UserDataComponent;
}());
exports.UserDataComponent = UserDataComponent;
