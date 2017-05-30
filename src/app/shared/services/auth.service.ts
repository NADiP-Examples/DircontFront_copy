import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Cookie } from 'ng2-cookies';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http'
import * as _ from "lodash";

import { environment } from 'environments/environment';
import { REDIRECT_AFTER_LOGIN } from 'app/CONSTANTS'

function errorHandler(error) {
  return Observable.throw(error.json ? error.json() : error)
}

@Injectable()
export class AuthService {
  private loggedIn = false;
  public _user_id: String;
  private _headers = new Headers();

  get user_id(): String {
    if (!this._user_id) this._user_id = Cookie.get('user_id');
    return this._user_id
  }

  // TODO: поправить логику установки Заголовков.
  // Сейчас заголовки, это ОДИН заголовок Authentication-Token
  get headers() {
    if (_.isEmpty(this._headers.toJSON())) {
      let token = Cookie.get('Authentication-Token');
      if (token) this._headers.append('Authentication-Token', token);
    }
    return this._headers
  }

  public getHeaders(): Headers {
    return this.headers
  }

  constructor(private http: Http, private router: Router) {
    this.loggedIn = !!Cookie.get('Authentication-Token');
  }

  login(email: string, password: string): Observable<any> {
    let result = {};
    return this.http.post(`${environment.api_url}/auth/login`, { email, password })
      .map(res => res.json())
      .map((res) => {
        Cookie.set('Authentication-Token', res.auth_token);
        Cookie.set('user_id', res.user_id);
        this._user_id = res.user_id;
        result = res
      })
      .flatMap(() => this.getSelf())
      .map(() => this.router.navigate([REDIRECT_AFTER_LOGIN]))
      .map(() => result)
      .catch((error) => errorHandler(error));
  }

  getSelf(): Observable<any> {
    let token = Cookie.get('Authentication-Token');
    let user_id = Cookie.get('user_id');

    if (!token) {
      this.loggedIn = false;
      return Observable.throw('У Вас нет доступа для выполнения этого действия!')
    }
    this.loggedIn = true;

    return this.http.get(`${environment.api_url}/user/${user_id}`, { headers: this.headers })
      .map(res => {
        res.json()
      })
      .catch((error) => {
        this.logout();
        return errorHandler(error)
      });
  }

  register(email: string, password: string, type: string, captcha: string): Observable<any> {
    let result = {};
    let params = { email, password, type, 'g-recaptcha-response': captcha };
    return this.http.post(`${environment.api_url}/users`, params)
      .map(res => res.json())
      .flatMap(() => this.activateUser(email))
      .map(() => result)
      .catch((error) => errorHandler(error));
  }

  activateUser(email: string): Observable<any> {
    let callback = `${environment.callback_url}/activate`;
    return this.http.post(`${environment.api_url}/auth/activate_user`, { email, callback }, { headers: this.headers })
      .map(res => res.json())
      .catch((error) => errorHandler(error));
  }

  activateConfirmUser(email: string, key: string): Observable<any> {
    return this.http.post(`${environment.api_url}/auth/activate_user/confirm`, {
      email,
      key
    }, { headers: this.headers })
      .map(res => res.json())
      .map((res) => {
        Cookie.set('Authentication-Token', res.auth_token);
        Cookie.set('user_id', res.user_id);
      })
      .flatMap(() => this.getSelf())
      .map(() => this.router.navigate([REDIRECT_AFTER_LOGIN]))
      .catch((error) => errorHandler(error));
  }

  changePassword(current_password: string, new_password: string): Observable<any> {
    let headers = this.headers;
    let data = {
      current_password, new_password
    };
    return this.http.post(`${environment.api_url}/auth/change_password`, data, { headers }).map(data => data.json())
  }

  changeEmail(current_password: string, new_email: string) {
    let headers = this.headers;
    let callback = `${environment.callback_url}/confirm_change_email`;
    let data = {
      current_password, new_email, callback
    };
    return this.http.post(`${environment.api_url}/auth/change_email`, data, { headers }).map(data => data.json())
  }

  confirmChangeEmail(key: string): Observable<any> {
    let headers = this.headers;
    let data = { key };
    return this.http.post(`${environment.api_url}/auth/change_email/confirm`, data, { headers }).map(data => data.json())
  }

  resetPass(email: string): Observable<any> {
    let callback = `${environment.callback_url}/confirm_reset_pass`;
    return this.http.post(`${environment.api_url}/auth/reset_password`, { email, callback }, { headers: this.headers })
      .map(res => res.json())
      .catch((error) => errorHandler(error));
  }

  resetPassConform(email: string, key: string, password: string): Observable<any> {
    return this.http.post(`${environment.api_url}/auth/reset_password/confirm`, {
      email,
      key,
      password
    }, { headers: this.headers })
      .map(res => res.json())
      .map((res) => {
        Cookie.set('Authentication-Token', res.auth_token);
        Cookie.set('user_id', res.user_id);
      })
      .flatMap(() => this.getSelf())
      .map(() => this.router.navigate([REDIRECT_AFTER_LOGIN]))
      .catch((error) => errorHandler(error));
  }

  inviteUser(email: string): Observable<any> {
    let callback = `${environment.callback_url}/invite`;
    return this.http.post(`${environment.api_url}/auth/invite/send`, { email, callback }, { headers: this.headers })
      .map(res => res.json())
      .catch((error) => errorHandler(error));
  }

  inviteConfirmUser(email: string, key: string): Observable<any> {
    return this.http.post(`${environment.api_url}/auth/invite/confirm`, { email, key }, { headers: this.headers })
      .map(res => res.json())
      .map((res) => {
        Cookie.set('Authentication-Token', res.auth_token);
        Cookie.set('user_id', res.user_id);
      })
      .flatMap(() => this.getSelf())
      .map(() => this.router.navigate([REDIRECT_AFTER_LOGIN]))
      .catch((error) => errorHandler(error));
  }

  logout(): void {
    Cookie.delete('Authentication-Token');
    Cookie.delete('user_id');
    this.headers.delete('Authentication-Token');
    this.loggedIn = false;
    this._user_id = null;
    this.router.navigate(['signin'])
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

}

