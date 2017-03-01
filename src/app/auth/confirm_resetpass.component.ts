import { Component} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotificationsService } from 'angular2-notifications';
import { Validation } from '../services/validation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'confirmresetpass',
  templateUrl: './confirm_resetpass.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class ConfirmResetPassComponent {
  private password = '';
  private password_double = '';
  private errors = <any>{};

  constructor(private AuthService: AuthService, private activatedRoute: ActivatedRoute,
              private router: Router, private notify: NotificationsService) {}

  confirm() {
    this.errors = {};
    let equals_pass_error = Validation.equalsPasswords(this.password, this.password_double);
    let pass_error = Validation.validatePassword(this.password);

    if (equals_pass_error.length) {
      this.errors.password_double = equals_pass_error;
      return;
    }
    if (pass_error.length) {
      this.errors.password = pass_error;
      return;
    }

    this.activatedRoute.queryParams.subscribe(params => {
      let email = params['email'];
      let key = params['key'];
      if (email && key)
        this.AuthService.resetPassConform(email, key, this.password).subscribe(
          () => this.notify.success('Успешно!', 'Добро пожаловать!'),
          () => this.router.navigate(['signin'])
        )
    });
  }
}
