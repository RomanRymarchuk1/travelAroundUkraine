import { combineReducers, configureStore } from '@reduxjs/toolkit';
import isLogin from './isLogin';

const rootReduser = combineReducers({
  isLogin,
});

const store = configureStore({
  reducer: rootReduser,
});

export default store;
