export class Validation {

  static validateEmail(email): Array<string> {
    let errors = [];
    if (email.length < 1) errors.push("Поле email не должно быть пустое.");
    if (email.length > 255) errors.push("Поле email не должно превышать 255 симполов.");
    return errors
  }

  static validatePassword(password): Array<string> {
    let errors = [];
    if (password.length < 1) errors.push("Поле password не должно быть пустое.");
    if (password.length > 255) errors.push("Поле password не должно превышать 255 симполов.");

    return errors
  }

  static ValidateLogin(email, password) {
    let errors = <any>{};
    let emailErrors = Validation.validateEmail(email);
    let passErrors = Validation.validatePassword(password);

    if (emailErrors.length) errors.email = emailErrors;
    if (passErrors.length) errors.password = passErrors;

    return errors
  }

}
