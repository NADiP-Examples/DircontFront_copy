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

import { PersonalDataService } from 'app/services/personal-data.service'

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
              private translateService: TranslateService,
              private personalDataService: PersonalDataService) {
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

  confirmPassword(passwordBlock, changePasswordBlock, form) {
    if (form.controls['new_password'].value == form.controls['confirm_password'].value) {
      this.personalDataService.changePassword(form.controls['current_password'].value, form.controls['new_password'].value)
        .subscribe(
          (data) => {
            // console.log("data -->", data);
            this.notify.success("Успешно!", "Пароль изменен");
            passwordBlock.hidden = false;
            changePasswordBlock.hidden = true;
            form.reset()
          },
          (error) => {
            error = error.json();
            if (error['message'] && error['message'] == 'Current password is incorrect')
              error = {errors:{current_password: ['password is incorrect']}};
            this.errors = error.errors ? error.errors : {};
            // console.log('error -->', error)
          })
    } else {

      // console.log('form invalid');
      this.errors = {
        new_password: ['Passwords do not match.'],
        confirm_password: ['Passwords do not match.']
      }
      // for (let control_key in form.controls) {
      //   let control = form.controls[control_key];
      //   // console.log("control = ", control);
      //   control.markAsTouched()
    }
  }
  chancelChangePassword(passwordBlock, changePasswordBlock, form){
    passwordBlock.hidden = false;
    changePasswordBlock.hidden = true;
    form.reset();
    this.errors = {};
  }

  removePhone(index) {
    this.personal_data['phones'].splice(index, 1);
  }

}
