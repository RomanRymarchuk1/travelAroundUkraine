import { createSlice,
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
  duration: [],
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
    setAllToursPrices: (state, action) => {
      state.allToursPrices = action.payload;
    },
    setMinPrice: (state, action) => {
      state.filterParams.price_from = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.filterParams.price_to = action.payload;
    },
    setFilterParams: (state, action) => {
      state.filterParams = action.payload;
    },
    setIsFilter: (state, action) => {
      state.isFilter = action.payload;
    },


    
    setDuration: (state, action) => {
      if (state.duration.includes(action.payload)) {
        state.duration = state.duration.filter((el) => el !== action.payload);
      } else {
        state.duration.push(action.payload);
      }
    },
    setClearDuration: (state, action) => {
      state.duration = action.payload;
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
  },

});

export const {
  setFilteredTours,
  setFilteredToursQty,
  setIsFilter,
  setAllToursPrices,
  setDuration,
  setSeasons,
  setAllSeasons,
  setClearDuration,
  setFilterParams,
  setMinPrice,
  setMaxPrice,
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
