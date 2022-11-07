import React from 'react';
import { styled, Stack, Container, Box, Typography } from '@mui/material';
import { CatalogTourCard, CatalogMainSection, CatalogMainFilter } from '../../components';

const FilterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  borderRadius: 10,
  boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.05)',
  padding: '25px 0',
}));


const FilterWrapper = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  width: 252,

  [theme.breakpoints.up('tablet')]: {
    width: 536,
  },

  [theme.breakpoints.up('laptop')]: {
    width: 225,
  },
}));

const CataloguePage = () => (
  <Box sx={{ backgroundColor: '#EDEDED', paddingBottom: '150px' }}>
    <CatalogMainSection />

    <Container>
      <Typography variant="h2" sx={{ marginTop: '60px', marginBottom: '40px', textTransform: 'uppercase' }}>
        Tours
      </Typography>
      <Stack sx={{ paddingBottom: '90px' }} spacing={2}>
        <CatalogTourCard />
        <CatalogTourCard />
        <CatalogTourCard />
      </Stack>

      <FilterContainer>
        <FilterWrapper>
          <Typography variant="h3">
            Filters
          </Typography>
          <CatalogMainFilter />
        </FilterWrapper>
      </FilterContainer>



    </Container>
  </Box>
);

export default CataloguePage;
