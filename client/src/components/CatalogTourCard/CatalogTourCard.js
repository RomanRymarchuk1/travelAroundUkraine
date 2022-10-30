import React from 'react';
import { Stack, CardActions, CardMedia, Button, Typography, CardContent } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ReactComponent as CoinsIcon } from '../../svg/CoinsIcon.svg';
import styles from './CatalogTourCard.module.scss';

function CatalogTourCard() {
  return (
    <Stack
      direction={{ xs: 'column', tablet: 'row' }}
      sx={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.05)' }}
      spacing={1}
    >
      <CardMedia
        sx={{
          width: {
            xs: '100%',
            tablet: '238px',
          },
          height: {
            xs: '240px',
            tablet: 'auto',
          },
          borderRadius: {
            xs: '10px 10px 0 0',
            tablet: '10px 0 0 10px',
          },
        }}
        component='img'
        image='https://visitukraine.today/media/tours/gallery/ALeR7GgYjAqCqfJnQX5ZYKnBcsDZ6MTJs77IIBKi.jpg'
        alt='tour photo'
      />
      <CardContent sx={{ padding: '0 30px 0 36px' }}>
        <Typography
          sx={{ color: 'black', marginBottom: '20px', marginTop: '20px' }}
          variant='h3'
          component='div'
        >
          Sightseeing tour of Chernivtsi
        </Typography>

        <Stack direction='row' spacing={3} alignItems='start' sx={{ marginBottom: '20px' }}>
          <Stack direction='row' spacing={1} alignItems='center'>
            <CoinsIcon />
            <Typography variant='h3' color='primary'>
              69 €
            </Typography>
          </Stack>

          <Stack direction='row' spacing={1} alignItems='center'>
            <AccessTimeIcon color='primary' sx={{ height: '21px' }} />
            <Typography variant='h3' color='primary'>
              3 hours
            </Typography>
          </Stack>
        </Stack>

        <Typography className={styles.tourDescription} sx={{ color: 'black' }} variant='body1' color='text.secondary'>
          Chernivtsi is often called the Ukrainian Paris, and for good reason - the pearl of Ukrainian Bukovina is in no
          way inferior to exquisite European capitals and offers tourists entertainment for every taste. We suggest
          starting with the classics and visiting the top must-see places that will make you fall in love with this
          city.
        </Typography>

        <CardActions>
          <Button
            className={styles.cardBtn}
            href='#'
            sx={{
              width: {
                xs: '244px',
                tablet: '160px',
              },
              marginTop: {
                xs: '30px',
                desktop: '10px',
              },
              height: '40px',
              fontSize: '12px',
              padding: '0',
            }}
          >
            More details
          </Button>
        </CardActions>
      </CardContent>
    </Stack>
  );
}

export default CatalogTourCard;
