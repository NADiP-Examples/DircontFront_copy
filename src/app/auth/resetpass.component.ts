import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Validation } from '../services/validation.service';
import * as _ from "lodash";

@Component({
  selector: 'resetpass',
  templateUrl: `./resetpass.component.html`,
  styleUrls: ['./auth.component.sass'],
})
export class ResetPassComponent {
  private email = '';
  private errors = <any>{};

  constructor(private AuthService: AuthService) {}

  reset(): void {
    this.errors = {};

    let mail_error = Validation.validateEmail(this.email);
    if (mail_error.length) this.errors.email = mail_error;
    if (!_.isEmpty(this.errors)) return;

    this.AuthService.resetPass(this.email)
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
