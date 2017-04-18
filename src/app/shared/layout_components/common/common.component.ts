import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from 'app/shared/services/auth.service';
import { PersonalDataService } from 'app/shared/services/personal-data.service'

import { TOP_MENU_ITEMS, LEFT_MENU_ITEMS } from './menu-tems'

@Component({
  selector: 'common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.sass']
})
export class CommonComponent {
  top_menu_items = TOP_MENU_ITEMS.unknown;
  left_menu_items = LEFT_MENU_ITEMS.unknown;
  disabled = false;

  constructor(private router: Router,
              private authService: AuthService,
              private personalDataService: PersonalDataService) {

    // TODO: Заменить костыль нормальным решением.
    router.events.subscribe((val)=> {
      if (val.url == '/personal_data') {this.disabled = false};
    });

    this.personalDataService.getSelf()
      .subscribe(user => {
        // console.log('user.type = ', user['type']);
        this.top_menu_items = TOP_MENU_ITEMS[user['type']];
        this.left_menu_items = LEFT_MENU_ITEMS[user['type']];
        this.disabled = !user['personal_id'];
      })
  }
}
