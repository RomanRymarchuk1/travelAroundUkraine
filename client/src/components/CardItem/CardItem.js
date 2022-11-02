import React from 'react';
// import PropTypes from 'prop-types';
import {Box, Typography} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './CardItem.module.scss'


const CardItem = () =>
    <Box className={styles.cardItem}>
        <Typography color="common.white" className={styles.price}>$ 200.00</Typography>
        <Typography color="common.white" variant="h3" className={styles.header}>Kyiv city walk</Typography>
        <div className={styles.location}>
            <img src="https://visitukraine.today/assets/img/fromukraine/maps-and-flags.png" alt="location"/>
            <Typography color="common.white" className={styles.text}>Kyiv region</Typography>
            <ArrowForwardIosIcon className={styles.arrow} fontSize="small"/>
        </div>
    </Box>


// CardItem.PropTypes = {
//     name: PropTypes.string.isRequired,
//     region: PropTypes.string.isRequired,
// };


export default CardItem;

