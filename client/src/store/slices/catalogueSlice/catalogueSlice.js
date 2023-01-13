/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../../axiosConfig';

export const fetchCatalogue = createAsyncThunk('products/fetchCatalogue', async () => {});

export const fetchCatalogueProducts = createAsyncThunk(
  'products/fetchCatalogueProducts',
  async (page, { rejectWithValue }) => {
    try {
      const { data, status } = await axiosConfig.get(`products/filter?perPage=5&startPage=${page}`);
      if (status >= 200 && status <= 300) {
        return data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchPopularProducts = createAsyncThunk('products/isPopular', async (_, {rejectWithValue}) => {
  try {
    const { status, data } = await axiosConfig('/products/filter?isPopular=true');
    if (status >= 200 && status <= 300) {
      return data.products;
    }
  } catch (err) {
    return rejectWithValue(err);
  }
});

const catalogueSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    popular: [],
    isLoading: false,
    error: null,
    totalPages: null,
    currentPage: 1,
  },
  reducers: {
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = Number(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCatalogueProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCatalogueProducts.fulfilled, (state, action) => {
      const { products, productsQuantity } = action.payload;
      state.isLoading = false;
      state.products = products;
      state.totalPages = productsQuantity;
    });
    builder.addCase(fetchCatalogueProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchPopularProducts.fulfilled, (state, action) => {
      state.popular = action.payload;
    });
    builder.addCase(fetchPopularProducts.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { setCurrentPage } = catalogueSlice.actions;
export default catalogueSlice.reducer;
