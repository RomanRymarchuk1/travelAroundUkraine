import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Slide } from '@mui/material';
import { grey } from '@mui/material/colors';

import LogInForm from '../components/LogInForm';

const paperSX = {
  textAlign: 'center',
  px: { xs: 2 },
  py: { xs: 4 },
  backgroundColor: grey.A100,
  borderRadius: '24px',
  width: { desktop: '70%' },
  m: '0 auto',
};

const LogInPage = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Container sx={{ marginTop: { xs: '120px', tablet: '180px' }, height: '60vh' }}>
      <Slide timeout={500} direction="up" in={checked} mountOnEnter unmountOnExit>
        <Paper sx={paperSX}>
          <Typography variant="h2">Log In</Typography>
          <LogInForm />
        </Paper>
      </Slide>
    </Container>
  );
};

export default LogInPage;
