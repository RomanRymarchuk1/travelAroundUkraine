import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import tourReducer from './slices/tourSlice/tourSlice';
import catalogueReducer from './slices/catalogueSlice/catalogueSlice';
import orderSlice from './slices/orderSlice/orderSlice';

const store = configureStore({
  reducer: { userReducer, tour: tourReducer, catalogue: catalogueReducer, order: orderSlice },
});

export default store;
