import { environment } from 'environments/environment';
import * as _ from "lodash";

const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const USER_TYPES = ['partner', 'admin_of_user', 'admin_of_direction', 'operator', 'accountant', 'expert', 'superuser'];

export class Validation {

  static validateEmail(email: string = ''): Array<string> {
    let errors = [];
    if (!email_regex.test(email)) errors.push('Невалидный email');
    return errors
  }

  static validatePassword(password: string = ''): Array<string> {
    let errors = [];
    if (password.length < 1) errors.push("Поле password не должно быть пустое.");
    if (password.length > 255) errors.push("Поле password не должно превышать 255 симполов.");

    return errors
  }

  static ValidateField(password: string = '', name: string = ''): Array<string> {
    let errors = [];
    if (password.length < 1) errors.push(`Поле ${name} не должно быть пустое.`);
    if (password.length > 255) errors.push(`Поле ${name} не должно превышать 255 симполов.`);
    return errors
  }

  static equalsPasswords(password: string = '', password_double: string = ''): Array<string> {
    return password !== password_double ? ["Пароли не совпадают."] : []
  }

  static ValidateLogin(email: string, password: string): Object {
    let errors = <any>{};
    let email_errors = Validation.validateEmail(email);
    let pass_errors = Validation.validatePassword(password);

    if (email_errors.length) errors.email = email_errors;
    if (pass_errors.length) errors.password = pass_errors;

    return errors
  }

  static ValidateRegister(email: string, password: string, password_double: string, captcha_token: string): Object {
    let errors = <any>{};
    let email_errors = Validation.validateEmail(email);
    let pass_errors = Validation.validatePassword(password);
    let pass_equals_errors = Validation.equalsPasswords(password, password_double);

    if (email_errors.length) errors.email = email_errors;
    if (pass_errors.length) errors.password = pass_errors;
    if (pass_equals_errors.length) errors.password_double = pass_equals_errors;
    if (!environment.skip_captcha && !captcha_token) errors.captcha = ['Необходимо разгадать капчу'];

    return errors
  }

  static ValidateInvite({email, type, second_name, first_name, patronymic}): Object {
    let errors = <any>{};
    let email_errors = Validation.validateEmail(email);
    let type_errors = USER_TYPES.find(t => t === type) ? [] : ['Выбрана неверная роль пользователя'];
    let second_name_errors = Validation.ValidateField(second_name, 'фамилия');
    let first_name_errors = Validation.ValidateField(first_name, 'имя');

    if (email_errors.length) errors.email = email_errors;
    if (type_errors.length) errors.type = type_errors;
    if (second_name_errors.length) errors.second_name = second_name_errors;
    if (first_name_errors.length) errors.first_name = first_name_errors;
    if (patronymic && patronymic.length > 255) errors.patronymic = [`Поле не должно превышать 255 симполов.`];

    return errors
  }

}
