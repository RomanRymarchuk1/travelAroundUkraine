import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import LogInForm from '../components/LogInForm';

const paperSX = {
  textAlign: 'center',
  px: { xs: 2 },
  py: { xs: 4 },
  backgroundColor: 'rgb(247, 247, 247)',
  borderRadius: '24px',
  width: { desktop: '70%' },
  m: '0 auto',
};

const LogInPage = () => (
  <Container sx={{ marginTop: { xs: '120px', tablet: '180px' }, height: '60vh' }}>
    <Paper sx={paperSX}>
      <Typography variant="h2">Log In</Typography>
      <LogInForm />
    </Paper>
  </Container>
);

export default LogInPage;
