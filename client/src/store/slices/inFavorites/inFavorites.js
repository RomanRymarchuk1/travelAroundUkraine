import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const gettWishList = async () => {
  try {
    const { data } = await axios.get('/wishlist');
    return data;
  } catch (err) {
    return console.warn(err);
  }
};

const inFavoritesSlice = createSlice({
  name: 'inFavorites',
  initialState: {
    inFavorites: [],
  },
  reducers: {
    setItemInFavorites: (state, action) => {
      if (action.payload.isLogin) {
        console.log('server request here');
      } else {
        state.inFavorites = [...state.inFavorites, action.payload.id];
        localStorage.setItem('inFavorites', state.inFavorites);
      }
    },
    setInitialItemsInFavorites: (state, action) => {
      if (action.payload === false && localStorage.getItem('inFavorites') !== null) {
        state.inFavorites = localStorage.getItem('inFavorites').split(',');
      } else if (action.payload === true) {
        state.inFavorites = gettWishList();
        localStorage.setItem('inFavorites', state.inFavorites);
      }
    },
    deleteItemFromFavorites: (state, action) => {
      if (action.payload.isLogin) {
        console.log('server request here');
      } else {
        state.inFavorites = state.inFavorites.filter((elId) => elId !== action.payload.id);
        localStorage.setItem('inFavorites', state.inFavorites);
      }
    },
  },
});

export const { setItemInFavorites, setInitialItemsInFavorites, deleteItemFromFavorites } = inFavoritesSlice.actions;

export default inFavoritesSlice.reducer;
