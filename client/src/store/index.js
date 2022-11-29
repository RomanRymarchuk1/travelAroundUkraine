import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import tourReducer from './slices/tourSlice/tourSlice';
import catalogueSlice from './slices/catalogueSlice/catalogueSlice';

const store = configureStore({
  reducer: { userReducer, tour: tourReducer, catalogue: catalogueSlice },
});

export default store;
