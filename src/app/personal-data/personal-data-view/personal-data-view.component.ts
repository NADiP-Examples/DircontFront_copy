import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { PersonalDataService } from 'app/shared/services/personal-data.service'
import {RESIDENCES, LEGAL_STATUSES} from 'app/personal-data/personal-data-edit/personal-data-edit.component'

@Component({
  templateUrl: 'personal-data-view.component.html',
  styleUrls: ['personal-data-view.component.sass']
})
export class PersonalDataViewComponent implements OnInit {

  user_data: Object = {};
  RESIDENCES = RESIDENCES;
  LEGAL_STATUSES = LEGAL_STATUSES;

  personal_data: Object = {
    phones: [],
    postal_address_country:'',
    postal_address_region:'',
    postal_address_city:'',
    registration_address_country:'',
    registration_address_region:'',
    registration_address_city:'',
  };

  status = {
    legal_status: '',
    residency: '',
  };

  get full_name() {
    return `${this.personal_data['second_name']} ${this.personal_data['first_name']} ${this.personal_data['patronymic']}`
  }

  constructor(private personalDataService: PersonalDataService, private router: Router) {
  }

  findObj(array:Array<any>, value): number{
    let obj = array.map((x) => x.value).indexOf(value);
    return obj
  }

  ngOnInit() {
    this.personalDataService.getSelf()
      .subscribe(user => {
        this.user_data = user;
        this.status.legal_status = user['legal_status'];
        this.status.residency = user['residency'];
      });
    this.personalDataService.getPersonalData()
      .subscribe(personal_data => {
        this.personal_data = personal_data;
      });
  }

  edit() {
    this.router.navigate(['personal_data', 'edit'])
  }

}
