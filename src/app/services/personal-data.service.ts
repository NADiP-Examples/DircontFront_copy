import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { Observable } from 'rxjs/Rx';
// import { Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise'

import { AuthService } from './auth.service'

import { environment } from '../../environments/environment';

@Injectable()
export class PersonalDataService {

  constructor(private http: Http, private authService: AuthService) {
  }

  hasId() {
    let user_id = Cookie.get('user_id');
    let headers = this.authService.headers;
    let user = this.http.get(`${environment.api_url}/user/${user_id}`, { headers })
      .toPromise()
      .then(res => res.json());
    console.log(user);
  }

}
