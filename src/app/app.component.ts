import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

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

  constructor(private AuthService: AuthService) {
    AuthService.getSelf()
  }
}
