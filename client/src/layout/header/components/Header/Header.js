/* eslint-disable  react/prop-types */
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Container, useScrollTrigger, Slide } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { BurgerMenu, TabletMenu, HeaderSearchField } from '..';
import { LogOutModal } from '../../../../components';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const LogoHeader = () => (
  <NavLink to="/" style={{ textDecoration: 'none' }}>
    <img src="/assets/images/logo/logo.png" alt="logo" width="65" height="50" />
  </NavLink>
);

const Header = () => {
  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    const handleScrollY = () => setScrollY(window.scrollY);
    document.addEventListener('scroll', handleScrollY);

    return () => document.removeEventListener('scroll', handleScrollY);
  }, []);

  const appBarSX = {
    background: 'primary.main',
    boxShadow: scrollY > 400 ? null : 'none',
    py: { xs: 1, tablet: 1.5, laptop: 2 },
    opacity: 0.95,
    transition: '0.3s !important',
  };

  return (
    <HideOnScroll>
      <AppBar sx={appBarSX}>
        <Container>
          <Toolbar disableGutters>
            <LogoHeader />
            <HeaderSearchField />
            <BurgerMenu />
            <TabletMenu />
            <LogOutModal />
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
