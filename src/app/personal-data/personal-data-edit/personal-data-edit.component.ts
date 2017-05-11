import { Component, OnInit } from '@angular/core'
import { NotificationsService } from 'angular2-notifications';

import { PersonalDataService } from 'app/shared/services/personal-data.service'
import * as _ from "lodash";

import { Router } from "@angular/router";

export let LEGAL_STATUSES = [
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

export const RESIDENCES = [
  {
    value: 'russian_federation',
    title: 'Резидент РФ'
  },
  {
    value: 'other',
    title: 'Иное'
  },
];

@Component({
  // selector: 'app-profile-edit',
  templateUrl: 'personal-data-edit.component.html',
  styleUrls: ['personal-data-edit.component.sass']
})

export class PersonalDataEditComponent implements OnInit {
  // @ViewChild(UserDataComponent) userDataComponent;
  // @ViewChild(ContractDataNPComponent) contractDataNPComponent;
  status = {
    legal_status: LEGAL_STATUSES[0].value,
    residency: RESIDENCES[0].value,
  };

  personal_data: Object = {
    // phones: [''],
    // registration_address_country:{
    //   id: 1
    // }
  };

  loadComplete:Boolean = false;

  RESIDENCES=RESIDENCES;
  LEGAL_STATUSES=LEGAL_STATUSES;

  // Данные аккаунта
  user_data: Object = {};

  // options = new DatePickerOptions();


  confirm_rules: boolean = false;

  constructor(private personalDataService: PersonalDataService,
              private router: Router,
              private notify: NotificationsService) {
  }

  ngOnInit() {
    this.personalDataService.getSelf()
      .subscribe(user => {
        this.user_data = user;
        this.status.legal_status = user['legal_status'] || LEGAL_STATUSES[0].value;
        this.status.residency = user['residency'] || RESIDENCES[0].value;
        if (this.user_data['type'] == 'partner' || this.user_data['type'] == 'superuser') {
          this.LEGAL_STATUSES = [
            {
              value: 'natural_person',
              title: 'Физ.лицо'
            }
          ];
          this.RESIDENCES = [{
            value: 'russian_federation',
            title: 'Резидент РФ'
          }];
        }
        this.personalDataService.getPersonalData()
          .map(personal_data => {
            personal_data['phones'] = _.isEmpty(personal_data['phones']) ? [''] : personal_data['phones'];
            personal_data['_type'] = this.user_data['type'];
            return personal_data
          })
          .subscribe(personal_data => {
            if (!_.isEmpty(personal_data)) this.personal_data = personal_data;
            this.loadComplete = true;
            // if (this.personal_data['passport_date']) this.personal_data['passport_date'] = new Date(this.personal_data['passport_date']);
          });
      });

  }

  showRules(event) {
    event.preventDefault();
    //TODO: Show Rules
  }

  onChangedResidence(event){
    if (event == 'russian_federation') {
      if (!(this.personalDataService['registration_address_country'] && this.personalDataService['registration_address_country']['id'])){
        this.personal_data['registration_address_country'] = {id:1}
      }
      if (!(this.personalDataService['postal_address_country'] && this.personalDataService['postal_address_country']['id'])){
        this.personal_data['postal_address_country'] = {id:1}
      }
    }
  }

  save(form) {
    if (form.valid) {
      //FIXME: Убрать этот костыль, когда будет готов нормальный LocationComponent
      this.personal_data['postal_address_city_id'] = this.personal_data['postal_address_city_id'] ? this.personal_data['postal_address_city_id']: NaN;
      this.personal_data['postal_address_region_id'] = this.personal_data['postal_address_region_id'] ? this.personal_data['postal_address_region_id']: NaN;
      this.personal_data['registration_address_city_id'] = this.personal_data['registration_address_city_id'] ? this.personal_data['registration_address_city_id']: NaN;
      this.personal_data['registration_address_region_id'] = this.personal_data['registration_address_region_id'] ? this.personal_data['registration_address_region_id']: NaN;

      if (this.status.legal_status == 'natural_person'){
        this.personal_data['contract_first_name'] = this.personal_data['first_name'];
        this.personal_data['contract_second_name'] = this.personal_data['second_name'];
        this.personal_data['contract_patronymic'] = this.personal_data['patronymic'];
      }

      this.personalDataService.setPersonalData(this.personal_data, this.status)
        .subscribe(res => {
          this.router.navigate(['personal_data'])
        });
      return
    }
    this.notify.error('Внимание!', 'Не все поля заполнены или вы не согласились с правилами');
    for (let control_key in form.controls) {
      let control = form.controls[control_key];
      control.markAsTouched()
    }

  }

}
