import { Component, ViewChild} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Validation } from '../services/validation.service';
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

  constructor(private AuthService: AuthService) {}

  handleCorrectCaptcha(): void {
    this.captcha_token = this.captcha.getResponse();
  }

  register(): void {
    this.errors = Validation.ValidateRegister(this.full_name, this.email, this.password, this.password_double, this.captcha_token);
    if (!_.isEmpty(this.errors)) return;

    this.AuthService.register(this.full_name, this.email, this.password, this.captcha_token)
      .subscribe(
        () => {},
        (error) => {
          // TODO Need add error fields and notify for show error type "error.message"
          if (error.errors) this.errors = error.errors;
          if (error.message !== '') console.log(error.message);
        }
      )
  }
}
