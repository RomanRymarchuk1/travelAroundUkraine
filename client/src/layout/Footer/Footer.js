import React from 'react';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Typography, Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import scrollToTop from '../../utils/scrollToTop/scrollToTop';

const navigationMenu = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Catalogue',
    path: '/catalogue',
  },
  {
    name: 'Cart',
    path: '/cart',
  },
];

const footerGallery = [
  {
    imagePath: './assets/images/footer/CARPATHIANS.jpg',
    altDescription: 'recent_trips_image',
  },
  {
    imagePath: './assets/images/footer/CHERNIVTSI.jpg',
    altDescription: 'recent_trips_image',
  },
  {
    imagePath: './assets/images/footer/IVANOFRANKIVSK.jpg',
    altDescription: 'recent_trips_image',
  },
  {
    imagePath: './assets/images/footer/KYIV.jpg',
    altDescription: 'recent_trips_image',
  },
  {
    imagePath: './assets/images/footer/KYIVCENTER.jpg',
    altDescription: 'recent_trips_image',
  },
  {
    imagePath: './assets/images/footer/PRYKARPATTIA.png',
    altDescription: 'recent_trips_image',
  },
];

const FooterContainer = styled('div')({
  color: 'white',
  backgroundColor: 'black',
  paddingBottom: '10px',
});

const FooterWrapper = styled('div')({
  margin: '0 auto',
  padding: '30px',
  maxWidth: '1200px',
  '@media (min-width: 768px)': {
    '& > div': {
      display: 'flex',
      gap: '30px',
    },
  },
});

const OurAwards = styled('div')({
  '& > h3': {
    paddingBottom: '30px',
    color: 'white',
  },
  '& > p': {
    paddingBottom: '30px',
    color: 'white',
  },
});

const ContactsData = styled('div')({
  '& > h3': {
    color: 'white',
  },
});

const ContactsInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px',
  paddingTop: '30px',
  '& > div': {
    display: 'flex',
    '& > a': {
      textDecoration: 'none',
      color: 'inherit',
      marginLeft: '10px',
    },
    '& > p': {
      marginLeft: '10px',
      marginBottom: '20px',
      color: 'white',
    },
  },
});

const SocialIcons = styled('div')({
  display: 'flex',
  justifyContent: 'left',
  gap: '15px',
  paddingTop: '20px',
  paddingBottom: '40px',
  '& > div': {
    '& > svg': {
      width: '40px',
      height: '40px',
      cursor: 'pointer',
    },
  },
});

const RecentTrips = styled('div')({
  display: 'grid',
  columnGap: '5px',
  gap: '10px',
  gridTemplateColumns: 'repeat(3, 1fr)',
  marginBottom: '30px',
  paddingTop: '30px',
  '& > a >  img': {
    width: '100%',
    borderRadius: '5px',
  },
  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (min-width: 950px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

const FooterNavigation = styled('div')({
  borderTop: '1px solid rgba($color: #ffffff, $alpha: 0.5)',
  margin: '0 auto',
  padding: '30px',
  maxWidth: '1200px',
  '@media (min-width: 768px)': {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    '& > *': { display: 'flex', gap: '30px' },
  },
});

const NavigationList = styled('ul')({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  gap: '20px',
  padding: '0',
  paddingBottom: '20px',
  '& > li': {
    listStyleType: 'none',
    ' & > a': {
      textDecoration: 'none',
      color: 'white',
      '&:hover': {
        color: 'blue',
      },
    },
  },
  '@media *min-width: 768px': {
    paddingBottom: '0',
  },
});

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <Box>
        <OurAwards>
          <Typography variant="h3">Our Awards</Typography>
          <Typography>
            Ukraine is a country of brave people and countless opportunities. Here you will be accepted as a relative,
            surrounded by care as at home and get everything done as one would do it for themselves
          </Typography>
          <Typography
            sx={{ width: '250px', marginTop: '30px', paddingBottom: '40px' }}
            component="img"
            src="./assets/images/footer/awards.png"
            alt="awards_mage"
          />
        </OurAwards>
        <ContactsData>
          <Typography variant="h3">Contact info</Typography>
          <ContactsInfo>
            <Box>
              <SmartphoneOutlinedIcon color="white" />
              <MUILink href="tel:+380661482997">+38 (066) 148 29 97</MUILink>
            </Box>
            <Box>
              <LocationOnOutlinedIcon color="white" />
              <MUILink
                rel="noreferrer"
                target="_blank"
                href="https://www.google.com.ua/maps/place/%D0%9C%D0%B0%D1%80%D0%B8%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%B4%D0%B2%D0%BE%D1%80%D0%B5%D1%86/@50.4438071,30.544801,15.25z/data=!4m5!3m4!1s0x40d4cfad45d00d9d:0xed19f61774e5a260!8m2!3d50.4483553!4d30.5376094?hl=ru"
              >
                Mariinsky palace, Kyiv, Ukraine
              </MUILink>
            </Box>
            <Box>
              <TimerOutlinedIcon />
              <Typography>Mon - Sat 8.00 - 18.00 Sunday CLOSED</Typography>
            </Box>
            <SocialIcons>
              <Box>
                <FacebookRoundedIcon />
              </Box>
              <Box>
                <TwitterIcon />
              </Box>
              <Box>
                <YouTubeIcon />
              </Box>
              <Box>
                <PinterestIcon />
              </Box>
              <Box>
                <InstagramIcon />
              </Box>
            </SocialIcons>
          </ContactsInfo>
        </ContactsData>
        <Box>
          <Typography sx={{ color: 'white' }} variant="h3">
            Recent Trips
          </Typography>
          <RecentTrips>
            {footerGallery.map((el) => (
              <Link to="/catalogue">
                <Typography component="img" src={el.imagePath} alt={el.altDescription} />
              </Link>
            ))}
          </RecentTrips>
        </Box>
      </Box>
    </FooterWrapper>
    <FooterNavigation>
      <Box>
        <Typography component="nav">
          <NavigationList>
            {navigationMenu.map((el) => (
              <Typography key={el.name} component="li">
                <Link onClick={() => scrollToTop('smooth')} to={el.path}>
                  {el.name}
                </Link>
              </Typography>
            ))}
          </NavigationList>
        </Typography>
      </Box>
      <Typography sx={{ color: 'white' }}>© Copyright travel around ukraine project team</Typography>
    </FooterNavigation>
  </FooterContainer>
);

export default Footer;
