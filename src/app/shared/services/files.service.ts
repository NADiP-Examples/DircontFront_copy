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

  uploadContractTemplate(file, test?): Observable<any> {
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    let headers = this.authService.getHeaders();

    headers.append('Enctype', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.api_url}/upload/contract${test?'/test':''}`, formData, options).map(data => data.json())
  }

  // testUploadContractTemplate(file): Observable<any> {
  //   let formData: FormData = new FormData();
  //   formData.append('file', file, file.name);
  //   let headers = this.authService.getHeaders();
  //
  //   headers.append('Enctype', 'multipart/form-data');
  //   headers.append('Accept', 'application/json');
  //   let options = new RequestOptions({ headers: headers });
  //   return this.http.post(`${environment.api_url}/upload/contract/test`, formData, options).map(data => data.json())
  // }

  getContractUrl(user_id): Observable<any> {
    let headers = this.authService.getHeaders();
    console.log("Headers = ", headers);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.api_url}/user/${user_id}/contract`, {1:1}, options).map(data => data.json())
  }

  getContractTemplateUrl(): Observable<any> {
    let headers = this.authService.getHeaders();
    console.log("Headers = ", headers);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.api_url}/upload/contract`, options).map(data => data.json())
  }
}
