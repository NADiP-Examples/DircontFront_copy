import { Component, AfterViewInit, Input, ViewChildren, QueryList } from '@angular/core'
import { NgModel, NgForm } from '@angular/forms';

import { MASKS } from 'app/personal-data/global.data'

@Component({
  selector: 'bank-data',
  templateUrl: './bank-data.component.html',
  styleUrls: ['./bank-data.component.sass']
})
export class BankDataComponent implements AfterViewInit {
  @ViewChildren(NgModel) controls: QueryList<NgModel>;
  @Input() personal_data;
  @Input() form_view: Object;

  constructor(private parentForm: NgForm,) { }
  MASKS = MASKS;

  ngAfterViewInit() {
    this.controls.forEach((control: NgModel) => {
      this.parentForm.addControl(control);
    });
  }

}
