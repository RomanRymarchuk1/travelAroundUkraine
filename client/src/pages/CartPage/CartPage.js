import React from 'react';

import { Box, Container, Stack, styled, Typography } from '@mui/material';
import { CartItem, TotalInfoDialog } from '../../features/Cart/components';

const ContentWrapper = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),

  [theme.breakpoints.up('laptop')]: {
    flexDirection: 'row',
  },
}));

const CartItemsList = styled((props) => <Stack component="ul" {...props} />)(({ theme }) => ({
  padding: 0,
  margin: 0,
  flexGrow: 1,
  gap: theme.spacing(2),

  listStyleType: 'none',
}));

function CartPage() {
  return (
    <Box marginTop="100px" marginBottom="150px" component="section" paddingY={3}>
      <Container>
        <Typography marginBottom={2} variant="h2">
          Cart
        </Typography>
        <ContentWrapper>
          <CartItemsList>
            {/* For demonstration purpose only */}
            <li>
              <CartItem />
            </li>
            <li>
              <CartItem />
            </li>
            <li>
              <CartItem />
            </li>
          </CartItemsList>
          <Box flexGrow={1}>
            <TotalInfoDialog />
          </Box>
        </ContentWrapper>
      </Container>
    </Box>
  );
}

export default CartPage;
