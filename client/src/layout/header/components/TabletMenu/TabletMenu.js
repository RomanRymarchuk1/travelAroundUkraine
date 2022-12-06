import React from 'react';
import { Typography, Box } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
    name: 'favorites',
    link: '/favorites',
    innerContent: 'Favorites',
  },
  {
    name: 'cart',
    link: '/cart',
    innerContent: <ShoppingCartIcon fontSize="medium" />,
  },
];

const boxSX = {
  flexGrow: 1,
  display: { xs: 'none', laptop: 'flex' },
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const typograpySX = (link, pathname) => ({
  textDecoration: 'none',
  display: 'block',
  margin: '0 36px',
  transition: '0.5s',
  fontSize: { laptop: '18px' },
  color: link === pathname && 'secondary.main',

  '&:hover': {
    color: 'secondary.main',
  },
});

const TabletMenu = () => {
  const location = useLocation();
  const { isLogin } = useSelector((store) => store.userReducer);

  const { pathname } = location;

  return (
    <Box component="nav" sx={boxSX}>
      {pages.map(({ name, link, innerContent }) => {
        if (name === 'logIn' && isLogin) {
          return null;
        }
        if (name === 'account' && !isLogin) {
          return null;
        }

        return (
          <Typography component={NavLink} to={link} key={name} sx={typograpySX(link, pathname)} end>
            {innerContent}
          </Typography>
        );
      })}
    </Box>
  );
};

export default TabletMenu;
