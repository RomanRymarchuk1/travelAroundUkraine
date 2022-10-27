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
import classNames from 'classnames';
import styles from './Footer.module.scss';

const Footer = () => {
  const { footer, container, image, contactsData, socialIcons, recentTrips, navigationBar, ourAwards, navigationList } =
    styles;
  return (
    <Box component="footer" className={footer}>
      <Box className={container}>
        <Box>
          <Box className={ourAwards}>
            <Typography variant="h3">Our Awards</Typography>
            <Typography paragraph="true" variant="subtitle1">
              Ukraine is a country of brave people and countless opportunities. Here you will be accepted as a relative,
              surrounded by care as at home and get everything done as one would do it for themselves
            </Typography>
            <Typography component="img" className={image} src="./assets/images/footer/awards.png" alt="awards_mage" />
          </Box>
          <Box>
            <Typography variant="h3">Contact info</Typography>
            <Box className={contactsData}>
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
                <Typography paragraph="true" variant="subtitle1">
                  Mon - Sat 8.00 - 18.00 Sunday CLOSED
                </Typography>
              </Box>
              <Box className={socialIcons}>
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
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography variant="h3">Recent Trips</Typography>
            <Box className={recentTrips}>
              <Link to="/catalogue">
                <Typography component="img" src="./assets/images/footer/CARPATHIANS.jpg" alt="recent__trips__image" />
              </Link>
              <Link to="/catalogue">
                <Typography component="img" src="./assets/images/footer/CHERNIVTSI.jpg" alt="recent__trips__image" />
              </Link>
              <Link to="/catalogue">
                <Typography
                  component="img"
                  src="./assets/images/footer/IVANOFRANKIVSK.jpg"
                  alt="recent__trips__image"
                />
              </Link>
              <Link to="/catalogue">
                <Typography component="img" src="./assets/images/footer/KYIV.jpg" alt="recent__trips__image" />
              </Link>
              <Link to="/catalogue">
                <Typography component="img" src="./assets/images/footer/KYIVCENTER.jpg" alt="recent__trips__image" />
              </Link>
              <Link to="/catalogue">
                <Typography component="img" src="./assets/images/footer/PRYKARPATTIA.png" alt="recent__trips__image" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classNames(navigationBar, container)}>
        <Box>
          <Typography component="nav">
            <Typography className={navigationList} component="ul">
              <Typography component="li">
                <Link to="/">Home</Link>
              </Typography>
              <Typography component="li">
                <Link to="/catalogue">Catalogue</Link>
              </Typography>
              <Typography component="li">
                <Link to="/cart">Cart</Link>
              </Typography>
            </Typography>
          </Typography>
        </Box>
        <Typography paragraph="true" variant="subtitle1">
          © Copyright travel around ukraine project team
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
