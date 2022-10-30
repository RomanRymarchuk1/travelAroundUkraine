import React from 'react';
import { Stack, Typography, Container } from '@mui/material';
import styles from './CatalogMainSection.module.scss';

function CatalogMainSection() {
  return (
    <Stack className={styles.mainSection} justifyContent="center">
      <Container>
        <Typography
          variant="h1"
          color="#FFFFFF"
          sx={{
            fontWeight: '700',
            fontSize: {
              xs: '36px',
              tablet: '44px',
              laptop: '72px',
            },
            lineHeight: {
              xs: '44px',
              tablet: '59px',
              laptop: '88px',
            },
          }}
        >
          OUR TOURS
        </Typography>
      </Container>
    </Stack>
  );
}

export default CatalogMainSection;
