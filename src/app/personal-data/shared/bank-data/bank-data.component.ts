import { Component, AfterViewInit, Input, ViewChildren, QueryList } from '@angular/core'
import { NgModel, NgForm, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MASKS } from 'app/personal-data/personal-data-edit/personal-data-edit.component'

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

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.controls.forEach((control: NgModel) => {
      this.parentForm.addControl(control);
    });
  }

}
