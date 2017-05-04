import { environment } from 'environments/environment';
import { Http } from '@angular/http'
import { Injector } from '@angular/core'

import * as _ from "lodash";
import { Observable } from 'rxjs/Rx';
import { AuthService } from 'app/shared/services/auth.service'
import { Validation } from 'app/shared/services/validation.service';

import { ROLES } from 'app/CONSTANTS'

interface IEmployee {
  id? : number;
  email? : string;
  is_confirmed? : boolean;
  legal_status? : string;
  parent_id? : number;
  personal_id? : number;
  profile? : any;
  residency? : any;
  status? : string;
  type? : string;
  created_at? : string;
  modified_at? : string
}

export class Employee implements IEmployee {
  id : number;
  email : string;
  is_confirmed : boolean;
  legal_status : string;
  parent_id : number;
  personal_id : number;
  profile : any;
  residency : any;
  status : string;
  type : string;
  created_at : string;
  modified_at : string;

  errors : Object = {};

  static STATUSES = [
    {title: 'активный', value: 'active'},
    {title: 'заблокирован', value: 'blocked'},
    {title: 'в архиве', value: 'in_archive'}
  ];

  static ROLES = ROLES;

  constructor(data: IEmployee = {}) {
    this.id = _.isNumber(data.id) ? data.id : undefined;
    this.email = data.email;
    this.is_confirmed = data.is_confirmed;
    this.legal_status = data.legal_status;
    this.parent_id = data.parent_id;
    this.personal_id = data.personal_id;
    this.profile = data.profile || {};
    this.residency = data.residency;
    this.status = data.status;
    this.type = data.type;
    this.created_at = data.created_at;
    this.modified_at = data.modified_at;
  }

  static getAll(injector: Injector): Observable<Employee[]> {
    let authService = injector.get(AuthService);
    let http = injector.get(Http);

    let headers = authService.getHeaders();
    return http.get(`${environment.api_url}/user/${authService.user_id}/employees`, { headers })
      .map(data => data.json())
      .map(employees => employees.children ? employees.children.map(e => new Employee(e.node)) : []);
  }

  private getRoleName(): string {
    let role_name = _.find(Employee.ROLES, {value: this.type});
    return role_name.title
  }
  //
  private getFullName(): string {
    return `${this.profile.second_name} ${this.profile.first_name[0]}.${this.profile.patronymic ? this.profile.patronymic[0]:''}`
  }

  private getCompanyName(): string {
    let company = ``;
    if (this.legal_status === 'natural_person') company = `Физ.лицо`;
    if (this.legal_status === 'individual_entrepreneur') company = `ИП ${this.profile.second_name}`;
    if (this.legal_status === 'legal_entity') company = `${this.profile.organization_type} ${this.profile.organization_name}`;
    return company
  }

  private getProfileInfo(): string {
    let template = `<div>Email: ${this.email}</div>`;
    if (_.isArray(this.profile.phones)) {
      let phones = this.profile.phones.map(phone => `<div>&nbsp;${phone}</div>`);
      template = `${template} <div>Телефон:<div>${phones.join('')}`
    }
    return template
  }

  public invite(injector: Injector): Observable<any> {
    this.errors = {};

    let authService = injector.get(AuthService);
    let http = injector.get(Http);

    let headers = authService.getHeaders();
    let params = this.profile;
    params.email = this.email;
    params.type = this.type;

    this.errors = Validation.ValidateInvite(params);
    if (!_.isEmpty(this.errors)) return Observable.throw('validation error');

    return http.post(`${environment.api_url}/user/${authService.user_id}/employees`, params, { headers })
      .flatMap(() => authService.inviteUser(this.email))
      .catch(errors => this.errors = errors.json().errors)
  }

  public switchStatus(injector: Injector): Observable<any> {
    let authService = injector.get(AuthService);
    let http = injector.get(Http);
    let headers = authService.getHeaders();
    return http.put(`${environment.api_url}/user/${this.id}`, {status: this.status}, { headers })
  }

  public getLogs(injector: Injector): Observable<any> {
    let authService = injector.get(AuthService);
    let http = injector.get(Http);
    let headers = authService.getHeaders();
    return http.get(`${environment.api_url}/user/${this.id}/status_log`, { headers }).map(data => data.json())
  }
}
