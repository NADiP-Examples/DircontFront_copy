import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LEGAL_STATUSES, RESIDENCES } from 'app/personal-data/personal-data-edit/personal-data-edit.component'

@Component({
  selector: 'select-status',
  templateUrl: 'select-status.component.html',
  styleUrls: ['select-status.component.sass']
})
export class SelectStatusComponent implements OnInit {
  @Input() status: Object;
  tmp;

  RESIDENCES = RESIDENCES;
  LEGAL_STATUSES = LEGAL_STATUSES;

  constructor() {
  }

  ngOnInit() {

  }

  changeResidence() {
    // Немного костыльное решение -(
    if (this.status['residency'] == 'other') {
      this.tmp = this.LEGAL_STATUSES.splice(1, 1);
      this.status['legal_status'] = 'natural_person';
    }
    else {
      this.LEGAL_STATUSES.splice(1, 0, this.tmp[0]);
    }
  }

}
