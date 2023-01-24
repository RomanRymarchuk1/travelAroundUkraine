import {
  createSlice,
  // createAsyncThunk
} from '@reduxjs/toolkit';
// import axiosConfig from '../../../axiosConfig';
import axios from 'axios';

// export const fetchFilteredTours = createAsyncThunk(
//   'products/fetchFilteredTours',
//   async (params, page, { rejectWithValue }) => {
//     try {
//       const { data } = await axiosConfig(`/products/filter?${params}&perPage=5&startPage=${page}`);
//       return data;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );

const initialState = {
  tours: [],
  toursQty: null,
  filterParams: {},
  isFilter: false,
  allToursPrices: [],
  prices: [],
  categories: [],
  seasons: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setFilteredTours: (state, action) => {
      state.tours = action.payload;
    },
    setFilteredToursQty: (state, action) => {
      state.toursQty = action.payload;
    },
    setIsFilter: (state, action) => {
      state.isFilter = action.payload;
    },
    setAllToursPrices: (state, action) => {
      state.allToursPrices = action.payload;
    },
    setMinPrice: (state, action) => {
      state.prices[0] = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.prices[1] = action.payload;
    },
    setPricesInFilterParams: (state, action) => {
      state.filterParams.prices = action.payload;
    },
    setCategories: (state, action) => {
      if (state.categories.includes(action.payload)) {
        state.categories = state.categories.filter((el) => el !== action.payload);
      } else {
        state.categories.push(action.payload);
      }
    },
    setAllCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCategoriesInFilterParams: (state, action) => {
      state.filterParams.categories = action.payload;
    },
    setSeasons: (state, action) => {
      if (state.seasons.includes(action.payload)) {
        state.seasons = state.seasons.filter((el) => el !== action.payload);
      } else {
        state.seasons.push(action.payload);
      }
    },
    setAllSeasons: (state, action) => {
      state.seasons = action.payload;
    },
    setSeasonsInFilterParams: (state, action) => {
      state.filterParams.season = action.payload;
    },
  },
});

export const {
  setFilteredTours,
  setFilteredToursQty,
  setIsFilter,
  setAllToursPrices,
  setMinPrice,
  setMaxPrice,
  setPricesInFilterParams,
  setCategories,
  setAllCategories,
  setCategoriesInFilterParams,
  setSeasons,
  setAllSeasons,
  setSeasonsInFilterParams,
} = filterSlice.actions;

export const fetchFilteredTours = (params, page) => async (dispatch) => {
  try {
    const { data, status } = await axios(`/products/filter?${params}&perPage=5&startPage=${page}`);

    if (status) {
      dispatch(setFilteredToursQty(data.productsQuantity));
      dispatch(setFilteredTours(data.products));
    }
  } catch (err) {
    console.error(err.message);
  }
};

export default filterSlice.reducer;
