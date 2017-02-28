import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.sass']
})
export class CommonComponent {
  constructor(private AuthService: AuthService) {}
}
