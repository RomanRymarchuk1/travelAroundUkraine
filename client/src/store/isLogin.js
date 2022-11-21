/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  isLogin: !!localStorage.getItem('token'),
};

export const toggleIsLogin = createAction('TOGGLE_IS_LOGIN');

export default createReducer(initialState, {
  [toggleIsLogin]: (state) => {
    state.isLogin = !state.isLogin;
  },
});
