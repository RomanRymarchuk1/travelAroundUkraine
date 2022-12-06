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

export const fetchCart = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const { data, status } = await axiosConfig('/cart');
    const { products } = data;

    if (status) {
      dispatch(setCart(products));
      dispatch(setIsLoading(false));
    }
  } catch (err) {
    console.error(err.message);
  }
};

export const addProduct = (id) => async (dispatch) => {
  try {
    const { data, status } = await axiosConfig.put(`/cart/${id}`);
    const { products } = data;

    if (status) {
      dispatch(setCart(products));
    }
  } catch (err) {
    console.error(err.message);
  }
};

export const decreaseProduct = (id) => async (dispatch) => {
  try {
    const { data, status } = await axiosConfig.delete(`/cart/product/${id}`);
    const { products } = data;

    if (status) {
      dispatch(setCart(products));
    }
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteCart = () => async (dispatch) => {
  try {
    const { status } = await axiosConfig.delete('/cart');

    if (status) {
      dispatch(setCart([]));
    }
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const { data, status } = await axiosConfig.delete(`/cart/${id}`);
    const { products } = data;

    if (status) {
      const { _id } = products[0].product;

      if (products.length === 1 && _id === id) {
        dispatch(deleteCart());
      } else dispatch(setCart(products));
    }
  } catch (err) {
    console.error(err.message);
  }
};
