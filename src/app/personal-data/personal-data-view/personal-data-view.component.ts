import { Component, OnInit, ViewChild } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Router } from '@angular/router'
import { environment } from 'environments/environment';
import { Cookie } from 'ng2-cookies';

import { AuthService } from 'app/services/auth.service'
import { PersonalDataService } from 'app/services/personal-data.service'

@Component({
  // selector: 'app-profile-view',
  templateUrl: 'personal-data-view.component.html',
  styleUrls: ['personal-data-view.component.sass']
})
export class PersonalDataViewComponent implements OnInit {

  user_data: Object = {};


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

  constructor(private authService: AuthService, private personalDataService: PersonalDataService, private http: Http, private router: Router) {
  }

  ngOnInit() {
    this.personalDataService.getSelf()
      .subscribe(user => {
        this.user_data = user;
        this.status.legal_status = user['legal_status'];
        this.status.residency = user['residency'];
      });
    this.personalDataService.getPersonalData()
      .map(personal_data => {personal_data['phones'] = []; return personal_data})
      .subscribe(personal_data => {
        this.personal_data = personal_data;
        console.log();
      });
  }

  edit() {
    this.router.navigate(['personal_data', 'edit'])
  }

}
