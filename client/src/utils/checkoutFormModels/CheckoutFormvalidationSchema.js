import * as yup from 'yup';
import checkoutFormModel from './checkoutFormModel';

const {
  firstName,
  lastName,
  email,
  phone,
  addressOne,
  city,
  zipcode,
  country,
  cardType,
  nameOnCard,
  cardNumber,
  expiryDate,
  cvv,
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  yup.object().shape({
    [firstName.name]: yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: yup.string().required(`${lastName.requiredErrorMsg}`),
    [email.name]: yup.string().email(`${email.invalidErrorMsg}`).required(`${email.requiredErrorMsg}`),
    [phone.name]: yup.number().required(`${phone.requiredErrorMsg}`),
  }),

  yup.object().shape({
    [addressOne.name]: yup.string().required(`${addressOne.requiredErrorMsg}`),
    [city.name]: yup.string().required(`${city.requiredErrorMsg}`),
    [zipcode.name]: yup.number().required(`${zipcode.requiredErrorMsg}`),
    [country.name]: yup.string().required(`${country.requiredErrorMsg}`),
  }),

  yup.object().shape({
    [cardType.name]: yup.string().required(`${cardType.requiredErrorMsg}`),
    [nameOnCard.name]: yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    [cardNumber.name]: yup
      .string()
      .matches(visaRegEx, cardNumber.invalidErrorMsg)
      .required(`${cardNumber.requiredErrorMsg}`),
    [expiryDate.name]: yup.string().required(`${expiryDate.requiredErrorMsg}`),
    [cvv.name]: yup.number().required(`${cvv.requiredErrorMsg}`).max(3, 'Maximum 3 digits').min(3, 'Minimum 3 digits'),
  }),
];
