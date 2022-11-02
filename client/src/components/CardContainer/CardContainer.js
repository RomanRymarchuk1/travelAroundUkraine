import React from 'react';
import {NavLink} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper'
import {Box, Typography} from "@mui/material";
import CardItem from '../CardItem';
import styles from './CardContainer.module.scss';


import 'swiper/swiper.min.css'


const cards = [
    {
        name: "Kyiv city walk",
        region: "Kyiv region",
        id: 1,
    },
    {
        name: "Lviv city walk",
        region: "Lviv region",
        id: 2,
    },
    {
        name: "Donetsk city walk",
        region: "Donetsk region",
        id: 3,
    },
    {
        name: "Odessa city walk",
        region: "Odessa region",
        id: 4,
    },
    {
        name: "Dnepr city walk",
        region: "Dnepr region",
        id: 5,
    },
    {
        name: "Chernivtsi city walk",
        region: "Chernivtsi region",
        id: 6,
    },
    {
        name: "Ternopil city walk",
        region: "Ternopil region",
        id: 7,
    },
    {
        name: "Lutsk city walk",
        region: "Lutsk region",
        id: 8,
    },
]


const CardContainer = () =>

    <Box className={styles.cardContainer}>
        <div className={styles.headerContainer}>
            <Typography variant="h2" className={styles.header}>Popular tours</Typography>
            <NavLink to="/catalogue">
                <Typography
                    className={styles.allTours}>View All
                </Typography>
            </NavLink>
        </div>
        <div className={styles.swiperContainer}>
            <div id='previous' className={styles.btnPrev}/>
            <div id='next' className={styles.btnNext}/>
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
                loop
                loopFillGroupWithBlank
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: '#next',
                    prevEl: '#previous',
                }}
                modules={[Navigation]}
                className="mySwiper">
                {cards.map(({name, region, id}) => (
                    <SwiperSlide
                        key={id}
                    ><CardItem
                        name={name}
                        region={region}
                        id={id}
                    />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </Box>


export default CardContainer;

