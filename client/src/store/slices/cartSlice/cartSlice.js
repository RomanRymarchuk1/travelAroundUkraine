/* eslint-disable no-underscore-dangle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosConfig from '../../../axiosConfig';
// import updateCart from '../../../api/updateCart';
import writeToLocalStorage from '../../utils/writeToLocalStorage';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const fetchCart = createAsyncThunk('cart/fetchCart', async (testLoad, { rejectWithValue }) => {
  try {
    const { data } = await axiosConfig('/cart');
    return data;
  } catch (err) {
    console.error(err.message);
    return rejectWithValue('Something went wrong. Please reload the page or try again later.');
  }
});

export const deleteOnlineCart = createAsyncThunk('cart/deleteOnlineCart', async ({ rejectWithValue }) => {
  try {
    await axiosConfig.delete('/cart');
  } catch (err) {
    console.error(err.message);
    return rejectWithValue('Something went wrong. Please try again later.');
  }
});

export const addProduct = createAsyncThunk('cart/addProduct', async (productId, { rejectWithValue }) => {
  try {
    const { data } = await axiosConfig.put(`/cart/${productId}`);
    return data;
  } catch (err) {
    console.error(err.message);
    return rejectWithValue('Something went wrong. Please try again later.');
  }
});

export const decreaseQuantity = createAsyncThunk('cart/decreaseQuantity', async (productId, { rejectWithValue }) => {
  try {
    const { data } = await axiosConfig.delete(`/cart/product/${productId}`);
    return data;
  } catch (err) {
    console.error(err.message);
    return rejectWithValue('Something went wrong. Please try again later.');
  }
});

export const deleteProduct = createAsyncThunk('cart/deleteProduct', async (productId, { rejectWithValue }) => {
  try {
    const { data } = await axiosConfig.delete(`/cart/${productId}`);
    return data;
  } catch (err) {
    console.error(err.message);
    return rejectWithValue('Something went wrong. Please try again later.');
  }
});

export const migrateCart = createAsyncThunk('cart/migrateCart', async () => {});

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    setCartFromLocal: (state) => {
      const cart = JSON.parse(localStorage.getItem('cart'));
      if (cart) {
        state.data = cart;
      }
    },

    addProductToLocal: (state, action) => {
      const index = state.data.findIndex((item) => item.product._id === action.payload._id);

      if (index === -1) {
        state.data.push({ product: { ...action.payload }, cartQuantity: 1 });
        writeToLocalStorage('cart', state.data);
      } else {
        state.data[index].cartQuantity += 1;
        writeToLocalStorage('cart', state.data);
      }
    },

    deleteCart: (state) => {
      state.data = [];
    },

    decreaseProductFromLocal: (state, action) => {
      const index = state.data.findIndex((item) => item.product._id === action.payload);
      state.data[index].cartQuantity -= 1;
      writeToLocalStorage('cart', state.data);
    },

    delProductFromLocal: (state, action) => {
      const index = state.data.findIndex((item) => item.product._id === action.payload);
      state.data.splice(index, 1);
      writeToLocalStorage('cart', state.data);
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });

    builder.addCase(fetchCart.fulfilled, (state, action) => {
      if (action.payload) {
        const { products } = action.payload;
        state.data = products;
      }
      state.isLoading = false;
    });

    builder.addCase(fetchCart.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(deleteOnlineCart.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });

    builder.addCase(deleteOnlineCart.fulfilled, (state) => {
      state.data = [];
      state.isLoading = false;
    });

    builder.addCase(deleteOnlineCart.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(addProduct.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      if (action.payload) {
        const { products } = action.payload;
        state.data = products;
      }
      state.isLoading = false;
    });

    builder.addCase(addProduct.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(decreaseQuantity.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });

    builder.addCase(decreaseQuantity.fulfilled, (state, action) => {
      const { products } = action.payload;
      state.data = products;
      state.isLoading = false;
    });

    builder.addCase(decreaseQuantity.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(deleteProduct.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const { arg } = action.meta;
      const { products } = action.payload;
      console.log(products);
      const { _id } = products[0].product;

      if (products.length === 1 && _id === arg) {
        state.data = [];
      } else state.data = products;
    });

    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export default cartSlice.reducer;

export const {
  setCartFromLocal,
  addProductToLocal,
  deleteCart,
  decreaseProductFromLocal,
  delProductFromLocal,
  setIsLoading,
} = cartSlice.actions;

// export const migrateCart = () => async (dispatch) => {
//   const cart = JSON.parse(localStorage.getItem('cart'));
//   if (cart) {
//     const { products } = await updateCart(cart);
//     dispatch(setCart(products));
//     localStorage.removeItem('cart');
//   }
// };
