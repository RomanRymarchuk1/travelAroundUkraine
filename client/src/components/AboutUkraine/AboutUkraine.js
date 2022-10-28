import React from 'react'
import { Typography, Box } from '@mui/material';
import styles from './AboutUkraine.module.scss';

function AboutUkraine() {
    return (
        <Box className={styles.wrapper}>
            <Box className={styles.flex_img}>
                <img className={styles.what_is_ukraine_img} src='../../img/ukraine.jpeg' alt='Ukraine' />
            </Box>
            <Box p={3} mr={5} ml={5} sx={{
                maxwidth: 400,
                backgroundColor: '#EDEDED',
                borderRadius: '20px',
                zIndex: 1,
                position: 'absolute',
                right: '10px',
                top: '22%'
            }} className={styles.info}>
                <Typography variant='h3' sx={{
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: '29px',
                    color: '#0499DD'
                }} className={styles.what_is_ukraine}>What is Ukraine?</Typography>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fonStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#282828'
                }}>You are going to explore the largest country in Europe – a picturesque place where innovative creativity meets ancient traditions, and wonderful legends come into reality.
                    Upon the road you will come to know lots of brave and kind-hearted people.
                    They are fighting for freedom and dignity.
                    They are searching for peace and prosperity.
                    They are transforming Ukraine into a modern country, unique business hub and new all-season tourist destination.
                    Give them a smile. Your kindness will return to you.
                </Typography>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fonStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#282828'
                }}>
                    Now get closer. The time has come to unlock the great and still less than fully realized potential of Ukraine.
                    It is our time.
                    And it starts right NOW.
                    So, you’ve got the answer to the question ‘What is Ukraine?’… Welcome, and don’t forget to take a big backpack for some great memories with you!
                </Typography>
            </Box>
        </Box>
    );
}

export default AboutUkraine;
