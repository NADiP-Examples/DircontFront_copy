import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

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
export class UserDataComponent implements OnInit {
  @Input() user_data: Object;
  @Input() personal_data: Object;
  @Input() form_view:Boolean;
  // TODO: Create class ValidateErrors
  errors = {};

  required_fields = [
    'second_name', 'first_name', 'patronymic',
  ];

  MASKS = MASKS;

  constructor(private notify: NotificationsService) {
  }

  ngOnInit() {

  }

  validate() {
    let error_text = 'Поле неможет быть пустое.';
    this.errors = {};
    for (let field_name of this.required_fields){
      if (this.personal_data[field_name].length == 0){
        // console.log(`field ${field_name} is empty`);
        // if (!this.errors[field_name]){
          this.errors[field_name]= [error_text];
      }
    }
    if (!_.isEmpty(this.errors)) {
      this.notify.error('Ошибка!', 'Данные заполнены не полностью');
      return false
    }
    return true
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
