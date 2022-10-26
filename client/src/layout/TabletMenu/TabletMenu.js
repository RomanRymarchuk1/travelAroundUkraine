import React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './TabletMenu.module.scss'

const pages = [{
    name: 'Home',
    link: '/',
    innerContent: 'Home'
},
{
    name: 'Catalogue',
    link: '/catalogue',
    innerContent: 'Catalogue'
},
{
    name: 'Cart',
    link: '/cart',
    innerContent: (<ShoppingCartIcon fontSize='medium' />)
}];

const TubletMenu = () => {

    const boxSX = {
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'flex-end'
    }

    return (
        <Box sx={boxSX}>

            {pages.map(({ name, link, innerContent }) => (
                <NavLink
                    to={link}
                    key={name}
                    className={styles.menuItem}
                >
                    {innerContent}
                </NavLink>
            ))}

        </Box>
    );
}


export default TubletMenu;
