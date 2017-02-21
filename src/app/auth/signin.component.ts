import { Component} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Validation } from '../services/validation.service';
import * as _ from "lodash";

@Component({
  selector: 'signin',
  templateUrl: `./signin.component.html`,
  styleUrls: ['./auth.component.css']
})
export class SigninComponent {
  private email = '';
  private password = '';
  private errors = {};

  constructor(private AuthService: AuthService) {}

  login(): void {
    this.errors = Validation.ValidateLogin(this.email, this.password);
    if (!_.isEmpty(this.errors)) return;

    this.AuthService.login(this.email, this.password)
      .subscribe(
        () => {},
        (error) => {
          // TODO Need add error fields and notify for show error type "error.description"
          if (error.errors) this.errors = error.errors;
          if (error.description !== '') console.log(error.description);
        }
      )
  }
}
