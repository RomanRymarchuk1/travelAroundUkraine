import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

const pages = [
  {
    name: 'Home',
    link: '/',
    innerContent: 'Home',
  },
  {
    name: 'Catalogue',
    link: '/catalogue',
    innerContent: 'Catalogue',
  },
  {
    name: 'Cart',
    link: '/cart',
    innerContent: 'Cart',
  },
];

const styleNavLink = {
  display: 'block',
  textDecoration: 'none',
  color: 'black',
  width: '100%',
  padding: '6px 16px',
};

const BurgerMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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

  return (
    <Box sx={boxSX}>
      <IconButton
        size="large"
        aria-label="appbar"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        sx={{ padding: 0, color: 'rgb(40, 40, 40)' }}
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
        {pages.map(({ name, link, innerContent }) => (
          <MenuItem key={name} onClick={handleCloseNavMenu} sx={menuItemSX}>
            <NavLink to={link} key={name} onClick={handleCloseNavMenu} style={styleNavLink}>
              {innerContent}
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default BurgerMenu;
