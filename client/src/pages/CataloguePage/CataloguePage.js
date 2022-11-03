import React from 'react';
import { Stack, Container, Box, Typography } from '@mui/material';
import { CatalogTourCard } from '../../components';

const CataloguePage = () => (
  <Box sx={{ backgroundColor: '#EDEDED' }}>
    <Container>
      <Typography sx={{ marginBottom: '40px', textTransform: 'uppercase' }} variant="h2">
        Tours
      </Typography>
      <Stack spacing={2}>
        <CatalogTourCard />
        <CatalogTourCard />
        <CatalogTourCard />
      </Stack>
    </Container>
  </Box>
);

export default CataloguePage;
