import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
// Icons
import PersonIcon from '@mui/icons-material/Person';
import BedIcon from '@mui/icons-material/Bed';

import { TourAccordion, TourReasonToChoose, TourInfoDialog } from '../../components';
import styles from './TourPage.module.scss';

const included = [
  { icon: <PersonIcon color="primary" />, service: 'Professional guide' },
  { icon: <BedIcon color="primary" />, service: 'Accomodation' },
];
const cost = {
  eur: 70,
  usd: 70,
  uah: 2584,
};
const dates = { beginDate: new Date('2022-02-01'), endDate: new Date('2022-02-25') };

const details = {
  duration: '3 days',
  departs: 'First city',
  returns: 'Second city',
};

const TourPage = () => (
  <Container>
    <div className={styles.content}>
      <Box component="aside" className={styles.aside}>
        <TourInfoDialog included={included} cost={cost} dates={dates} details={details} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h2">About us</Typography>
        <Box sx={{ paddingBottom: 3 }}>
          <Typography>
            Each medieval city is full of various legends and mystical stories. Lviv is no exception because more than
            760 years of history simply could not help but leave mysterious legends.
          </Typography>

          <Typography>
            The guide will tell and show that Lviv legends can impress no less than Lviv architecture. This tour will be
            filled with incredible stories - unusual stories from the life of the Galician capital.
          </Typography>

          <Typography>
            How can one explain the black colour of one of the houses on Rynok Square? How did Adam Senyavsky marry his
            daughter? How did the first bulletin board appear in Lviv? Why did one Lviv lady make a not entirely decent
            offer to the tram? Are the legends about Lviv ghosts true? What do Lviv courtyards hide?
          </Typography>

          <Typography>All this and more you can learn during this tour.</Typography>

          <Typography>Looks like today. The program of individual excursions: at any hour.</Typography>
        </Box>
        <TourAccordion title="Reasons to choose our tour">
          <Stack direction="row" gap={3} flexWrap="wrap" mt={2} pl={2}>
            <TourReasonToChoose
              number={1}
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ducimus tenetur in aspernatur, asperiores."
            />
            <TourReasonToChoose number={2} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
            <TourReasonToChoose
              number={3}
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ducimus tenetur in aspernatur, asperiores."
            />
          </Stack>
        </TourAccordion>
        <TourAccordion title="What is included?">
          <Stack direction="row" gap="20px">
            {included.map(({ icon, service }) => (
              <Stack key={service} direction="row" gap="5px" alignItems="center" flexWrap="wrap">
                {icon}
                <Typography gutterBottom={false}>{service}</Typography>
              </Stack>
            ))}
          </Stack>
        </TourAccordion>
      </Box>
    </div>
  </Container>
);

export default TourPage;
