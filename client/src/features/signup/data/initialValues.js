import formModel from './formModel';

const { firstName, lastName, login, email, password, retypePassword, phone, birthDate, gender, avatarUrl } = formModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [login.name]: '',
  [email.name]: '',
  [password.name]: '',
  [retypePassword.name]: '',
  [phone.name]: '',
  [birthDate.name]: new Date(),
  [gender.name]: '',
  [avatarUrl.name]: '',
};
