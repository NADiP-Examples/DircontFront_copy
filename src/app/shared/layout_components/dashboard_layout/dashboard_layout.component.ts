import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'app/shared/services/auth.service';

import { MENU_ITEMS } from 'app/menu-tems';
import { ROLES } from 'app/CONSTANTS';

@Component({
  // selector: 'dashboard_layout',
  templateUrl: './dashboard_layout.component.html',
  styleUrls: ['./dashboard_layout.component.sass']
})
export class DashboardLayoutComponent {
  menu_items = MENU_ITEMS.admin_of_user;
  ROLES = ROLES;
  disabled = false;
  user = {};

  constructor(private router: Router,
              private authService: AuthService,) {

    // this.personalDataService.getSelf()
    //   .subscribe(user => {
    //     // console.log('user.type = ', user['type']);
    //     this.user = user;
    //     this.top_menu_items = TOP_MENU_ITEMS[user['type']];
    //     this.left_menu_items = LEFT_MENU_ITEMS[user['type']];
    //     this.disabled = !user['personal_id'];
    //   })
  }
}
