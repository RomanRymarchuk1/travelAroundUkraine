import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import tourReducer from './slices/tourSlice/tourSlice';

const store = configureStore({
  reducer: { userReducer, tour: tourReducer },
});

export default store;
