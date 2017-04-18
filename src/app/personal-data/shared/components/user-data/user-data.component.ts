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

import { AuthService } from 'app/shared/services/auth.service'

// import * as _ from "lodash";

import { MASKS } from 'app/personal-data/global.data'

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
    if (form.controls['new_password'].value == form.controls['confirm_password'].value) {
      this.authService.changePassword(form.controls['old_password'].value, form.controls['new_password'].value)
        .subscribe(
          () => {
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
          })
    } else {

      this.errors = {
        new_password: ['Passwords do not match.'],
        confirm_password: ['Passwords do not match.']
      }
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
