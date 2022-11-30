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
    setServerInitialItemsInFavorites: (state, action) => {
      state.inFavorites = action.payload;
    },
    setServerItemInFavorites: (state, action) => {
      state.inFavorites = [...state.inFavorites, action.payload];
    },
    deleteServerItemFromFavorites: (state, action) => {
      state.inFavorites = state.inFavorites.filter((elId) => elId !== action.payload);
    },
  },
});

export const {
  setLocallyItemInFavorites,
  setLocallyInitialItemsInFavorites,
  deleteLocallyItemFromFavorites,
  setServerInitialItemsInFavorites,
  setServerItemInFavorites,
  deleteServerItemFromFavorites,
} = inFavoritesSlice.actions;

export default inFavoritesSlice.reducer;

export const gettWishList = () => async (dispatch) => {
  try {
    const { data, status } = await axios('/wishlist', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    if (data !== null && status) {
      const itemIds = data.products.map(({ _id }) => _id);
      dispatch(setServerInitialItemsInFavorites(itemIds));
    } else {
      dispatch(setServerInitialItemsInFavorites([]));
    }
  } catch (err) {
    console.error(err);
  }
};

export const addItemtoWishList = (id) => async (dispatch) => {
  try {
    const { status } = await axios(`/wishlist/${id}`, {
      method: 'PUT',
      headers: { Authorization: localStorage.getItem('token') },
    });
    if (status === 200) {
      dispatch(setServerItemInFavorites(id));
    }
  } catch (err) {
    console.error(err);
  }
};

export const deleteItemtoWishList = (id) => async (dispatch) => {
  try {
    const { status } = await axios(`/wishlist/${id}`, {
      method: 'DELETE',
      headers: { Authorization: localStorage.getItem('token') },
    });
    if (status === 200) {
      dispatch(deleteServerItemFromFavorites(id));
    }
  } catch (err) {
    console.error(err);
  }
};
