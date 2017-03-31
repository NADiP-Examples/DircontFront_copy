import { Component, OnInit, Input } from '@angular/core'
import { DatePickerOptions } from 'ng2-datepicker'

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

  // date: DateModel;
  options: DatePickerOptions;

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

  validate(){
    return true
  }

}
