import { Component, OnInit, Input } from '@angular/core'
import { DatePickerOptions } from 'app/ng2-datepicker/ng2-datepicker.module'

import { MASKS } from 'app/personal-data/personal-data-edit/personal-data-edit.component'

@Component({
  selector: 'contract-data-ie',
  templateUrl: './contract-data-i-e.component.html',
  styleUrls: ['./contract-data-i-e.component.sass']
})
export class ContractDataIEComponent implements OnInit {
  @Input() personal_data: Object;
  @Input() form_view: Object;

  options: DatePickerOptions;
  MASKS = MASKS;

  constructor() { }

  ngOnInit() {
  }

}
