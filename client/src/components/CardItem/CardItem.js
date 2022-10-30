import React from 'react';
import styles from './CardItem.module.scss'
import {ReactComponent as Arrow} from "../../svg/hotDeals/arrow.svg";


function CardItem() {
    return (
        <div className={styles.cardItem}>
            <p className={styles.price}>$ 200.00</p>
            <p className={styles.header}>KYIV CITY WALK</p>
            <div className={styles.location}>
                <img src="https://visitukraine.today/assets/img/fromukraine/maps-and-flags.png" alt="location"/>
                <p className={styles.text}>Kyiv Region</p>
                <Arrow className={styles.arrow}/>
            </div>
        </div>
    );
}

export default CardItem;

