import axiosConfig from '../axiosConfig';

const getCustomer = async () => {
  try {
    const { data } = await axiosConfig.get('/customers/customer').then((loggedInCustomer) => loggedInCustomer);
    return data;
  } catch (err) {
    return console.log(err.response);
  }
};

export default getCustomer;
