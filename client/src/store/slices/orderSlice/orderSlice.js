import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const initialState = {
  data: {},
};

const orderSlice = createSlice({
  name: 'order',
  initialState,

  reducers: {},
});

// export const {  } = orderSlice.actions;

export default orderSlice.reducer;
