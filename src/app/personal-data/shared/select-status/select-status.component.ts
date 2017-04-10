import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { LEGAL_STATUSES, RESIDENCES } from 'app/personal-data/personal-data-edit/personal-data-edit.component'

@Component({
  selector: 'select-status',
  templateUrl: 'select-status.component.html',
  styleUrls: ['select-status.component.sass']
})
export class SelectStatusComponent implements OnInit {
  @Input() status: Object;
  @Input() loadComplete;
  tmp;

  @Input() RESIDENCES;
  @Input() LEGAL_STATUSES;

  constructor() {
  }

  ngOnChanges(value){
    console.log('CHANGE! value -->', value);
    if (value['loadComplete']) this.onLoadComplete()
  }

  onLoadComplete(){
    console.log('Load COmplete');
    if (this.status['residency'] == 'other') this.tmp = this.tmp ? this.tmp : this.LEGAL_STATUSES.splice(1, 1);
  }

  ngOnInit() {

  }

  changeResidence() {
    // Немного костыльное решение -(
    if (this.status['residency'] == 'other') {
      this.status['legal_status'] = 'natural_person';
      this.tmp = this.LEGAL_STATUSES.splice(1, 1);
    }
    else {
      this.LEGAL_STATUSES.splice(1, 0, this.tmp[0]);
    }
  }

}
