/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axiosConfig from '../../../axiosConfig';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    setCart: (state, action) => {
      state.data = action.payload;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default cartSlice.reducer;

export const { setCart, setIsLoading } = cartSlice.actions;

export const addProduct = (productId) => async (dispatch) => {
  try {
    const { data, status } = await axiosConfig.put(`/cart/${productId}`);
    const { products } = data;


    if (status) {
      dispatch(setCart(products));
    }
  } catch (err) {
    console.error(err.message);
  }
};
