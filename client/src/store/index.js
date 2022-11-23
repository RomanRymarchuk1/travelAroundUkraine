import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import catalogueReducer from './slices/catalogueSlice';

const store = configureStore({
  reducer: { userReducer, catalogueReducer },
});

export default store;
