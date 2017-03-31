import { Component, OnInit, ViewChild } from '@angular/core'
import { DateModel } from 'ng2-datepicker'

import { AuthService } from 'app/services/auth.service'
import { PersonalDataService } from 'app/services/personal-data.service'

import { UserDataComponent } from '../shared/user-data/user-data.component'
import { ContractDataNPComponent } from '../shared/contract-data-n-p/contract-data-n-p.component'
import { ContractDataIEComponent } from '../shared/contract-data-i-e/contract-data-i-e.component'
import { ContractDataLEComponent } from '../shared/contract-data-l-e/contract-data-l-e.component'
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
  only_number: [/[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/,],
  card: [/[\d]/, /[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/,
    '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/,]
};

@Component({
  // selector: 'app-profile-edit',
  templateUrl: 'personal-data-edit.component.html',
  styleUrls: ['personal-data-edit.component.sass']
})

export class PersonalDataEditComponent implements OnInit {
  @ViewChild(UserDataComponent) userDataComponent;
  @ViewChild(ContractDataNPComponent) contractDataNPComponent;
  status = {
    legal_status: LEGAL_STATUSES[0].value,
    residency: RESIDENCES[0].value,
  };

  personal_data: Object = {
    phones: [''],
    postal_address_country:'',
    postal_address_region:'',
    postal_address_city:'',
    registration_address_country:'',
    registration_address_region:'',
    registration_address_city:'',
  };

  // Данные аккаунта
  user_data: Object = {};

  confirm_rules: boolean = false;

  constructor(private authService: AuthService,
              private personalDataService: PersonalDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.personalDataService.getSelf()
      .subscribe(user => {
        this.user_data = user;
        this.status.legal_status = user['legal_status'];
        this.status.residency = user['residency'];
      });
    this.personalDataService.getPersonalData()
      .subscribe(personal_data => this.personal_data = personal_data);
  }

  showRules(event) {
    event.preventDefault();
    console.log("Show Rules here");
  }

  save() {
    if (this.userDataComponent.validate() && this.contractDataNPComponent.validate()) {
      console.log("Save personal data");
      this.personalDataService.setPersonalData(this.personal_data, this.status)
        .subscribe(res => {
          console.log("Response success send -->", res);
          this.router.navigate(['personal_data'])
        });
    } else {
      console.log("Errors!!!")
    }

  }

}
