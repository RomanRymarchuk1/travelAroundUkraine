import React from 'react';
import { Container, Typography } from '@mui/material';
import { CheckoutForm } from '../../components';

const CheckoutPage = () => (
  <Container sx={{ mt: '300px', mb: '300px' }}>
    <Typography variant="h2" align="center" sx={{ mb: '20px' }}>
      Checkout
    </Typography>
    <CheckoutForm />
  </Container>
);

export default CheckoutPage;
