import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import TabletMenu from '../TabletMenu/TabletMenu';
import LogoHeader from '../LogoHeader/LogoHeader';
import HeaderSearchFiled from '../SearchFiled/HeaderSearchFiled';




const Header = () => {

    const [scrollY, setScrollY] = useState(window.scrollY)
    document.addEventListener('scroll', () => setScrollY(window.scrollY))

    const appBarSX = scrollY > 400 ?
        { background: 'gray', transition: '0.3s' } :
        { background: 'none', transition: '0.3s' };

    const containerSX = {
        px: { xs: 4, sm: 7, md: 10, lg: 20 }
    }

    return (
        <AppBar
            position="fixed"
            sx={appBarSX} >
            <Container
                maxWidth="xl"
                sx={containerSX} >
                <Toolbar disableGutters  >
                    <LogoHeader />
                    <HeaderSearchFiled />
                    <BurgerMenu />
                    <TabletMenu />
                </Toolbar>
            </Container>
        </AppBar >
    )

}








export default Header;