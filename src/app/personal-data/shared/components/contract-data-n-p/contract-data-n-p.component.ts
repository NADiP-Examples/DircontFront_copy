import { Component, AfterViewInit, OnDestroy, Input, ViewChildren, QueryList } from '@angular/core'
import { NgModel, NgForm } from '@angular/forms';

import { MASKS } from 'app/personal-data/global.data'

@Component({
  selector: 'contract-data-np',
  templateUrl: 'contract-data-n-p.component.html',
  styleUrls: ['contract-data-n-p.component.sass']
})

export class ContractDataNPComponent implements AfterViewInit, OnDestroy {
  @ViewChildren(NgModel) controls: QueryList<NgModel>;
  @Input() personal_data: Object;
  @Input() form_view: Object;

  MASKS = MASKS;



  constructor(private parentForm: NgForm,) {
    // this.options = new DatePickerOptions(
    //   {
    //     format: 'YYYY-MM-DD',
    //     autoApply: true,
    //     locale: 'ru'
    //   });
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

  duplicateAddress(){
    this.personal_data['postal_address_postcode'] = this.personal_data['registration_address_postcode'];
    this.personal_data['postal_address_street'] = this.personal_data['registration_address_street'];


    if (this.personal_data['registration_address_country_id']){
      this.personal_data['postal_address_country'] = {id: this.personal_data['registration_address_country_id']}
    }
    if (this.personal_data['registration_address_region_id']){
      this.personal_data['postal_address_region'] = {id: this.personal_data['registration_address_region_id']}
    }
    if (this.personal_data['registration_address_city_id']){
      this.personal_data['postal_address_city'] = {id: this.personal_data['registration_address_city_id']}
    }
  }


}
