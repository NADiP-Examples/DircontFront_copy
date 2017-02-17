import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Validation } from '../services/validation.service';
import * as _ from "lodash";
import { environment } from '../../environments/environment';

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
  private isCaptcha = false;
  private env = environment;

  constructor(private AuthService: AuthService, private router: Router) {}

  handleCorrectCaptcha(): void {
    this.isCaptcha = true;
  }

  register(): void {
    this.errors = Validation.ValidateRegister(this.full_name, this.email, this.password, this.password_double, this.isCaptcha);
    if (!_.isEmpty(this.errors)) return;

    this.AuthService.register(this.full_name, this.email, this.password)
      .subscribe(
        () => this.router.navigate(['signin']),
        (error) => {
          // TODO Need add error fields and notify for show error type "error.description"
          if (error.errors) this.errors = error.errors;
          if (error.description !== '') console.log(error.description);
        }
      )
  }
}
