import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from 'app/services/auth.service';
import { PersonalDataService } from 'app/services/personal-data.service'

@Component({
  selector: 'common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.sass']
})
export class CommonComponent {
  constructor(private authService: AuthService, private personalDataService: PersonalDataService) {
  }
}
