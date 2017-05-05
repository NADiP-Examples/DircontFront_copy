import { Component, OnInit } from '@angular/core';

import { TOP_MENU_ITEMS } from './menu-tems';
import { ROLES } from 'app/CONSTANTS';

@Component({
  // selector: 'admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.sass']
})
export class AdminLayoutComponent implements OnInit {

  user = {};
  top_menu_items = TOP_MENU_ITEMS.unknown;
  ROLES = ROLES;

  constructor() {
  }

  ngOnInit() {
  }

}
