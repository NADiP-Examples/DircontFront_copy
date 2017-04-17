export const MASKS = {
  //8 923 600 11 12
  phone: [/\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/],
  passport_division_code: [/[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/],
  only_number: [/[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/, /[\d]/,],
  card: [/[\d]/, /[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/,
    '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/, '-', /[\d]/, /[\d]/, /[\d]/, /[\d]/,]
};
