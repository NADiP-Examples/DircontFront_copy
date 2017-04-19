import { Component, AfterViewInit, OnDestroy, Input, ViewChildren, QueryList } from '@angular/core'
import { NgModel, NgForm } from '@angular/forms';

import { MASKS } from 'app/personal-data/global.data'

@Component({
  selector: 'contract-data-le',
  templateUrl: './contract-data-l-e.component.html',
  styleUrls: ['./contract-data-l-e.component.sass']
})
export class ContractDataLEComponent implements AfterViewInit, OnDestroy {
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

  duplicateAddress(){
    this.personal_data['postal_address_postcode'] = this.personal_data['registration_address_postcode'];
    this.personal_data['postal_address_street'] = this.personal_data['registration_address_street'];


    if (this.personal_data['registration_address_country_id']){
      // console.log('country.id = ', this.personal_data['registration_address_country_id'])
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
