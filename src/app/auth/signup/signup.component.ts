import { Component, ViewChild} from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';
import { Validation } from 'app/shared/services/validation.service';
import { NotificationsService } from 'angular2-notifications';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import * as _ from "lodash";
import { environment } from 'environments/environment';

import { ReCaptchaComponent } from 'angular2-recaptcha/lib/captcha.component';

@Component({
  selector: 'signup',
  templateUrl: `./signup.component.html`,
  styleUrls: ['../auth.component.sass'],
})
export class SignupComponent {
  private email = '';
  private password = '';
  private password_double = '';
  private role = 'admin_of_user';
  private errors = {};
  private captcha_token;
  private env = environment;

  @ViewChild(ReCaptchaComponent) captcha:ReCaptchaComponent;

  constructor(private AuthService: AuthService, private notify: NotificationsService, private router: Router,
              private activatedRoute: ActivatedRoute, private translate: TranslateService) {
    this.role = this.activatedRoute.snapshot.data['role'];
  }

  handleCorrectCaptcha(): void {
    this.captcha_token = this.captcha.getResponse();
  }

  register(): void {
    this.errors = Validation.ValidateRegister(this.email, this.password, this.password_double, this.captcha_token);
    if (!_.isEmpty(this.errors)) return;

    this.AuthService.register(this.email, this.password, this.role, this.captcha_token)
      .subscribe(
        () => {
          this.notify.success('Успешно!', 'Вы успешно зарегестрировались. Вам на почту отправлено письмо с подтверждением!');
          this.router.navigate(['signin'])
        },
        (error) => {
          if (error.errors) this.errors = error.errors;
          if (error.message !== 'Validation failed') this.notify.error('Ошибка!', this.translate.instant(error.message));
        }
      )
  }
}
