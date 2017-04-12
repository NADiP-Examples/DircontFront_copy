import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from 'app/shared/services/auth.service';
import { PersonalDataService } from 'app/shared/services/personal-data.service'

@Component({
  selector: 'common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.sass']
})
export class CommonComponent {
  constructor(private authService: AuthService, private personalDataService: PersonalDataService) {
  }
}
