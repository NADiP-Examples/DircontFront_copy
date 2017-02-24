import { Component, ViewChild} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Validation } from '../services/validation.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
import * as _ from "lodash";
import { environment } from '../../environments/environment';

import { ReCaptchaComponent } from 'angular2-recaptcha/lib/captcha.component';

@Component({
  selector: 'signup',
  templateUrl: `./signup.component.html`,
  styleUrls: ['./auth.component.sass'],
})
export class SignupComponent {
  private email = '';
  private password = '';
  private password_double = '';
  private full_name = '';
  private errors = {};
  private captcha_token;
  private env = environment;

  @ViewChild(ReCaptchaComponent) captcha:ReCaptchaComponent;

  constructor(private AuthService: AuthService, private notify: NotificationsService, private router: Router) {}

  handleCorrectCaptcha(): void {
    this.captcha_token = this.captcha.getResponse();
  }

  register(): void {
    this.errors = Validation.ValidateRegister(this.full_name, this.email, this.password, this.password_double, this.captcha_token);
    if (!_.isEmpty(this.errors)) return;

    this.AuthService.register(this.full_name, this.email, this.password, this.captcha_token)
      .subscribe(
        () => {
          this.notify.success('Успешно!', 'Вы успешно зарегестрировались. Вам на почту отправлено письмо с подтверждением!')
          this.router.navigate(['signin'])
        },
        (error) => {
          if (error.errors) this.errors = error.errors;
          if (error.message !== 'Validation failed') this.notify.error('Ошибка!', error.message);
        }
      )
  }
}
