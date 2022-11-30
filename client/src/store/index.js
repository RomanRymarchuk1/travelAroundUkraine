import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import tourReducer from './slices/tourSlice/tourSlice';
import catalogueReducer from './slices/catalogueSlice/catalogueSlice';
import inFavoritesSlice from './slices/inFavorites/inFavorites';

const store = configureStore({
  reducer: { userReducer, tour: tourReducer, catalogue: catalogueReducer, favorites: inFavoritesSlice },
});

export default store;
