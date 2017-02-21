import { Component} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'confirm',
  templateUrl: `./confirm.component.html`,
  styleUrls: ['./auth.component.sass'],
})
export class ConfirmComponent {

  private secret_key = '';

  constructor(private AuthService: AuthService) {}

  send():void {}

  getCode():void {
    this.AuthService.sendConfirmEmail().subscribe(
      () => console.log('success'), // TODO Need add notify success
      (error) => {
        // TODO Need add notify for show error type "error.description"
        if (error.description !== '') console.log(error.description);
      })
  }
}
