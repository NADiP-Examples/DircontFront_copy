import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Validation } from 'app/services/validation.service';
import { NotificationsService } from 'angular2-notifications';
import { TranslateService } from 'ng2-translate';
import { Router } from '@angular/router';
import * as _ from "lodash";

@Component({
  selector: 'resetpass',
  templateUrl: `./resetpass.component.html`,
  styleUrls: ['../auth.component.sass'],
})
export class ResetPassComponent {
  private email = '';
  private errors = <any>{};

  constructor(private AuthService: AuthService, private notify: NotificationsService, private router: Router,
              private translate: TranslateService) {}

  reset(): void {
    this.errors = {};

    let mail_error = Validation.validateEmail(this.email);
    if (mail_error.length) this.errors.email = mail_error;
    if (!_.isEmpty(this.errors)) return;

    this.AuthService.resetPass(this.email)
      .subscribe(
        () => {
          this.notify.success('Успешно!', 'Вам на почту отправлено письмо для восстановления пароля!');
          this.router.navigate(['signin'])
        },
        (error) => {
          if (error.errors) this.errors = error.errors;
          if (error.message !== 'Validation failed') this.notify.error('Ошибка!', this.translate.instant(error.message));
        }
      )
  }
}
