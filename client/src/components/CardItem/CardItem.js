import React from 'react';
// import PropTypes from 'prop-types';
import styles from './CardItem.module.scss'
import {ReactComponent as Arrow} from "../../svg/hotDeals/arrow.svg";




const CardItem = () =>
        <div className={styles.cardItem}>
            <p className={styles.price}>$ 200.00</p>
            <p className={styles.header}>Kyiv city walk</p>
            <div className={styles.location}>
                <img src="https://visitukraine.today/assets/img/fromukraine/maps-and-flags.png" alt="location"/>
                <p className={styles.text}>Kyiv region</p>
                <Arrow className={styles.arrow}/>
            </div>
        </div>



// CardItem.PropTypes = {
//     name: PropTypes.string.isRequired,
//     region: PropTypes.string.isRequired,
// };



export default CardItem;

