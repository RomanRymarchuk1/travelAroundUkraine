import React from 'react';
import { styled, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { CatalogFilterPrice, CatalogFilterTourists, CatalogFilterRegion } from '../index';

const FilterWrapper = styled(Box)(({ theme }) => ({
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

const CatalogMainFilter = () => (
  <FilterWrapper>
    <Typography variant="h3">Filters</Typography>
    <Grid container columnSpacing={5} sx={{ padding: 0 }}>
      <Grid spacing={4} item xs={12} tablet={6} laptop={12}>
        <CatalogFilterPrice />
        <CatalogFilterTourists />
      </Grid>

      <Grid item xs={12} tablet={6} laptop={12}>
        <CatalogFilterRegion />
      </Grid>
    </Grid>
  </FilterWrapper>
);

export default CatalogMainFilter;
