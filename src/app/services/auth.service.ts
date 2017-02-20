import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Cookie } from 'ng2-cookies';
import {Observable} from 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  private loggedIn = false;

  constructor(private http: Http, private router: Router) {
    this.loggedIn = !!Cookie.get('Authentication-Token');
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.api_url}/auth/login`, { email, password })
      .map(res => res.json())
      .map((res) => {
        Cookie.set('Authentication-Token', res.auth_token);
        this.loggedIn = true;
        return res;
      })
      .catch((error) => Observable.throw(error.json()));
  }

  register(full_name: string, email: string, password: string, captcha: string): Observable<any> {
    return this.http.post(`${environment.api_url}/users`, { email, password, full_name, 'g-recaptcha-response': captcha })
      .map(res => res.json())
      .catch((error) => Observable.throw(error.json()));
  }

  logout(): void {
    Cookie.delete('Authentication-Token');
    this.loggedIn = false;
    this.router.navigate(['signin'])
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}

