import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const ErrorContainer = styled('dix')({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  '& > div': {
    display: 'flex',
    justifyContent: 'center',
    '& > img': {
      width: '50vw',
      maxWidth: '500px',
    },
  },
  '& > h2': {
    fontSize: '25px',
    lineHeight: '30px',
    marginBottom: '30px',
  },
  '& > p': {
    fontSize: '15px',
  },
});

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorContainer>
      <Box>
        <Box src="./assets/images/404/heart.png" component="img" alt="uk-flag" />
      </Box>
      <Typography variant="h2">404 not found</Typography>
      <Typography>Please, navigate to main page to plan your trip</Typography>
      <Box sx={{ mt: '40px' }}>
        <Button onClick={() => navigate('/')}>Home</Button>
      </Box>
    </ErrorContainer>
  );
};

export default ErrorPage;
