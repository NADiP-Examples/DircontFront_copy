import {
  Component,
  AfterViewInit,
  OnDestroy,
  Input,
  ViewChildren,
  QueryList
} from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { TranslateService } from 'ng2-translate'

import { PersonalDataService } from 'app/services/personal-data.service'
import { AuthService } from 'app/services/auth.service'

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
export class UserDataComponent implements AfterViewInit, OnDestroy {
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
              private authService: AuthService) {
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

  addPhone() {
    this.personal_data['phones'].push('');
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  changeEmail(emailBlock, changeEmailBlock) {
    emailBlock.hidden = true;
    changeEmailBlock.hidden = false;
  }

  confirmEmail(emailBlock, changeEmailBlock, form) {
    console.log('new_email = ', form.controls['new_email'].value);
    this.authService.changeEmail(form.controls['current_password'].value, form.controls['new_email'].value)
      .subscribe(
        () => {
          this.notify.success("Подтвердите!", "Вам на почту отправлено письмо для подтверждения смены почты");
          emailBlock.hidden = false;
          changeEmailBlock.hidden = true;
        },
        (error) => {
          error = error.json();
          if (error['message'] && error['message'] == 'Current password is incorrect')
            error = { errors: { current_password: ['password is incorrect'] } };
          this.errors = error.errors ? error.errors : {};
          // console.log('error -->', error)
        })
  }

  chancelChangeEmail(emailBlock, changeEmailBlock, form) {
    emailBlock.hidden = false;
    changeEmailBlock.hidden = true;
    // form.reset();
  }

  changePassword(passwordBlock, changePasswordBlock) {
    passwordBlock.hidden = true;
    changePasswordBlock.hidden = false;

  }

  confirmPassword(passwordBlock, changePasswordBlock, form) {
    console.log(form.controls['old_password'].value);
    console.log(form.controls['new_password'].value);
    if (form.controls['new_password'].value == form.controls['confirm_password'].value) {
      this.authService.changePassword(form.controls['old_password'].value, form.controls['new_password'].value)
        .subscribe(
          () => {
            // console.log("data -->", data);
            this.notify.success("Успешно!", "Пароль изменен");
            passwordBlock.hidden = false;
            changePasswordBlock.hidden = true;
            form.reset()
          },
          (error) => {
            error = error.json();
            if (error['message'] && error['message'] == 'Current password is incorrect')
              error = { errors: { current_password: ['password is incorrect'] } };
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

  chancelChangePassword(passwordBlock, changePasswordBlock, form) {
    passwordBlock.hidden = false;
    changePasswordBlock.hidden = true;
    form.reset();
    this.errors = {};
  }

  removePhone(index) {
    this.personal_data['phones'].splice(index, 1);
  }

}
