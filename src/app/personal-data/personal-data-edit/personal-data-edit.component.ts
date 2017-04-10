import { Component, OnInit, ViewChild } from '@angular/core'
import { DateModel, DatePickerOptions } from 'app/ng2-datepicker/ng2-datepicker.module'
import { NotificationsService } from 'angular2-notifications';

import { PersonalDataService } from 'app/services/personal-data.service'
import * as _ from "lodash";

import { Router } from "@angular/router";

export let LEGAL_STATUSES = [
  {
    value: 'natural_person',
    print_name: 'Физ.лицо'
  },
  {
    value: 'individual_entrepreneur',
    print_name: 'ИП'
  },
  {
    value: 'legal_entity',
    print_name: 'Юр.лицо'
  },
];

export const RESIDENCES = [
  {
    value: 'russian_federation',
    print_name: 'Резидент РФ'
  },
  {
    value: 'other',
    print_name: 'Иное'
  },
];

export const MASKS = {
  //+7(923)600-11-12
  phone: ['+', '7', '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
  passport_division_code: [/[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/],
  only_number: [/[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/,],
  card: [/[\d]/, /[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/,
    '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/,]
};

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
    phones: [''],
  };

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
      });
    this.personalDataService.getPersonalData()
      .map(personal_data => {
        personal_data['phones'] = _.isEmpty(personal_data['phones']) ? [''] : personal_data['phones'];
        return personal_data
      })
      .subscribe(personal_data => {
        if (!_.isEmpty(personal_data)) this.personal_data = personal_data;
        // if (this.personal_data['passport_date']) this.personal_data['passport_date'] = new Date(this.personal_data['passport_date']);
        console.log("personal_data -->", personal_data);
      });
  }

  showRules(event) {
    event.preventDefault();
    console.log("Show Rules here");
  }

  save(form) {
    console.log("form is valid: ", form.valid);

    if (form.valid) {
      console.log('form.controls -->', form.controls);
      console.log('model -->', this.personal_data);
      this.personalDataService.setPersonalData(this.personal_data, this.status)
        .subscribe(res => {
          console.log("Response success send -->", res.json());
          this.router.navigate(['personal_data'])
        });
      return
    }
    this.notify.error('Внимание!', 'Не все поля заполнены или вы не согласились с правилами');
    // if (!this.confirm_rules) this.notify.error('Ошибка!', 'Вы должны согласиться с правилами');
    for (let control_key in form.controls) {
      let control = form.controls[control_key];
      // console.log("control = ", control);
      control.markAsTouched()
    }

  }

}
