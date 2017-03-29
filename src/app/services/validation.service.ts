import { environment } from '../../environments/environment';

const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

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

}
