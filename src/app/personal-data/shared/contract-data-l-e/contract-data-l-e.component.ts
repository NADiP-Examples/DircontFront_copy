import { Component, OnInit, Input } from '@angular/core'
import { DatePickerOptions } from 'ng2-datepicker'

import { MASKS } from 'app/personal-data/personal-data-edit/personal-data-edit.component'

@Component({
  selector: 'contract-data-le',
  templateUrl: './contract-data-l-e.component.html',
  styleUrls: ['./contract-data-l-e.component.sass']
})
export class ContractDataLEComponent implements OnInit {
  @Input() contract_data: Object;
  @Input() personal_data: Object;
  @Input() status: Object;

  options: DatePickerOptions;
  MASKS = MASKS;

  constructor() {
  }

  ngOnInit() {
  }
}
