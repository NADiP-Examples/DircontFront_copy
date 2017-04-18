import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>' +
  '<simple-notifications [options]="options"></simple-notifications>',
})
export class AppComponent {

  public options = {
    position: ["top"],
    timeOut: 5000,
    showProgressBar: false
  };

  constructor(private AuthService: AuthService, private translate: TranslateService) {
    AuthService.getSelf().subscribe(()=>{}, ()=>{});

    translate.setDefaultLang('ru');
    translate.use('ru');

  }
}
