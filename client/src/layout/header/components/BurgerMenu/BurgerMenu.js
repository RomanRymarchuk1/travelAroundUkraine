import React, { useState } from 'react';
import { Box, MenuItem, Menu, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const pages = [
  {
    name: 'home',
    link: '/',
    innerContent: 'Home',
  },
  {
    name: 'catalogue',
    link: '/catalogue',
    innerContent: 'Catalogue',
  },
  {
    name: 'logIn',
    link: '/login',
    innerContent: 'Log In',
  },
  {
    name: 'account',
    link: '/user',
    innerContent: 'Account',
  },
  {
    name: 'cart',
    link: '/cart',
    innerContent: 'Cart',
  },
  {
    name: 'favorites',
    link: '/favorites',
    innerContent: 'Favorites',
  },
];

const styleNavLink = {
  display: 'block',
  textDecoration: 'none',
  color: 'text.primary',
  width: '100%',
  padding: '6px 16px',
};

const boxSX = {
  flexGrow: 1,
  display: { xs: 'flex', laptop: 'none' },
  justifyContent: 'flex-end',
};

const menuSX = {
  display: { xs: 'flex', laptop: 'none' },
};

const menuItemSX = {
  padding: 0,
  width: '40vw',
  maxWidth: '200px',
  height: '50px',
};

const anchorOrigin = {
  vertical: 'bottom',
  horizontal: 'left',
};

const transformOrigin = {
  vertical: 'top',
  horizontal: 'left',
};

const BurgerMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { isLogin } = useSelector((store) => store.userReducer);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={boxSX}>
      <IconButton
        size="large"
        aria-label="appbar"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        sx={{ padding: 0, color: 'text.primary' }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={anchorOrigin}
        keepMounted
        transformOrigin={transformOrigin}
        open={!!anchorElNav}
        onClose={handleCloseNavMenu}
        sx={menuSX}
      >
        {pages.map(({ name, link, innerContent }) => {
          if (name === 'logIn' && isLogin) {
            return null;
          }
          if (name === 'account' && !isLogin) {
            return null;
          }

          return (
            <MenuItem key={name} onClick={handleCloseNavMenu} sx={menuItemSX}>
              <Typography component={NavLink} to={link} key={name} sx={styleNavLink} end>
                {innerContent}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default BurgerMenu;
