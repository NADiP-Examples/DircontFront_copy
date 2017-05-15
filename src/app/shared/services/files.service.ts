import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// import { Router } from '@angular/router';

import { AuthService } from './auth.service'
import { environment } from 'environments/environment';

@Injectable()
export class FilesService {

  constructor(private http: Http, private authService: AuthService,) {
  }

  uploadTemplate(file, type): Observable<any> {
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    let headers = this.authService.getHeaders();

    headers.append('Enctype', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    // if (test) type='';
    return this.http.post(`${environment.api_url}/upload/${type}`, formData, options).map(data => data.json())
  }

  getDocumentUrl(user_id, type): Observable<any> {
    let headers = this.authService.getHeaders();
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.api_url}/user/${user_id}/${type}`, {1:1}, options).map(data => data.json())
  }

  getTemplateUrl(type): Observable<any> {
    let headers = this.authService.getHeaders();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.api_url}/upload/${type}`, options).map(data => data.json())
  }

  getLegend(): Observable<any> {
    let headers = this.authService.getHeaders();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.api_url}/upload/legend`, options).map(data => data.json())
  }
}
