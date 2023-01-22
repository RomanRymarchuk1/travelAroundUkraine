import React, { useEffect } from 'react';
import {
  useSelector,
  useDispatch,
  // shallowEqual
} from 'react-redux';
import { useLocation } from 'react-router-dom';
import { styled, Button, Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CloseIcon from '@mui/icons-material/Close';
import { CatalogFilterPrice, CatalogFilterDuration, CatalogFilterSeason } from '..';
import {
  setIsFilter,
  // setClearDuration,
  setAllSeasons,
  fetchFilteredTours,
  setFilterParams,
  setAllToursPrices,
} from '../../../../store/slices/filterSlice/filterSlice';
import axiosConfig from '../../../../axiosConfig';
// import { fetchCatalogue } from '../../../../store/slices/catalogueSlice/catalogueSlice';

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
  const allPrices = useSelector((state) => state.filter.allToursPrices);
  // const duration = useSelector((store) => store.filter.duration);
  const seasons = useSelector((store) => store.filter.seasons);
  const filterParams = useSelector((store) => store.filter.filterParams);
  // console.log(filterParams);
  // const isFilter = useSelector((state) => state.filter.isFilter);
  const location = useLocation();
  const currentPage = useSelector((store) => store.catalogue.currentPage);

  const getProductsPrices = async () => {
    try {
      const { data, status } = await axiosConfig(`/products`);
      if (status === 200) {
        dispatch(setAllToursPrices([...new Set(data.map((tour) => tour.currentPrice))].sort((a, b) => a - b)));
      }
    } catch (err) {
      console.error(err.message);
      throw err;
    }
  };

  useEffect(() => {
    getProductsPrices();
  }, []);

  useEffect(() => {
    dispatch(setAllToursPrices(allPrices));
  }, []);

  useEffect(() => {
    if (location.search) {
      dispatch(setIsFilter(true));
      const queryParams = new URLSearchParams(location.search).entries();
      dispatch(setFilterParams(Object.fromEntries(queryParams)));
    } else {
      dispatch(setIsFilter(false));
      dispatch(setFilterParams({}));
    }
  }, [location.search]);

  useEffect(() => {
    if (Object.keys(filterParams).length !== 0) {
      const queryString = new URLSearchParams(filterParams).toString();
      const newUrl = new URL(`?${queryString}`, window.location);

      if (window.location.href !== newUrl.href) {
        window.location.assign(newUrl);
      }
    }

    const filterTours = async () => {
      const params = new URLSearchParams();

      if (allPrices.length > 0 && location.search) {
        const priceFrom = Number(filterParams.price_from);
        const priceTo = Number(filterParams.price_to);
        const seasonsFromParams = filterParams.season;

        if (priceFrom && priceTo) {
          const filterPrices = allPrices.filter((price) => price >= priceFrom && price <= priceTo);
          params.set('currentPrice', filterPrices);
        }

        if (seasonsFromParams && seasonsFromParams.length > 0) {
          if (typeof seasonsFromParams === 'string') {
            dispatch(setAllSeasons(seasonsFromParams.split(',')));
          }
        }

        if (seasons.length > 0) {
          params.set('season', seasons.concat('all seasons'));
        }
      }

      console.log(params.toString())

      if (params.toString()) {
        dispatch(setIsFilter(true));
        await dispatch(fetchFilteredTours(params, currentPage));
      }
    };
    filterTours();
  }, [filterParams]);

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

      <ResetButton>Reset filter</ResetButton>
    </FilterWrapper>
  );
};

export default CatalogMainFilter;
