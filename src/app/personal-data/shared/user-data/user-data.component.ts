import {
  Component,
  AfterViewInit,
  Input,
  ViewChildren,
  QueryList
} from '@angular/core';
import { NgModel, NgForm, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { TranslateService } from 'ng2-translate'

import * as _ from "lodash";

import { MASKS } from 'app/personal-data/personal-data-edit/personal-data-edit.component'

// interface IFormData {
//   first_name: string,
//   second_name: string,
//   patronymic: string,
//   phones: string[]
// }

@Component({
  selector: 'user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.sass']
})
export class UserDataComponent implements AfterViewInit {
  @ViewChildren(NgModel) controls: QueryList<NgModel>;
  @Input() user_data: Object;
  @Input() personal_data: Object;
  @Input() form_view: Boolean;
  // TODO: Create class ValidateErrors
  errors = {};

  MASKS = MASKS;

  constructor(private parentForm: NgForm,
              private notify: NotificationsService,
              private translateService: TranslateService,) {
  }

  ngAfterViewInit() {
    this.controls.forEach((control: NgModel) => {
      this.parentForm.addControl(control);
    });
  }

  addPhone() {
    this.personal_data['phones'].push('');
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  changeEmail(emailField, emailChangeButton, emailConfirmButton) {
    emailField.disabled = false;
    emailChangeButton.hidden = true;
    emailConfirmButton.hidden = false;
  }

  confirmEmail(emailField, emailChangeButton, emailConfirmButton) {
    emailField.disabled = true;
    emailChangeButton.hidden = false;
    emailConfirmButton.hidden = true;
    //TODO: Отправить подтверждение изменения email
  }

  changePassword(passwordBlock, changePasswordBlock) {
    passwordBlock.hidden = true;
    changePasswordBlock.hidden = false;
  }

  confirmPassword(passwordBlock, changePasswordBlock, oldPasswordField, newPasswordField, confirmPasswordField) {
    passwordBlock.hidden = false;
    changePasswordBlock.hidden = true;
    //TODO: Сделать смену пароля
  }

  removePhone(index) {
    this.personal_data['phones'].splice(index, 1);
  }

}
