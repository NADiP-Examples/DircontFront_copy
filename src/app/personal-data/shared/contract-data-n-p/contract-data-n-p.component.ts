import { Component, OnInit, Input, EventEmitter } from '@angular/core'
import { DatePickerOptions, DateModel } from 'app/ng2-datepicker/ng2-datepicker.module'
import * as moment from "moment";

import { MASKS } from 'app/personal-data/personal-data-edit/personal-data-edit.component'

@Component({
  selector: 'contract-data-np',
  templateUrl: 'contract-data-n-p.component.html',
  styleUrls: ['contract-data-n-p.component.sass']
})

export class ContractDataNPComponent implements OnInit {
  @Input() personal_data: Object;
  @Input() form_view: Object;

  MASKS = MASKS;

  options: DatePickerOptions;

  test_date:DateModel = new DateModel();

  constructor() {
    this.options = new DatePickerOptions(
      {
        format: 'YYYY-MM-DD',
        autoApply: true,
        locale: 'ru'
      });
  }

  ngOnInit() {
  }

  setDate(){
    // this.event.emit({type:'setDate', data: new Date('2015-10-10')});
    this.test_date.formatted = '2000-02-10';
  }

  onChange(){
    console.log("Change test_date");
  }

  validate(){
    return true
  }

}
