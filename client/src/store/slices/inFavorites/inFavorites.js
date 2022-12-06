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
    },
    setInitialState: (state, action) => {
      state.inFavorites = action.payload;
    },
    deleteItemFromFavorites: (state, action) => {
      state.inFavorites = state.inFavorites.filter((elId) => elId !== action.payload);
    },
  },
});

export const { setItemInFavorites, setInitialState, deleteItemFromFavorites } = inFavoritesSlice.actions;

export default inFavoritesSlice.reducer;

export const gettWishList = (isLogin) => async (dispatch) => {
  if (isLogin === true) {
    try {
      const { data, status } = await axios('/wishlist', {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      if (data !== null && status) {
        const itemIds = data.products.map(({ _id }) => _id);
        dispatch(setInitialState(itemIds));
      } else {
        dispatch(setInitialState([]));
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    const localFavorites = localStorage.getItem('inFavorites')?.split(',');
    if (localFavorites) {
      dispatch(setInitialState(localFavorites));
    }
  }
};

export const addItemtoWishList = (isLogin, id) => async (dispatch) => {
  if (isLogin) {
    try {
      const { status } = await axios(`/wishlist/${id}`, {
        method: 'PUT',
        headers: { Authorization: localStorage.getItem('token') },
      });
      if (status === 200) {
        dispatch(setItemInFavorites(id));
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    const localFavorites = localStorage.getItem('inFavorites')?.split(',');
    if (localFavorites) {
      localFavorites.push(id);
      localStorage.setItem('inFavorites', localFavorites);
      dispatch(setItemInFavorites(id));
    } else {
      dispatch(setItemInFavorites(id));
      localStorage.setItem('inFavorites', [id]);
    }
  }
};

export const deleteItemfromWishList = (isLogin, id, inFavoritesCounter) => async (dispatch) => {
  if (isLogin && inFavoritesCounter > 0) {
    try {
      const { status } = await axios(`/wishlist/${id}`, {
        method: 'DELETE',
        headers: { Authorization: localStorage.getItem('token') },
      });
      if (status === 200) {
        dispatch(deleteItemFromFavorites(id));
      }
    } catch (err) {
      console.error(err);
    }
  } else if (isLogin && inFavoritesCounter === 0) {
    try {
      const { status } = await axios(`/wishlist`, {
        method: 'DELETE',
        headers: { Authorization: localStorage.getItem('token') },
      });
      if (status === 200) {
        dispatch(deleteItemFromFavorites(id));
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    const localFavorites = localStorage
      .getItem('inFavorites')
      .split(',')
      .filter((elId) => elId !== id);
    dispatch(deleteItemFromFavorites(id));
    if (localFavorites.length === 0) {
      localStorage.removeItem('inFavorites');
    } else {
      localStorage.setItem('inFavorites', localFavorites);
    }
  }
};
