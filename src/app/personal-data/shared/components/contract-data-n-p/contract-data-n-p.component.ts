import { Component, AfterViewInit, Input, ViewChildren, QueryList } from '@angular/core'
import { NgModel, NgForm } from '@angular/forms';

import { MASKS } from 'app/personal-data/global.data'

@Component({
  selector: 'contract-data-np',
  templateUrl: 'contract-data-n-p.component.html',
  styleUrls: ['contract-data-n-p.component.sass']
})

export class ContractDataNPComponent implements AfterViewInit {
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

  duplicateAddress(){
    // this.personal_data['postal_address_postcode'] = this.personal_data['registration_address_postcode'];
    // if (this.personal_data['registration_address_country']){
    //   this.personal_data['postal_address_country'] = {};
    //   this.personal_data['postal_address_country']['id'] = this.personal_data['registration_address_country']['id'];
    // }
    // if (this.personal_data['registration_address_region']){
    //   this.personal_data['postal_address_region'] = {};
    //   this.personal_data['postal_address_region']['id'] = this.personal_data['registration_address_region']['id'];
    // }
    // if (this.personal_data['registration_address_city']){
    //   this.personal_data['postal_address_city'] = {};
    //   this.personal_data['postal_address_city']['id'] = this.personal_data['registration_address_city']['id'];
    // }
  }


}