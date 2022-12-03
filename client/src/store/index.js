import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice/userSlice';
import tourReducer from './slices/tourSlice/tourSlice';
import catalogueReducer from './slices/catalogueSlice/catalogueSlice';

const store = configureStore({
  reducer: { userReducer, tour: tourReducer, catalogue: catalogueReducer },
});

export default store;
