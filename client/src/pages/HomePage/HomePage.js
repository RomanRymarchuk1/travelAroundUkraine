/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { styled } from '@mui/material/styles';
import { ImageCarousel } from '../../components';
import styles from './HomePage.module.scss';

const TravelText = styled((props) => <Typography variant="h1" {...props} />)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '36px',
  lineHeight: '44px',
  color: 'white',

  position: 'relative',
  margin: 0,
  marginBottom: '12px',

  [theme.breakpoints.up('tablet')]: {
    fontSize: '48px',
    lineHeight: '59px',
  },

  [theme.breakpoints.up('laptop')]: {
    fontSize: '72px',
    lineHeight: '88px',
  },

  '.heroHeaderHighlighted': {
    fontFamily: 'Pacifico',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '18px',
    color: theme.palette.secondary.main,

    position: 'absolute',
    bottom: '-35%',
    right: '40%',

    [theme.breakpoints.up('tablet')]: {
      fontSize: '28px',
      lineHeight: '28px',
      right: '45%',
      bottom: '-30%',
    },

    [theme.breakpoints.up('laptop')]: {
      fontSize: '32px',
      lineHeight: '32px',
      right: '47%',
      bottom: '-25%',
    },

    [theme.breakpoints.up('desktop')]: {
      right: '62%',
    },
  },
}));

const UkraineText = styled((props) => <Typography variant="h1" {...props} />)(({ theme }) => ({
  fontFamily: 'san serif',
  margin: 0,
  fontWeight: 700,
  fontSize: '64px',
  lineHeight: '64px',
  color: 'rgba(255, 255, 255, 0)',
  '-webkit-text-stroke-width': '2px',
  '-webkit-text-stroke-color': 'rgb(41, 24, 194)',

  [theme.breakpoints.up('tablet')]: {
    fontSize: '96px',
    lineHeight: '86px',
    letterSpacing: '15px',
  },

  [theme.breakpoints.up('laptop')]: {
    lineHeight: '117px',
  },
}));

const HeroContainer = styled(Container)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
});

const HomePage = () => (
  <section className={styles.heroSection}>
    <ImageCarousel />
    <HeroContainer>
      <TravelText>
        TRAVEL <span className="heroHeaderHighlighted">AROUND</span>
      </TravelText>

      <UkraineText>UKRAINE</UkraineText>

      <Button sx={{ mt: '90px' }} endIcon={<ArrowRightAltIcon />}>
        TO OUR TOURS
      </Button>
    </HeroContainer>
  </section>
);

export default HomePage;
