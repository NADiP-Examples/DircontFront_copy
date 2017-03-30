import { Component, OnInit, ViewChild } from '@angular/core'
import { DateModel } from 'ng2-datepicker'

import { UserDataComponent } from '../shared/user-data/user-data.component'
import { ContractDataNPComponent } from '../shared/contract-data-n-p/contract-data-n-p.component'
import { ContractDataIEComponent } from '../shared/contract-data-i-e/contract-data-i-e.component'
import { ContractDataLEComponent } from '../shared/contract-data-l-e/contract-data-l-e.component'

export let LEGAL_STATUSES = [
  {
    value: 'natural_person',
    print_name: 'Физ.лицо'
  },
  {
    value: 'individual_entrepreneur',
    print_name: 'ИП'
  },
  {
    value: 'legal_entity',
    print_name: 'Юр.лицо'
  },
];

export const RESIDENCES = [
  {
    value: 'russian_federation',
    print_name: 'Резидент РФ'
  },
  {
    value: 'other',
    print_name: 'Иное'
  },
];

export const MASKS = {
  //+7(923)600-11-12
  phone: ['+', '7', '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
  passport_division_code: [/[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/],
  only_number: [/[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/,],
  card: [/[\d]/, /[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/,
    '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/,]
};

@Component({
  // selector: 'app-profile-edit',
  templateUrl: 'personal-data-edit.component.html',
  styleUrls: ['personal-data-edit.component.sass']
})

export class PersonalDataEditComponent implements OnInit {
  @ViewChild(UserDataComponent) userDataComponent;
  @ViewChild(ContractDataNPComponent) contractDataNPComponent;
  status = {
    legal_status: LEGAL_STATUSES[0].value,
    residency: RESIDENCES[0].value,
  };

  // Данные блока "Ваши данные"
  personal_data = {
    second_name: '',
    first_name: '',
    patronymic: '',
    phones: ['',],
    site: ''
  };

  // Данные блока "Данные для договора физ.лица"
  contract_data_np = {
    passport: {
      series: '',
      number: '',
      date: DateModel,
      division_code: '',
      issued_by: '',
    },
    registration_address: {
      postcode: '',
      country: '',
      region: '',
      city: '',
      street: ''
    },
    postal_address: {
      postcode: '',
      country: '',
      region: '',
      city: '',
      street: ''
    },
    bankcard_number: '',
    itn: '',
  };
  // Данные блока "Данные для договора ИП"
  contract_data_ie = {
    second_name: '',
    first_name: '',
    patronymic: '',
    passport: {
      series: '',
      number: '',
      date: DateModel,
      division_code: '',
      issued_by: '',
    },
    registration_address: {
      postcode: '',
      country: '',
      region: '',
      city: '',
      street: ''
    },
    postal_address: {
      postcode: '',
      country: '',
      region: '',
      city: '',
      street: ''
    },
    certificate_number: '',
    certificate_date: DateModel,
    itn: '', // ИНН
    iec: '', // КПП
    psrnsp: '', // ОГРНИП
  };
  // Данные блока "Данные для договора юр.лицо"
  contract_data_le = {
    organization: {
      name: '',
      type: ''
    },
    certificate_number: '',
    certificate_date: DateModel,
    itn: '', // ИНН
    iec: '', // КПП
    psrn: '', // ОГРН
    second_name: '',
    first_name: '',
    patronymic: '',
    position: '', // Должность
    authority_basis: '', // Основание полномочий
    registration_address: {
      postcode: '',
      country: '',
      region: '',
      city: '',
      street: ''
    },
    postal_address: {
      postcode: '',
      country: '',
      region: '',
      city: '',
      street: ''
    },

  };

  // Данные блока "Банковские реквизиты"
  bank_data = {
    name: '',
    bic: '',
    corresponding_account: '',
    current_account: ''

  };

  //TODO: Заменить заглушку реальными данными
  // Данные аккаунта
  user_data = {
    email: 'user@mail.ru',
  };

  confirm_rules: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  showRules(event) {
    event.preventDefault();
    console.log("Show Rules here");
  }

  convertData() {
    let converters = {
      'russian_federation-natural_person': {
        "bankcard_number": this.contract_data_np.bankcard_number,
        "first_name": this.personal_data.first_name,
        "itn": this.contract_data_np.itn,
        "passport_date": this.contract_data_np.passport.date,
        "passport_division_code": this.contract_data_np.passport.division_code,
        "passport_issued_by": this.contract_data_np.passport.issued_by,
        "passport_number": this.contract_data_np.passport.number,
        "passport_series": this.contract_data_np.passport.series,
        "patronymic": this.personal_data.patronymic,
        "phones": this.personal_data.phones,
        "postal_address_city_id": this.contract_data_np.postal_address.city,
        "postal_address_country_id": this.contract_data_np.postal_address.country,
        "postal_address_postcode": this.contract_data_np.postal_address.postcode,
        "postal_address_region_id": this.contract_data_np.postal_address.region,
        "postal_address_street": this.contract_data_np.postal_address.street,
        "registration_address_city_id": this.contract_data_np.registration_address.city,
        "registration_address_country_id": this.contract_data_np.registration_address.country,
        "registration_address_postcode": this.contract_data_np.registration_address.postcode,
        "registration_address_region_id": this.contract_data_np.registration_address.region,
        "registration_address_street": this.contract_data_np.registration_address.street,
        "second_name": this.personal_data.second_name,
        "site": this.personal_data.site
      },
      'russian_federation-individual_entrepreneur': {
        "bank_bic": this.bank_data.bic,
        "bank_corresponding_account": this.bank_data.corresponding_account,
        "bank_current_account": this.bank_data.current_account,
        "bank_name": this.bank_data.name,
        "certificate_date": this.contract_data_ie.certificate_date,
        "certificate_number": this.contract_data_ie.certificate_number,
        "contract_first_name": this.contract_data_ie.first_name,
        "contract_patronymic": this.contract_data_ie.patronymic,
        "contract_second_name": this.contract_data_ie.second_name,
        "first_name": this.personal_data.first_name,
        "iec": this.contract_data_ie.iec,
        "itn": this.contract_data_ie.itn,
        "passport_date": this.contract_data_ie.passport.date,
        "passport_division_code": this.contract_data_ie.passport.division_code,
        "passport_issued_by": this.contract_data_ie.passport.issued_by,
        "passport_number": this.contract_data_ie.passport.number,
        "passport_series": this.contract_data_ie.passport.series,
        "patronymic": this.personal_data.patronymic,
        "phones": this.personal_data.phones,
        "psrnsp": "string",
        "postal_address_city_id": this.contract_data_ie.postal_address.city,
        "postal_address_country_id": this.contract_data_ie.postal_address.country,
        "postal_address_postcode": this.contract_data_ie.postal_address.postcode,
        "postal_address_region_id": this.contract_data_ie.postal_address.region,
        "postal_address_street": this.contract_data_ie.postal_address.street,
        "registration_address_city_id": this.contract_data_ie.registration_address.city,
        "registration_address_country_id": this.contract_data_ie.registration_address.country,
        "registration_address_postcode": this.contract_data_ie.registration_address.postcode,
        "registration_address_region_id": this.contract_data_ie.registration_address.region,
        "registration_address_street": this.contract_data_ie.registration_address.street,
        "second_name": this.personal_data.second_name,
        "site": this.personal_data.site
      },
      'russian_federation-legal_entity': {
        "authority_basis": this.contract_data_le.authority_basis,
        "contract_first_name": this.contract_data_le.first_name,
        "contract_patronymic": this.contract_data_le.patronymic,
        "contract_second_name": this.contract_data_le.second_name,
        "first_name": this.personal_data.first_name,
        "iec": this.contract_data_le.iec,
        "itn": this.contract_data_le.itn,
        "organization_name": this.contract_data_le.organization.name,
        "organization_type": this.contract_data_le.organization.type,
        "patronymic": this.personal_data.patronymic,
        "phones": this.personal_data.phones,
        "position": this.contract_data_le.position,
        "psrn": this.contract_data_le.psrn,
        "postal_address_city_id": this.contract_data_le.postal_address.city,
        "postal_address_country_id": this.contract_data_le.postal_address.country,
        "postal_address_postcode": this.contract_data_le.postal_address.postcode,
        "postal_address_region_id": this.contract_data_le.postal_address.region,
        "postal_address_street": this.contract_data_le.postal_address.street,
        "registration_address_city_id": this.contract_data_le.registration_address.city,
        "registration_address_country_id": this.contract_data_le.registration_address.country,
        "registration_address_postcode": this.contract_data_le.registration_address.postcode,
        "registration_address_region_id": this.contract_data_le.registration_address.region,
        "registration_address_street": this.contract_data_le.registration_address.street,
        "second_name": this.personal_data.second_name,
        "site": this.personal_data.site
      },

    };
    return converters[`${this.status.residency}-${this.status.legal_status}`]
  }

  save() {
    if (this.userDataComponent.validate() && this.contractDataNPComponent.validate()) {
      console.log("Save personal data")
    } else {
      console.log("Errors!!!")
    }
    let data = this.convertData();
    console.log("DATA = ", data);
  }

}
