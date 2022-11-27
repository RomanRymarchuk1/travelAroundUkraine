import axiosConfig from '../axiosConfig';

const getCustomer = async (rejectWithValue) => {
  try {
    const { data } = await axiosConfig.get('/customers/customer').then((loggedInCustomer) => loggedInCustomer);
    return data;
  } catch (err) {
    return rejectWithValue(err.response);
  }
};

export default getCustomer;
