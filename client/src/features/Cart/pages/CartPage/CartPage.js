import React from 'react';

import { Box, Container, Typography } from '@mui/material';
import { CartItem } from '../../components';

function CartPage() {
  return (
    <Box marginY="80px">
      <Container>
        <Typography variant="h1">Cart</Typography>
        <Box>
          <CartItem />
        </Box>
      </Container>
    </Box>
  );
}

export default CartPage;
