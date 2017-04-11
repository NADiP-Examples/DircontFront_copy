import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'activate',
  templateUrl: './confirm-change-email.component.html',
  styleUrls: ['./confirm-change-email.component.sass']
})
export class ConfirmChangeEmailComponent {
  errors;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
              private router: Router, private notify: NotificationsService) {
    this.activatedRoute.queryParams.subscribe(params => {
      // let email = params['email'];
      let key = params['key'];
      console.log('key = ', key);
      if (key)
        this.authService.confirmChangeEmail(key).subscribe(
          () => this.notify.success('Успешно!', 'Email изменен'),
          (error) => {
            this.errors = error.json();
            if (this.errors && this.errors['message'] == "Key does not exist"){
              this.notify.error('Ошибка!', 'Ссылка некорректна или устарела')
            }else if (this.errors && this.errors['message']){
              this.notify.error('Ошибка!', this.errors['message'])
            }
          }
        )
    });
  }
}
