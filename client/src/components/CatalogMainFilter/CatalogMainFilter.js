import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { CatalogFilterPrice, CatalogFilterTourists, CatalogFilterRegion } from '../index';

const CatalogMainFilter = () => (
  <Grid container columnSpacing={5} sx={{ padding: 0 }}>
    <Grid spacing={4} item xs={12} tablet={6} laptop={12}>
      <CatalogFilterPrice />
      <CatalogFilterTourists />
    </Grid>

    <Grid item xs={12} tablet={6} laptop={12}>
      <CatalogFilterRegion />
    </Grid>
  </Grid>
);

export default CatalogMainFilter;
