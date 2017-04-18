import { Component, AfterViewInit, OnDestroy, OnChanges, Input, ViewChildren, QueryList } from '@angular/core'
import { NgModel, NgForm } from '@angular/forms';

import { MASKS } from 'app/personal-data/global.data'

@Component({
  selector: 'bank-data-ie',
  templateUrl: './bank-data-ie.component.html',
  styleUrls: ['./bank-data-ie.component.sass']
})
export class BankDataComponentIE implements AfterViewInit, OnDestroy, OnChanges {
  @ViewChildren(NgModel) controls: QueryList<NgModel>;
  @Input() personal_data;
  @Input() form_view: Object;
  bank_data_select = 'requisites';

  constructor(private parentForm: NgForm,) { }
  MASKS = MASKS;

  ngOnChanges(value){
    if (value['personal_data']){
      let personal_data = value['personal_data']['currentValue'];
      if (personal_data['bankcard_number']){
        this.bank_data_select = 'card';
      }
    }
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

  toggle_bank_data(){
    this.bank_data_select = this.bank_data_select == 'requisites' ? 'card': 'requisites';
    this.controls.forEach((control: NgModel) => {
      this.parentForm.removeControl(control);
      control.reset();
    });
    setTimeout(() => {
      this.controls.forEach((control: NgModel) => {
        this.parentForm.addControl(control);
      });
    }, 0);
  }

}
