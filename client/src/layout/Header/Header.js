import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import TubletMenu from '../TabletMenu/TubletMenu';
import LogoHeader from '../LogoHeader/LogoHeader';
import HeaderSearchFiled from '../SearchFiled/HeaderSearchFiled';


const Header = () => {

    const [scrollY, setScrollY] = useState(window.scrollY)

    document.addEventListener('scroll', () => setScrollY(window.scrollY))

    return (
        <AppBar position="fixed" sx={scrollY > 400 ?
            { background: 'gray', transition: '0.3s' } :
            { background: 'none', transition: '0.3s' }} >
            <Container maxWidth="xl" sx={{
                px: { xs: 4, sm: 7, md: 10, lg: 20 }
            }} >
                <Toolbar disableGutters  >
                    <LogoHeader />
                    <HeaderSearchFiled />
                    <BurgerMenu />
                    <TubletMenu />
                </Toolbar>
            </Container>
        </AppBar >
    )

}








export default Header;