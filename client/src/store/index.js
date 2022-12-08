import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice/userSlice';
import tourReducer from './slices/tourSlice/tourSlice';
import catalogueReducer from './slices/catalogueSlice/catalogueSlice';
import cartReducer from './slices/cartSlice/cartSlice';
import inFavoritesReducer from './slices/inFavoritesSlice/inFavorites';

const store = configureStore({
  reducer: {
    userReducer,
    tour: tourReducer,
    catalogue: catalogueReducer,
    cart: cartReducer,
    favorites: inFavoritesReducer,
  },
});

export default store;
