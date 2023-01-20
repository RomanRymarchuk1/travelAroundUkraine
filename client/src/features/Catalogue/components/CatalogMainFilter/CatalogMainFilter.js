import React, { useEffect } from 'react';
import axios from 'axios';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { styled, Button, Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CloseIcon from '@mui/icons-material/Close';
import { CatalogFilterPrice, CatalogFilterDuration, CatalogFilterSeason } from '..';
import {
  setIsFilter,
  // setClearDuration,
  // setAllSeasons,
  fetchFilteredTours,
  setFilterParams,
} from '../../../../store/slices/filterSlice/filterSlice';
// import axiosConfig from '../../../../axiosConfig';


const FilterWrapper = styled(Stack)(({ theme }) => ({
  margin: '0 auto',
  width: 252,
  padding: 0,

  [theme.breakpoints.up('tablet')]: {
    width: 540,
  },

  [theme.breakpoints.up('laptop')]: {
    width: 235,
  },
}));

// const ShowButton = styled(Button)(() => ({
//   padding: '12px 85px',
//   alignSelf: 'center',
//   marginTop: 40,
//   maxWidth: 200,
// }));

const ResetButton = styled((props) => (
  <Button
    variant="text"
    startIcon={
      <CloseIcon
        sx={{
          width: '14px',
          height: '14px',
          color: 'gray',
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  padding: '5px 15px',
  marginTop: '12px',
  border: 'none',
  background: 'none',
  fontWeight: 500,
  fontSize: 12,
  textTransform: 'none',
  color: theme.palette.text.primary,
  alignSelf: 'center',

  '&:hover': {
    background: 'none',
    filter: 'brightness(1.5)',
    color: theme.palette.text.primary,
  },
}));

const CatalogMainFilter = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.catalogue.products, shallowEqual);
  const allPrices = [...new Set(products.map((tour) => tour.currentPrice))].sort((a, b) => a - b);


  // const duration = useSelector((store) => store.filter.duration);
  // const seasons = useSelector((store) => store.filter.seasons.map((el) => (el ? el.toLowerCase() : el)));
  const filterParams = useSelector((store) => store.filter.filterParams);
  // console.log(filterParams);
  // const isFilter = useSelector((state) => state.filter.isFilter);
  const location = useLocation();

  useEffect(() => {
    if (location.search && Object.keys(filterParams).length === 0) {
      dispatch(setIsFilter(true));
      const queryParams = new URLSearchParams(location.search).entries();
      dispatch(setFilterParams(Object.fromEntries(queryParams)));
    } else {
      dispatch(setIsFilter(false));
      dispatch(setFilterParams({}));
    }
  }, [location.search]);

  useEffect(() => {
    // console.log(products)
    if (Object.keys(filterParams).length !== 0) {
      const queryString = new URLSearchParams(filterParams).toString();
      const newUrl = new URL(`?${queryString}`, window.location);
      if (window.location.href !== newUrl.href) {
        window.location.assign(newUrl);
        
      }
    }
  }, [filterParams]);

  const filterTours = async () => {
    const params = new URLSearchParams();
    if (allPrices.length > 0 && location.search) {
      const priceFrom = Number(filterParams.price_from);
      const priceTo = Number(filterParams.price_to);

      if (priceFrom && priceTo) {
        const filterPrices = allPrices.filter((price) => price >= priceFrom && price <= priceTo);
        params.set('currentPrice', filterPrices);
      }
    }
    // console.log(params.toString());

    if (params.toString()) {
      
      dispatch(setIsFilter(true));
      await dispatch(fetchFilteredTours(params));
      
    }
  };

  useEffect(() => {
    filterTours();
  }, [products, filterParams]);

  // const filterTours = async () => {
  //   const params = new URLSearchParams();
  //   params.set('currentPrice', filterPrices());
  //   if (duration.length > 0) {
  //     params.set('duration', duration);
  //   }
  //   if (seasons.length > 0) {
  //     params.set('season', seasons.concat('all seasons'));
  //   }
  //   dispatch(setIsLoading(true));
  //   dispatch(setIsFilter(true));
  //   await dispatch(fetchFilteredTours(params));
  //   dispatch(setIsLoading(false));
  // };

  // const resetFilter = () => {
  //   // dispatch(setIsFilter(false));
  //   // dispatch(setFilteredTours([]));
  //   // dispatch(setPrices([Math.min.apply(null, allPrices), Math.max.apply(null, allPrices)]));
  //   // dispatch(setClearDuration([]));
  //   // dispatch(setClearDuration([]));
  //   // dispatch(setAllSeasons([]));
  // };

  return (
    <FilterWrapper>
      <Typography variant="h3">Filter</Typography>

      <Grid container columnSpacing={5} sx={{ p: 0 }}>
        <Grid spacing={4} item xs={12} tablet={6} laptop={12}>
          <CatalogFilterPrice />
          <CatalogFilterDuration />
        </Grid>

        <Grid item xs={12} tablet={6} laptop={12}>
          <CatalogFilterSeason />
        </Grid>
      </Grid>

      {/* <ShowButton onClick={filterTours}>Filter</ShowButton> */}
      <ResetButton>Reset filter</ResetButton>
    </FilterWrapper>
  );
};

export default CatalogMainFilter;
