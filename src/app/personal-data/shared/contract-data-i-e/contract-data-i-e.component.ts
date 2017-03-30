import { Component, OnInit, Input } from '@angular/core'
import { DatePickerOptions } from 'ng2-datepicker'

import { MASKS } from 'app/personal-data/personal-data-edit/personal-data-edit.component'

@Component({
  selector: 'contract-data-ie',
  templateUrl: './contract-data-i-e.component.html',
  styleUrls: ['./contract-data-i-e.component.sass']
})
export class ContractDataIEComponent implements OnInit {
  @Input() contract_data: Object;
  @Input() personal_data: Object;

  options: DatePickerOptions;
  MASKS = MASKS;

  constructor() { }

  ngOnInit() {
  }

}
