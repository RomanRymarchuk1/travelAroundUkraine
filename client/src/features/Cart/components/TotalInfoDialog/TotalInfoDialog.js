import React from 'react';

import { Button, Stack, Box as MuiBox, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BoxWrapper = styled(MuiBox)(({ theme }) => ({
  position: 'sticky',
  top: 20,
  padding: '20px 20px 30px',
  borderRadius: 5,

  border: `1px solid ${theme.palette.divider}`,
}));

const Section = styled(MuiBox)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBottom: 15,
  marginBottom: 20,
}));

const Title = styled((props) => <Typography variant="h3" color="text.primary" {...props} />)({
  textTransform: 'uppercase',
  fontWeight: 700,
  marginBottom: 20,
});

const TotalInfoDialog = () => {
  const navigate = useNavigate();

  return (
    <BoxWrapper>
      <Section>
        <Title>Total</Title>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Tours amount:</Typography>
          <Typography>3</Typography>
        </Stack>
      </Section>
      <Section>
        <Stack direction="row" justifyContent="space-between">
          <Typography>To be paid:</Typography>
          <Typography fontSize={18}>2000 ₴</Typography>
        </Stack>
      </Section>

      <MuiBox>
        <Stack direction="row" justifyContent="end" alignItems="center">
          <Button sx={{ paddingInline: '30px' }} disableElevation onClick={() => navigate('/checkout')}>
            Make an order
          </Button>
        </Stack>
      </MuiBox>
    </BoxWrapper>
  );
};

export default TotalInfoDialog;
