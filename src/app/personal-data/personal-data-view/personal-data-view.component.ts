import { Component, OnInit, ViewChild } from '@angular/core'
import { Http, Response } from '@angular/http'
import { environment } from 'environments/environment';
import { Cookie } from 'ng2-cookies';

import { AuthService } from 'app/services/auth.service'

@Component({
  // selector: 'app-profile-view',
  templateUrl: 'personal-data-view.component.html',
  styleUrls: ['personal-data-view.component.sass']
})
export class PersonalDataViewComponent implements OnInit {

  user_data: Object = {};


  personal_data = {
    second_name: '',
    first_name: '',
    patronymic: '',
    phones: ['',],
    site: ''
  };

  status = {
    legal_status: '',
    residency: '',
  };

  get full_name() {
    return `${this.personal_data.second_name} ${this.personal_data.first_name} ${this.personal_data.patronymic}`
  }

  constructor(private authService: AuthService, private http: Http) {
  }

  ngOnInit() {
    let user_id = Cookie.get('user_id');
    let headers = this.authService.getHeaders();
    this.http.get(`${environment.api_url}/user/${user_id}`, { headers })
      .subscribe(user => this.user_data = user.json());
  }

}
