import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { PersonalDataService } from 'app/shared/services/personal-data.service'

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.sass'],
})
export class TopMenuComponent implements OnChanges {
  @Input() menu_items;
  @Input() menu_disabled;

  constructor(private personalDataService: PersonalDataService) {
  }

  ngOnInit() {
  }

  ngOnChanges(value){
    console.log('ngOnChange value = ',value);
  }

}
