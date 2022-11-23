import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled, Stack, Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { CatalogTourCard, CatalogMainSection, CatalogMainFilter } from '../../features/Catalogue/components';
import getProducts from '../../api/getProducts';
import { setProducts } from '../../store/slices/catalogueSlice';

const FilterContainer = styled((props) => <Grid item xs={12} {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  borderRadius: 10,
  boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.05)',
  padding: '25px 0',
  height: 'fit-content',

  [theme.breakpoints.up('laptop')]: {
    width: 295,
    order: '-1',
  },
}));

const CataloguePage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await getProducts();
      dispatch(setProducts(data));
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      {loading === false ? (
        <Box sx={{ backgroundColor: '#EDEDED', paddingBottom: '150px' }}>
          <CatalogMainSection />
          <Container>
            <Grid container sx={{ mt: '60px', gap: '40px' }}>
              <Grid item xs={12} laptop sx={{ p: 0 }}>
                <Typography variant="h2" sx={{ textTransform: 'uppercase', mb: '25px' }}>
                  Tours
                </Typography>
                <Stack spacing={2}>
                  <CatalogTourCard />
                  <CatalogTourCard />
                  <CatalogTourCard />
                  <CatalogTourCard />
                </Stack>
              </Grid>
              <FilterContainer>
                <CatalogMainFilter />
              </FilterContainer>
            </Grid>
          </Container>
        </Box>
      ) : (
        <Typography variant="h2" sx={{ paddingTop: '400px', paddingBottom: '400px', textAlign: 'center' }}>
          Loading...
        </Typography>
      )}
      )
    </>
  );
};

export default CataloguePage;
