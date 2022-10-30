import React from 'react';
import { Stack, Container, Box, Typography } from '@mui/material';
import CatalogTourCard from '../../components/CatalogTourCard/CatalogTourCard';

const CataloguePage = () => (
  <Box sx={{ backgroundColor: '#EDEDED' }}>
    <Container>
      <Typography sx={{ marginBottom: '40px' }} variant="h2">TOURS</Typography>
      <Stack spacing={2}>
        <CatalogTourCard />
        <CatalogTourCard />
        <CatalogTourCard />
      </Stack>
    </Container>
  </Box>
);

export default CataloguePage;
