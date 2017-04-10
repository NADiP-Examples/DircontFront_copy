import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { Observable } from 'rxjs/Rx';
// import { Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import * as _ from "lodash";

import { AuthService } from './auth.service'

import { environment } from 'environments/environment';

@Injectable()
export class PersonalDataService {

  constructor(private http: Http, private authService: AuthService, private router: Router) {
  }

  getSelf(): Observable<any> {
    let headers = this.authService.getHeaders();
    return this.http.get(`${environment.api_url}/user/${this.authService.user_id}`, { headers }).map(data => data.json())
  }

  getPersonalData(): Observable<any> {
    let headers = this.authService.getHeaders();
    return this.http.get(`${environment.api_url}/user/${this.authService.user_id}/profile`, { headers }).map(data => data.json())
  }

  setPersonalData(data, status): Observable<any> {
    let headers = this.authService.getHeaders();
    return this.http.put(
      `${environment.api_url}/user/${this.authService.user_id}/profile/${status.residency}/${status.legal_status}`,
      this.transformPersonalData(data), { headers })
  }

  transformPersonalData(data) {
    // Remove empty phones
    data.phones = data.phones.filter(Boolean);
    return data
  }

  changeEmail(current_password: string, new_email: string) {
    let headers = this.authService.getHeaders();
    let data = {
      current_password, new_email
    };
    return this.http.post(`${environment.api_url}/auth/change_email`, data, { headers }).map(data => data.json())
  }

  confirmChangeEmail(key: string) {
    let headers = this.authService.getHeaders();
    let data = {key};
    return this.http.post(`${environment.api_url}/auth/change_email/confirm`, data, { headers }).map(data => data.json())
  }

  changePassword(current_password: string, new_password: string): Observable<any> {
    let headers = this.authService.getHeaders();
    let data = {
      current_password, new_password
    };
    return this.http.post(`${environment.api_url}/auth/change_password`, data, { headers }).map(data => data.json())
  }
}
