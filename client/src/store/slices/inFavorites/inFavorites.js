import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const inFavoritesSlice = createSlice({
  name: 'inFavorites',
  initialState: {
    inFavorites: [],
  },
  reducers: {
    setItemInFavorites: (state, action) => {
      state.inFavorites = [...state.inFavorites, action.payload];
      localStorage.setItem('inFavorites', state.inFavorites);
    },
    setInitialItemsInFavorites: (state, action) => {
      state.inFavorites = [...state.inFavorites, ...action.payload];
      localStorage.setItem('inFavorites', state.inFavorites);
    },
    deleteItemFromFavorites: (state, action) => {
      state.inFavorites = state.inFavorites.filter((elId) => elId !== action.payload);
      localStorage.setItem('inFavorites', state.inFavorites);
    },
  },
});

export const { setItemInFavorites, setInitialItemsInFavorites, deleteItemFromFavorites } = inFavoritesSlice.actions;

export default inFavoritesSlice.reducer;

export const gettWishList = async (dispatch) => {
  try {
    const { data } = await axios.get('/wishlist');
    dispatch(setInitialItemsInFavorites(data));
  } catch (err) {
    console.warn(err);
  }
};
