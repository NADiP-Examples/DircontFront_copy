import { Component, AfterViewInit, Input, ViewChildren, QueryList } from '@angular/core'
import { NgModel, NgForm, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MASKS } from 'app/personal-data/global.data'

@Component({
  selector: 'contract-data-le',
  templateUrl: './contract-data-l-e.component.html',
  styleUrls: ['./contract-data-l-e.component.sass']
})
export class ContractDataLEComponent implements AfterViewInit {
  @ViewChildren(NgModel) controls: QueryList<NgModel>;
  @Input() personal_data: Object;
  @Input() status: Object;
  @Input() form_view: Object;

  MASKS = MASKS;

  constructor(private parentForm: NgForm,) {
  }


  ngAfterViewInit() {
    this.controls.forEach((control: NgModel) => {
      this.parentForm.addControl(control);
    });
  }

  duplicateFIO(){
    this.personal_data['contract_first_name'] = this.personal_data['first_name'];
    this.personal_data['contract_second_name'] = this.personal_data['second_name'];
    this.personal_data['contract_patronymic'] = this.personal_data['patronymic'];
  }
}
