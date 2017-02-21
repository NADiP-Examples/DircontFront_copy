import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Cookie } from 'ng2-cookies';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http'

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  private loggedIn = false;
  private isActive = false;
  private headers = new Headers();

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
        result = res
      })
      .flatMap(() => this.getSelf())
      .map(() => this.router.navigate(['profile']))
      .map(() => result)
      .catch((error) => Observable.throw(error.json()));
  }

  getSelf(): Observable<any> {
    let token = Cookie.get('Authentication-Token');
    let user_id = Cookie.get('user_id');

    if (!token) {
      this.isActive = false;
      this.loggedIn = false;
      return
    }
    this.headers.append('Authentication-Token', token);
    this.loggedIn = true;

    return this.http.get(`${environment.api_url}/user/${user_id}`, {headers :this.headers})
      .map(res => res.json())
      .map(res => this.isActive = res.is_active);
  }

  register(full_name: string, email: string, password: string, captcha: string): Observable<any> {
    let result = {};
    return this.http.post(`${environment.api_url}/users`, { email, password, full_name, 'g-recaptcha-response': captcha })
      .map(res => res.json())
      .flatMap(() => this.login(email,password))
      .flatMap(() => this.sendConfirmEmail())
      .map(() => result)
      .catch((error) => Observable.throw(error.json()));
  }

  sendConfirmEmail(): Observable<any> {
    return this.http.post(`${environment.api_url}/auth/send_confirmation`, {}, {headers :this.headers})
      .map(res => res.json())
      .catch((error) => Observable.throw(error.json()));
  }

  logout(): void {
    Cookie.delete('Authentication-Token');
    this.loggedIn = false;
    this.isActive = false;
    this.router.navigate(['signin'])
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  isUserActive(): boolean {
    return this.isActive;
  }

}

