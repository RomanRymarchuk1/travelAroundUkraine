import { createSlice } from '@reduxjs/toolkit';
import axiosConfig from '../../../axiosConfig';

const inFavoritesReducer = createSlice({
  name: 'inFavorites',
  initialState: {
    inFavorites: [],
  },
  reducers: {
    setItemInFavorites: (state, action) => {
      state.inFavorites.push(action.payload);
    },
    setInitialState: (state, action) => {
      state.inFavorites = action.payload;
    },
    deleteItemFromFavorites: (state, action) => {
      state.inFavorites = state.inFavorites.filter((elId) => elId !== action.payload);
    },
  },
});

export const { setItemInFavorites, setInitialState, deleteItemFromFavorites } = inFavoritesReducer.actions;

export default inFavoritesReducer.reducer;

export const gettWishList = (isLogin) => async (dispatch) => {
  if (isLogin) {
    try {
      const { data } = await axiosConfig('/wishlist');
      if (data) {
        const itemIds = data.products.map(({ _id }) => _id);
        dispatch(setInitialState(itemIds));
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
      const { status } = await axiosConfig(`/wishlist/${id}`, {
        method: 'PUT',
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
      const { status } = await axiosConfig(`/wishlist/${id}`, {
        method: 'DELETE',
      });
      if (status === 200) {
        dispatch(deleteItemFromFavorites(id));
      }
    } catch (err) {
      console.error(err);
    }
  } else if (isLogin && inFavoritesCounter === 0) {
    try {
      const { status } = await axiosConfig(`/wishlist`, {
        method: 'DELETE',
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
