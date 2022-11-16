import axiosConfig from '../axiosConfig';

const axiosLogIn = async (userData) => {
  try {
    axiosConfig.post('/customers/login', userData).then((res, rej) => {
      console.log(res);
      console.log(rej);
    });
  } catch (err) {
    console.log('err');
  }
};

export default axiosLogIn;
