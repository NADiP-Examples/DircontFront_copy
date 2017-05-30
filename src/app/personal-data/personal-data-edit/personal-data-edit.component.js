"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var _ = require("lodash");
exports.LEGAL_STATUSES = [
    {
        value: 'natural_person',
        title: 'Физ.лицо'
    },
    {
        value: 'individual_entrepreneur',
        title: 'ИП'
    },
    {
        value: 'legal_entity',
        title: 'Юр.лицо'
    },
];
exports.RESIDENCES = [
    {
        value: 'russian_federation',
        title: 'Резидент РФ'
    },
    {
        value: 'other',
        title: 'Иное'
    },
];
var PersonalDataEditComponent = (function () {
    function PersonalDataEditComponent(personalDataService, router, notify) {
        this.personalDataService = personalDataService;
        this.router = router;
        this.notify = notify;
        // @ViewChild(UserDataComponent) userDataComponent;
        // @ViewChild(ContractDataNPComponent) contractDataNPComponent;
        this.status = {
            legal_status: exports.LEGAL_STATUSES[0].value,
            residency: exports.RESIDENCES[0].value,
        };
        this.personal_data = {};
        this.loadComplete = false;
        this.RESIDENCES = exports.RESIDENCES;
        this.LEGAL_STATUSES = exports.LEGAL_STATUSES;
        // Данные аккаунта
        this.user_data = {};
        // options = new DatePickerOptions();
        this.confirm_rules = false;
    }
    PersonalDataEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personalDataService.getSelf()
            .subscribe(function (user) {
            _this.user_data = user;
            _this.status.legal_status = user['legal_status'] || exports.LEGAL_STATUSES[0].value;
            _this.status.residency = user['residency'] || exports.RESIDENCES[0].value;
            if (_this.user_data['type'] == 'partner' || _this.user_data['type'] == 'superuser') {
                _this.LEGAL_STATUSES = [
                    {
                        value: 'natural_person',
                        title: 'Физ.лицо'
                    }
                ];
                _this.RESIDENCES = [{
                        value: 'russian_federation',
                        title: 'Резидент РФ'
                    }];
            }
            _this.personalDataService.getPersonalData()
                .map(function (personal_data) {
                personal_data['phones'] = _.isEmpty(personal_data['phones']) ? [''] : personal_data['phones'];
                personal_data['_type'] = _this.user_data['type'];
                return personal_data;
            })
                .subscribe(function (personal_data) {
                if (!_.isEmpty(personal_data))
                    _this.personal_data = personal_data;
                _this.loadComplete = true;
                // if (this.personal_data['passport_date']) this.personal_data['passport_date'] = new Date(this.personal_data['passport_date']);
            });
        });
    };
    PersonalDataEditComponent.prototype.showRules = function (event) {
        event.preventDefault();
        //TODO: Show Rules
    };
    PersonalDataEditComponent.prototype.onChangedResidence = function (event) {
        if (event == 'russian_federation') {
            if (!(this.personalDataService['registration_address_country'] && this.personalDataService['registration_address_country']['id'])) {
                this.personal_data['registration_address_country'] = { id: 1 };
            }
            if (!(this.personalDataService['postal_address_country'] && this.personalDataService['postal_address_country']['id'])) {
                this.personal_data['postal_address_country'] = { id: 1 };
            }
        }
    };
    PersonalDataEditComponent.prototype.save = function (form) {
        var _this = this;
        if (form.valid) {
            //FIXME: Убрать этот костыль, когда будет готов нормальный LocationComponent
            this.personal_data['postal_address_city_id'] = this.personal_data['postal_address_city_id'] ? this.personal_data['postal_address_city_id'] : NaN;
            this.personal_data['postal_address_region_id'] = this.personal_data['postal_address_region_id'] ? this.personal_data['postal_address_region_id'] : NaN;
            this.personal_data['registration_address_city_id'] = this.personal_data['registration_address_city_id'] ? this.personal_data['registration_address_city_id'] : NaN;
            this.personal_data['registration_address_region_id'] = this.personal_data['registration_address_region_id'] ? this.personal_data['registration_address_region_id'] : NaN;
            if (this.status.legal_status == 'natural_person') {
                this.personal_data['contract_first_name'] = this.personal_data['first_name'];
                this.personal_data['contract_second_name'] = this.personal_data['second_name'];
                this.personal_data['contract_patronymic'] = this.personal_data['patronymic'];
            }
            this.personalDataService.setPersonalData(this.personal_data, this.status)
                .subscribe(function (res) {
                _this.router.navigate(['personal_data']);
            });
            return;
        }
        this.notify.error('Внимание!', 'Не все поля заполнены или вы не согласились с правилами');
        for (var control_key in form.controls) {
            var control = form.controls[control_key];
            control.markAsTouched();
        }
    };
    PersonalDataEditComponent = __decorate([
        core_1.Component({
            // selector: 'app-profile-edit',
            templateUrl: 'personal-data-edit.component.html',
            styleUrls: ['personal-data-edit.component.sass']
        })
    ], PersonalDataEditComponent);
    return PersonalDataEditComponent;
}());
exports.PersonalDataEditComponent = PersonalDataEditComponent;
