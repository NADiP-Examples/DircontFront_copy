import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from 'app/shared/services/auth.service';
import { PersonalDataService } from 'app/shared/services/personal-data.service'

import { TOP_MENU_ITEMS, LEFT_MENU_ITEMS } from '../../../menu-tems'
import { ROLES } from 'app/CONSTANTS'

@Component({
  // selector: 'common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.sass']
})
export class CommonComponent {
  top_menu_items = TOP_MENU_ITEMS.unknown;
  left_menu_items = LEFT_MENU_ITEMS.unknown;
  ROLES = ROLES;
  menu_disabled = false;
  user = {};

  constructor(private router: Router,
              private authService: AuthService,
              private personalDataService: PersonalDataService) {

    // router.events.subscribe(val => this.menu_disabled = val.url !== '/personal_data');

    this.personalDataService.getSelf()
      .subscribe(user => {
        this.user = user;
        this.top_menu_items = TOP_MENU_ITEMS[user['type']];
        this.left_menu_items = LEFT_MENU_ITEMS[user['type']];
        this.menu_disabled = !user['personal_id'];
      })
  }
}
