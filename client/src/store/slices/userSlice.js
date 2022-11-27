/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getCustomer from '../../api/getCustomer';

const initialState = {
  isLogin: !!localStorage.getItem('token'),
  userData: null,
  error: null,
  isLoading: false,
};

export const fetchUserInfo = createAsyncThunk('user/feacthUserInfo', async (_, { rejectWithValue }) => {
  const response = await getCustomer(rejectWithValue);
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    toggleIsLogin: (state) => {
      state.isLogin = !state.isLogin;
    },
  },

  extraReducers: {
    [fetchUserInfo.pending]: (state, action) => {
      state.userData = action.payload;
      state.isLoading = true;
    },

    [fetchUserInfo.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
    },

    [fetchUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { toggleIsLogin } = userSlice.actions;

export default userSlice.reducer;
