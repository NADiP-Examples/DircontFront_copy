import { Component} from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Validation } from 'app/services/validation.service';
import { NotificationsService } from 'angular2-notifications';
import { TranslateService } from 'ng2-translate';
import * as _ from "lodash";

@Component({
  selector: 'signin',
  templateUrl: `./signin.component.html`,
  styleUrls: ['../auth.component.css']
})
export class SigninComponent {
  private email = '';
  private password = '';
  private errors = {};

  constructor(private AuthService: AuthService, private notify: NotificationsService,
              private translate: TranslateService) {}

  login(): void {
    this.errors = Validation.ValidateLogin(this.email, this.password);
    if (!_.isEmpty(this.errors)) return;

    this.AuthService.login(this.email, this.password)
      .subscribe(
        () => this.notify.success('Успешно!', 'Добро пожаловать!'),
        (error) => {
          if (error.errors) this.errors = error.errors;
          if (!(error.message === 'Validation failed' || error.message === 'User is inactive'))
            this.notify.error('Ошибка!', this.translate.instant(error.message));
          if (error.message === 'User is inactive') this.AuthService.activateUser(this.email)
            .subscribe(() => this.notify.error('Ошибка!', this.translate.instant(error.message)));
        }
      )
  }
}
