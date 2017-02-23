import { Component} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'confirmresetpass',
  template: ``,
})
export class ConfirmResetPassComponent {

  constructor(private AuthService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      let email = params['email'];
      let key = params['key'];
      if (email && key) this.AuthService.resetPassConform(email, key).subscribe(() => {}, () => { this.router.navigate(['signin']) })
    });
  }
}
