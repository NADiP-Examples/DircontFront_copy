import { Component, AfterViewInit, OnDestroy, Input, ViewChildren, QueryList } from '@angular/core'
import { NgModel, NgForm } from '@angular/forms';

import { MASKS } from 'app/personal-data/global.data'

@Component({
  selector: 'contract-data-ie',
  templateUrl: './contract-data-i-e.component.html',
  styleUrls: ['./contract-data-i-e.component.sass']
})
export class ContractDataIEComponent implements AfterViewInit, OnDestroy {
  @ViewChildren(NgModel) controls: QueryList<NgModel>;
  @Input() personal_data: Object;
  @Input() form_view: Object;

  MASKS = MASKS;

  constructor(private parentForm: NgForm,) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.controls.forEach((control: NgModel) => {
      this.parentForm.addControl(control);
    });
  }

  ngOnDestroy() {
    this.controls.forEach((control: NgModel) => {
      this.parentForm.removeControl(control);
    });
  }

  duplicateFIO(){
    this.personal_data['contract_first_name'] = this.personal_data['first_name'];
    this.personal_data['contract_second_name'] = this.personal_data['second_name'];
    this.personal_data['contract_patronymic'] = this.personal_data['patronymic'];
  }

}
