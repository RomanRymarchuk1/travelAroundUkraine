import React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './TabletMenu.module.scss';

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
    innerContent: <ShoppingCartIcon fontSize="medium" />,
  },
];

const TabletMenu = () => {
  const boxSX = {
    flexGrow: 1,
    display: { xs: 'none', laptop: 'flex' },
    justifyContent: 'flex-end',
    alignItems: 'center',
  };

  return (
    <Box component="nav" sx={boxSX}>
      {pages.map(({ name, link, innerContent }) => (
        <NavLink
          to={link}
          key={name}
          className={({ isActive }) => (isActive ? `${styles.actveMenuItem} ${styles.menuItem}` : styles.menuItem)}
          end
        >
          {innerContent}
        </NavLink>
      ))}
    </Box>
  );
};

export default TabletMenu;
