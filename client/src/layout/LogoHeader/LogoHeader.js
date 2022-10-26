import React from 'react';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import { NavLink } from 'react-router-dom';
import styles from './LogoHeader.module.scss'

const LogoHeader = () =>
(
    <NavLink
        to='/'
        className={styles.logoLink} >
        <TravelExploreOutlinedIcon fontSize='large' />
    </NavLink>
);


export default LogoHeader;
