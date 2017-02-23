import { Component} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'activate',
  template: ``,
})
export class ActivateComponent {

  constructor(private AuthService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
        let email = params['email'];
        let key = params['key'];
        if (email && key) this.AuthService.activateConfirmUser(email, key).subscribe(() => {}, () => { this.router.navigate(['signin']) })
      });
  }
}
