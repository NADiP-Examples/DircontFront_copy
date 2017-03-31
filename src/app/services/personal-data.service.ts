import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { Observable } from 'rxjs/Rx';
// import { Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise'

import { AuthService } from './auth.service'

import { environment } from 'environments/environment';

@Injectable()
export class PersonalDataService {

  public _user_id:String;

  get user_id():String {
    if (!this._user_id) this._user_id = Cookie.get('user_id');
    return this._user_id
  }

  constructor(private http: Http, private authService: AuthService, private router: Router) {
  }

  getSelf():Observable<any> {
    let headers = this.authService.getHeaders();
    return this.http.get(`${environment.api_url}/user/${this.user_id}`, { headers }).map(data => data.json())
  }

  getPersonalData():Observable<any> {
    let headers = this.authService.getHeaders();
    return this.http.get(`${environment.api_url}/user/${this.user_id}/profile`, { headers }).map(data => data.json())
  }

  setPersonalData(data, status):Observable<any> {
    let headers = this.authService.getHeaders();
    return this.http.put(
      `${environment.api_url}/user/${this.user_id}/profile/${status.residency}/${status.legal_status}`,
      data, { headers })
  }
}
