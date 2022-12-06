import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { CatalogTourCard } from '../../features/Catalogue/components';
import { gettWishList } from '../../store/slices/inFavorites/inFavorites';
import { setIsLoading, getProducts } from '../../store/slices/catalogueSlice/catalogueSlice';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.catalogue.products, shallowEqual);
  const inFavorites = useSelector((state) => state.favorites.inFavorites);
  const isLogin = useSelector((state) => state.userReducer.isLogin);
  useEffect(() => {
    if (products.length <= 0) {
      dispatch(setIsLoading(true));
      dispatch(getProducts());
      dispatch(setIsLoading(false));
    }
  }, []);
  useEffect(() => {
    dispatch(gettWishList(isLogin));
  }, [isLogin]);
  return (
    <>
      <Grid container sx={{ mt: '60px', gap: '40px', p: 5, justifyContent: 'center' }}>
        {products.map(({ name, currentPrice, duration, description, imageUrls, _id }) => {
          const checkForFavorites = inFavorites.find((itemId) => _id === itemId);
          if (checkForFavorites) {
            return (
              <CatalogTourCard
                key={_id}
                name={name}
                description={description}
                currentPrice={currentPrice}
                duration={duration}
                imageUrls={imageUrls}
                id={_id}
                inFavorites={checkForFavorites ? !!checkForFavorites : false}
                inFavoritesCounter={inFavorites.length - 1}
              />
            );
          }
          return null;
        })}
      </Grid>
      {inFavorites.length === 0 && (
        <Typography variant="h2" sx={{ padding: '100px', textAlign: 'center' }}>
          No items found
        </Typography>
      )}
    </>
  );
};

export default FavoritesPage;
