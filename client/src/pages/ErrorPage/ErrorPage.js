import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import styles from './ErrorPage.module.scss';

const ErrorContainer = styled('dix')({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  '& > div': {
    display: 'flex',
    justifyContent: 'center',
    '& > img': {
      width: '50vw',
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
  const { navigataionList } = styles;
  return (
    <ErrorContainer>
      <Box>
        <Box src="./assets/images/404/heart.png" component="img" alt="uk-flag" />
      </Box>
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
    </ErrorContainer>
  );
};

export default ErrorPage;
