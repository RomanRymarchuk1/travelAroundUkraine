/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: {},
};

const tourSlice = createSlice({
  name: 'tour',
  initialState,

  reducers: {
    setTour: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setTour } = tourSlice.actions;

export const fetchTour = (tourId) => async (dispatch) => {
  try {
    const { data, status } = await axios(`/products/${tourId}`);

    if (status) {
      dispatch(setTour(data));
    }
  } catch (err) {
    console.error(err.message);
  }
};

export default tourSlice.reducer;
