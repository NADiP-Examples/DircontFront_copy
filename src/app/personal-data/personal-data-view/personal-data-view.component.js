"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var personal_data_edit_component_1 = require('app/personal-data/personal-data-edit/personal-data-edit.component');
var PersonalDataViewComponent = (function () {
    function PersonalDataViewComponent(personalDataService, router, fileService) {
        this.personalDataService = personalDataService;
        this.router = router;
        this.fileService = fileService;
        this.user_data = {};
        this.RESIDENCES = personal_data_edit_component_1.RESIDENCES;
        this.LEGAL_STATUSES = personal_data_edit_component_1.LEGAL_STATUSES;
        this.personal_data = {
            phones: [],
            postal_address_country: '',
            postal_address_region: '',
            postal_address_city: '',
            registration_address_country: '',
            registration_address_region: '',
            registration_address_city: '',
        };
        this.status = {
            legal_status: {},
            residency: {},
        };
        this.contractUrl = '';
        this.cardUrl = '';
    }
    Object.defineProperty(PersonalDataViewComponent.prototype, "full_name", {
        get: function () {
            return this.personal_data['second_name'] + " " + this.personal_data['first_name'] + " " + this.personal_data['patronymic'];
        },
        enumerable: true,
        configurable: true
    });
    PersonalDataViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personalDataService.getSelf()
            .subscribe(function (user) {
            _this.user_data = user;
            _this.fileService.getDocumentUrl(user.id, 'contract')
                .subscribe(function (data) { return _this.contractUrl = data.url; });
            _this.fileService.getDocumentUrl(user.id, 'business_card')
                .subscribe(function (data) { return _this.cardUrl = data.url; });
        });
        this.personalDataService.getPersonalData()
            .subscribe(function (personal_data) {
            _this.personal_data = personal_data;
            _this.personal_data['_type'] = _this.user_data['type'];
        });
    };
    PersonalDataViewComponent.prototype.edit = function () {
        this.router.navigate(['personal_data', 'edit']);
    };
    PersonalDataViewComponent = __decorate([
        core_1.Component({
            templateUrl: 'personal-data-view.component.html',
            styleUrls: ['personal-data-view.component.sass']
        })
    ], PersonalDataViewComponent);
    return PersonalDataViewComponent;
}());
exports.PersonalDataViewComponent = PersonalDataViewComponent;
