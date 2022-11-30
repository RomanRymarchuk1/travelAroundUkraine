import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const inFavoritesSlice = createSlice({
  name: 'inFavorites',
  initialState: {
    inFavorites: [],
  },
  reducers: {
    setLocallyItemInFavorites: (state, action) => {
      state.inFavorites = [...state.inFavorites, action.payload];
      localStorage.setItem('inFavorites', state.inFavorites);
    },
    setLocallyInitialItemsInFavorites: (state) => {
      if (localStorage.getItem('inFavorites') !== null) {
        state.inFavorites = localStorage.getItem('inFavorites').split(',');
      }
    },
    deleteLocallyItemFromFavorites: (state, action) => {
      state.inFavorites = state.inFavorites.filter((elId) => elId !== action.payload);
      localStorage.setItem('inFavorites', state.inFavorites);
    },
    setServerItemsInFavorites: (state, action) => {
      state.inFavorites = action.payload;
    },
  },
});

export const {
  setLocallyItemInFavorites,
  setLocallyInitialItemsInFavorites,
  deleteLocallyItemFromFavorites,
  setServerItemsInFavorites,
} = inFavoritesSlice.actions;

export default inFavoritesSlice.reducer;

export const gettWishList = async (dispatch) => {
  try {
    const { data, status } = await axios('/wishlist', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    if (!status && data === null) {
      dispatch(setServerItemsInFavorites(data));
    } else {
      dispatch(setServerItemsInFavorites([]));
    }
  } catch (err) {
    console.error(err);
  }
};
