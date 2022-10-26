import React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './TabletMenu.module.scss'

const pages = ['Home', 'Catalogue'];

const TubletMenu = () =>
(
    <Box sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'flex-end'
    }}>

        {pages.map((page) => (
            <NavLink
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                key={page}
                className={styles.menuItem}
            >
                {page}
            </NavLink>
        ))}

        <NavLink
            to='/cart'
            key='cart'
            className={styles.menuItem}
        >
            <ShoppingCartIcon fontSize='medium' />
        </NavLink>

    </Box>
);


export default TubletMenu;
