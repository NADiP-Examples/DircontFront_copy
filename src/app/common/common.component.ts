import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'common',
  templateUrl: './common.component.html',
})
export class CommonComponent {
  constructor(private AuthService: AuthService) {}
}
