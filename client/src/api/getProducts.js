import axiosConfig from '../axiosConfig';

const getProducts = async () => {
  try {
    const { data } = await axiosConfig.get('/products');
    return data;
  } catch (err) {
    return console.warn(err.response);
  }
};

export default getProducts;
