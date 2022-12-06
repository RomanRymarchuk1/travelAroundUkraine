import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tours: [],
  prices: [0, 0],
  duration: [],
  seasons: [],
  isFilter: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setFilteredTours: (state, action) => {
      state.tours = action.payload;
    },
    setPrices: (state, action) => {
      state.prices = action.payload;
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

export const { setFilteredTours, setPrices, setIsFilter, setDuration, setSeasons, setAllSeasons } =
  filterSlice.actions;

export default filterSlice.reducer;
