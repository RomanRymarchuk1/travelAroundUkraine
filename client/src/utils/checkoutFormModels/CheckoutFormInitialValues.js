import checkoutFormModel from './checkoutFormModel';

const {
  firstName,
  lastName,
  email,
  phone,
  addressOne,
  addressTwo,
  city,
  state,
  zipcode,
  country,
  cardType,
  nameOnCard,
  cardNumber,
  expiryDate,
  cvv,
} = checkoutFormModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [email.name]: '',
  [phone.name]: '',
  [addressOne.name]: '',
  [addressTwo.name]: '',
  [city.name]: '',
  [state.name]: '',
  [zipcode.name]: '',
  [country.name]: '',
  [cardType.name]: '',
  [nameOnCard.name]: '',
  [cardNumber.name]: '',
  [expiryDate.name]: '',
  [cvv.name]: '',
};
