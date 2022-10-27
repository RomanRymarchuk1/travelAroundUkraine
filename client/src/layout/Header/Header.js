import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import TabletMenu from '../TabletMenu/TabletMenu';
import LogoHeader from '../LogoHeader/LogoHeader';
import HeaderSearchField from '../HeaderSearchField/HeaderSearchField';

const Header = () => {
  const [scrollY, setScrollY] = useState();

  useEffect(() => document.addEventListener('scroll', () => setScrollY(window.scrollY)), []);

  const appBarSX =
    scrollY > 400 ? { background: 'gray', transition: '0.3s' } : { background: 'none', transition: '0.3s' };

  return (
    <AppBar position="fixed" sx={appBarSX}>
      <Container>
        <Toolbar disableGutters>
          <LogoHeader />
          <HeaderSearchField />
          <BurgerMenu />
          <TabletMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
