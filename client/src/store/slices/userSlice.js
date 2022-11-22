/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: !!localStorage.getItem('token'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleIsLogin: (state) => {
      state.isLogin = !state.isLogin;
    },
  },
});

export const { toggleIsLogin } = userSlice.actions;

export default userSlice.reducer;
