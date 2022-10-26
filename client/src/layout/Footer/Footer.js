import React from 'react';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Footer.module.scss';

const Footer = () => {
  const { footer, container, image, contacts, socialIcons, recentTrips, navigationBar, ourAwards } = styles;
  return (
    <footer className={footer}>
      <div className={container}>
        <div>
          <div className={ourAwards}>
            <h2>Our Awards</h2>
            <p>
              Ukraine is a country of brave people and countless opportunities. Here you will be accepted as a relative,
              surrounded by care as at home and get everything done as one would do it for themselves
            </p>
            <img className={image} src="./assets/images/footer/awards.png" alt="awards_mage" />
          </div>
          <div>
            <h2>Contact info</h2>
            <div className={contacts}>
              <div>
                <SmartphoneOutlinedIcon color="white" />
                <a href="tel:+380661482997">+38 (066) 148 29 97</a>
              </div>
              <div>
                <LocationOnOutlinedIcon color="white" />
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.google.com.ua/maps/place/%D0%9C%D0%B0%D1%80%D0%B8%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%B4%D0%B2%D0%BE%D1%80%D0%B5%D1%86/@50.4438071,30.544801,15.25z/data=!4m5!3m4!1s0x40d4cfad45d00d9d:0xed19f61774e5a260!8m2!3d50.4483553!4d30.5376094?hl=ru"
                >
                  Mariinsky palace, Kyiv, Ukraine
                </a>
              </div>
              <div>
                <TimerOutlinedIcon />
                <span>Mon - Sat 8.00 - 18.00 Sunday CLOSED</span>
              </div>
              <div className={socialIcons}>
                <div>
                  <FacebookRoundedIcon />
                </div>
                <div>
                  <TwitterIcon />
                </div>
                <div>
                  <YouTubeIcon />
                </div>
                <div>
                  <PinterestIcon />
                </div>
                <div>
                  <InstagramIcon />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>Recent Trips</h2>
            <div className={recentTrips}>
              <Link to="/catalogue">
                <img src="./assets/images/footer/CARPATHIANS.jpg" alt="recent__trips__image" />
              </Link>
              <Link to="/catalogue">
                <img src="./assets/images/footer/CHERNIVTSI.jpg" alt="recent__trips__image" />
              </Link>
              <Link to="/catalogue">
                <img src="./assets/images/footer/IVANOFRANKIVSK.jpg" alt="recent__trips__image" />
              </Link>
              <Link to="/catalogue">
                <img src="./assets/images/footer/KYIV.jpg" alt="recent__trips__image" />
              </Link>
              <Link to="/catalogue">
                <img src="./assets/images/footer/KYIVCENTER.jpg" alt="recent__trips__image" />
              </Link>
              <Link to="/catalogue">
                <img src="./assets/images/footer/PRYKARPATTIA.png" alt="recent__trips__image" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={classNames(navigationBar, container)}>
        <div>
          <Link to="/">Home</Link>
          <Link to="/catalogue">Catalogue</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/tour">Tour</Link>
        </div>
        <p>© Copyright travel around ukraine project team</p>
      </div>
    </footer>
  );
};

export default Footer;
