import React from 'react';

import { Box, Container, Stack, styled, Typography } from '@mui/material';
import { CartItem } from '../../components';
import TotalInfoDialog from '../../components/TotalInfoDialog/TotalInfoDialog';

const ContentWrapper = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),

  [theme.breakpoints.up('laptop')]: {
    flexDirection: 'row',
  },
}));

function CartPage() {
  return (
    <Box marginTop="80px" marginBottom="40px">
      <Container>
        <Typography variant="h1">Cart</Typography>
        <ContentWrapper>
          <Stack gap={2} flexGrow={1}>
            {/* For demonstration purpose only */}
            <CartItem />
            <CartItem />
            <CartItem />
          </Stack>
          <Box flexGrow={1}>
            <TotalInfoDialog />
          </Box>
        </ContentWrapper>
      </Container>
    </Box>
  );
}

export default CartPage;
