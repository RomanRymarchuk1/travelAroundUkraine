import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss'

const pages = ['Home', 'Catalogue'];


const BurgerMenu = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);



    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };



    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'flex-end'
        }}>
            <IconButton
                size="large"
                aria-label="appbar"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                    padding: 0
                }}
            >
                <MenuIcon sx={
                    {
                        '&:hover': {
                            color: 'yellow',
                            transition: '0.5s'
                        }
                    }} />
            </IconButton>

            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'flex', md: 'none', },
                }}
            >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu} sx={{
                        padding: 0,
                        width: '40vw',
                        maxWidth: '200px',
                        height: '50px'
                    }} >
                        <NavLink
                            to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                            key={page}
                            onClick={handleCloseNavMenu}
                            className={styles.menuItemLink}
                        >
                            {page}
                        </NavLink>
                    </MenuItem>
                ))}
                <MenuItem key='cart' onClick={handleCloseNavMenu} sx={{
                    padding: 0,
                    width: '40vw',
                    maxWidth: '200px',
                    height: '50px'
                }} >
                    <NavLink
                        to='/cart'
                        key='cart'
                        onClick={handleCloseNavMenu}
                        className={styles.menuItemLink}>
                        Cart
                    </NavLink>
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default BurgerMenu;
