import React from 'react';
import {NavLink} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper'
import CardItem from '../CardItem/CardItem';
import styles from './CardContainer.module.scss';


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const cards = [
    <CardItem/>,
    <CardItem/>,
    <CardItem/>,
    <CardItem/>,
    <CardItem/>,
    <CardItem/>,
    <CardItem/>,
    <CardItem/>,
    <CardItem/>,
    <CardItem/>,
    <CardItem/>,
    <CardItem/>,
]


const CardContainer = () => {

    return (
        <div className={styles.cardContainer}>
            <div className={styles.headerContainer}>
                <h2 className={styles.header}>Popular tours</h2>
                <NavLink className={styles.allTours} to="/catalogue">View All</NavLink>
            </div>
            <div className={styles.swiperContainer}>
                <div id='previous' className={styles.btnPrev}></div>
                <div id='next' className={styles.btnNext}></div>
                <Swiper
                    breakpoints={{
                        265: {
                            width: 265,
                            slidesPerView: 1,
                        },
                        560: {
                            width: 560,
                            slidesPerView: 2,
                        },
                        860: {
                            width: 860,
                            slidesPerView: 3,
                        },
                        1150: {
                            width: 1150,
                            slidesPerView: 4,
                        },
                    }}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '#next',
                        prevEl: '#previous',
                    }}
                    modules={[Navigation]}
                    className="mySwiper">
                    {cards.map(card => (
                        <SwiperSlide
                        >{card}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default CardContainer;

