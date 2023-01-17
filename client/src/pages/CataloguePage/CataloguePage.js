import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { styled, Stack, Box, Container, Typography, Pagination } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { CatalogTourCard, CatalogMainSection, CatalogMainFilter } from '../../features/Catalogue/components';
import { fetchCatalogueProducts, setCurrentPage } from '../../store/slices/catalogueSlice/catalogueSlice';
import { gettWishList } from '../../store/slices/inFavoritesSlice/inFavoritesSlice';
import scrollToTop from '../../layout/utils/scrollToTop';

const FilterContainer = styled((props) => <Grid item xs={12} {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  borderRadius: 10,
  boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.05)',
  padding: '25px 0',
  height: 'fit-content',

  [theme.breakpoints.up('laptop')]: {
    width: 295,
  },
}));

// TO DO: fix the routing logic, all pagination pages routes has to be catalogue/page/pageNO

const CataloguePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.catalogue.products, shallowEqual);
  const isLoading = useSelector((state) => state.catalogue.isLoading);
  const inFavorites = useSelector((state) => state.favorites.inFavorites);
  const isLogin = useSelector((store) => store.user.isLogin);
  const pages = useSelector((store) => store.catalogue.totalPages);
  const currentPage = useSelector((store) => store.catalogue.currentPage);
  const isFilter = useSelector((state) => state.filter.isFilter);
  const filteredTours = useSelector((state) => state.filter.tours, shallowEqual);
  const countriesPerPage = 5;
  const totalPages = Math.round(pages / countriesPerPage);

  useEffect(() => {
    dispatch(fetchCatalogueProducts(currentPage));
  }, [currentPage]);

  useEffect(() => {
    dispatch(gettWishList(isLogin));
  }, [isLogin]);

  return (
    <>
      {!isLoading ? (
        <Box sx={{ backgroundColor: '#EDEDED', paddingBottom: '150px' }}>
          <CatalogMainSection />
          <Container>
            <Grid container sx={{ mt: '60px', gap: '40px' }}>
              <FilterContainer>
                <CatalogMainFilter />
              </FilterContainer>
              <Grid item xs={12} laptop sx={{ p: 0 }}>
                {isFilter && filteredTours.length > 0 ? (
                  <Typography variant="h2" sx={{ mb: '25px' }}>
                    Results for your request
                  </Typography>
                ) : (
                  <Typography variant="h2" sx={{ textTransform: 'uppercase', mb: '25px' }}>
                    Tours
                  </Typography>
                )}
                <Stack spacing={2}>
                  {isFilter && filteredTours.length === 0 ? (
                    <Typography variant="h2" sx={{ paddingTop: '400px', paddingBottom: '400px', textAlign: 'center' }}>
                      No results for your request
                    </Typography>
                  ) : (
                    products.map(({ name, currentPrice, duration, description, imageUrls, _id, itemNo }) => {
                      const checkForFavorites = inFavorites.find((itemId) => _id === itemId);
                      return (
                        <CatalogTourCard
                          key={_id}
                          name={name}
                          description={description}
                          currentPrice={currentPrice}
                          duration={duration}
                          imageUrls={imageUrls}
                          itemNo={itemNo}
                          id={_id}
                          inFavorites={checkForFavorites ? !!checkForFavorites : false}
                          inFavoritesCounter={inFavorites.length - 1}
                        />
                      );
                    })
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', pt: '50px' }}>
            <Pagination
              count={totalPages}
              color="primary"
              page={Number(currentPage)}
              onClick={(e) => {
                dispatch(setCurrentPage(Number(e.target.closest('button').textContent)));
                scrollToTop();
              }}
            />
          </Box>
        </Box>
      ) : (
        <Typography variant="h2" sx={{ paddingTop: '400px', paddingBottom: '400px', textAlign: 'center' }}>
          Loading...
        </Typography>
      )}
      {}
    </>
  );
};

export default CataloguePage;
