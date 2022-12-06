import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import axios from 'axios';
import { styled, Button, Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CloseIcon from '@mui/icons-material/Close';
import { CatalogFilterPrice } from '..';
import { setPrices, setIsFilter, setFilteredTours } from '../../../../store/slices/filterSlice/filterSlice';
import { getProducts, setIsLoading } from '../../../../store/slices/catalogueSlice/catalogueSlice';

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

const ShowButton = styled(Button)(() => ({
  padding: '12px 85px',
  alignSelf: 'center',
  marginTop: 40,
  maxWidth: 200,
}));

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
  const prices = useSelector((store) => store.filter.prices);
  const [minPrice, maxPrice] = prices;
  const products = useSelector((state) => state.catalogue.products, shallowEqual);
  const allPrices = [...new Set(products.map((tour) => tour.currentPrice))].sort((a, b) => a - b);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const filterTours = async () => {
    const filterPrices = () => {
      if (minPrice > maxPrice) {
        const reversePrices = [...prices].reverse();
        dispatch(setPrices(reversePrices));
        const filterPricesValues = allPrices.filter((price) => price >= maxPrice && price <= minPrice);
        return filterPricesValues;
      }
      const filterPricesValues = allPrices.filter((price) => price >= minPrice && price <= maxPrice);
      return filterPricesValues;
    };

    const params = new URLSearchParams();
    params.set('currentPrice', filterPrices());

    try {
      dispatch(setIsLoading(true));
      dispatch(setIsFilter(true));
      const { data, status } = await axios(`/products/filter?${params}`);
      if (status) {
        dispatch(setFilteredTours(data.products));
        dispatch(setIsLoading(false));
      }
    } catch (err) {
      console.error(err.message);
      dispatch(setIsLoading(false));
    }
  };
return (
  <FilterWrapper>
    <Typography variant="h3">Filter</Typography>

    <Grid container columnSpacing={5} sx={{ p: 0 }}>
      <Grid spacing={4} item xs={12} tablet={6} laptop={12}>
        <CatalogFilterPrice />
        {/* <CatalogFilterTourists /> */}
      </Grid>

      {/* <Grid item xs={12} tablet={6} laptop={12}>
        <CatalogFilterRegion />
      </Grid> */}
    </Grid>

    <ShowButton onClick={filterTours}>Filter</ShowButton>
    <ResetButton>Reset filter</ResetButton>
  </FilterWrapper>
)
};

export default CatalogMainFilter;
