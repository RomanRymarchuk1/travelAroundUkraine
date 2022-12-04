import axiosConfig from '../axiosConfig';

const postNewOrder = async ({
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
}) => {
  // body for logged in customer's order
  const body = {
    firstName,
    lastName,
    deliveryAddress: {
      country,
      city,
      state,
      zipcode,
      addressOne,
      addressTwo,
      // ? addresses: [addressOne, addressTwo],
    },
    paymentInfo: {
      cardType,
      cardNumber,
      nameOnCard,
      expiryDate,
      cvv,
    },
    email,
    mobile: phone,
    letterSubject: 'Thank you for order! You are welcome!',
    letterHtml: '<h1>Your order is placed</h1>',
  };

  const token = localStorage.getItem('token');

  // add customerId to body if customer is logged in
  if (token) {
    try {
      const {
        data: { _id },
      } = await axiosConfig.get('/customers/customer');

      body.customerId = _id;
    } catch (e) {
      throw e.response.data;
    }
  }

  // TODO: add additional params for non logged in customer into body

  console.log('post new order', body);
  try {
    const response = await axiosConfig.post('/orders', body);
    console.log(response);
  } catch (e) {
    throw e.response.data;
  }
};

export default postNewOrder;
