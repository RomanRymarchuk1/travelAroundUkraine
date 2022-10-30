import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  const { container, navigataionList } = styles;
  return (
    <Box className={container}>
      <img src="./assets/images/404/heart.png" alt="uk" />
      <Typography variant="h2">404 not found</Typography>
      <Typography component="p">Please, navigate to main page to plan your trip</Typography>
      <Box>
        <Typography component="nav" className={navigataionList}>
          <Typography component="ul">
            <Typography component="li">
              <Link to="/">Home</Link>
            </Typography>
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default ErrorPage;
