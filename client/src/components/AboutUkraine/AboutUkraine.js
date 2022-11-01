/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Typography, Box,styled,  } from '@mui/material';
import styles from './AboutUkraine.module.scss';

const UkraineInfoBlock = styled((props) => <Box {...props} />)(({ theme }) => ({
    [theme.breakpoints.up('tablet')]: {
        top: '55%',
    },
    [theme.breakpoints.up('laptop')]: {
        top: '40%',
        
    },
}));

const UkraineTextInfo = styled((props) => <Typography variant="body1" {...props} />)(({ theme }) => ({

    [theme.breakpoints.up('tablet')]: {
        width: '494px',
        padding: '10px',
        fontSize: '18px',
        lineHeight: '1.2',
    },

    [theme.breakpoints.up('laptop')]: {
        fontSize: '18px',
        padding: '20px'
    },
}));

const AboutUkraineContainer = styled((props) => <Box {...props} />)(({ theme }) => ({

    backgroundColor: '#EDEDED',
    borderRadius: '20px',
    zIndex: 1,
    position: 'absolute',
    right: '1px',
    top: '10%',
    marginLeft: '30px',
    marginRight: '30px',
    padding: '40px',

    [theme.breakpoints.up('tablet')]: {
       top:'15%'
    },

    [theme.breakpoints.up('laptop')]: {
        top:'12%',
    },
}));


function AboutUkraine() {
    return (
        <Box sx={{ position: 'relative' }}>
            <Box className={styles.flex_img}>
                <img className={styles.what_is_ukraine_img} src='../../img/ukraine.jpeg' alt='Ukraine' />
            </Box>
            <UkraineInfoBlock>
                <AboutUkraineContainer className={styles.info}>
                    <Typography variant='h2' className={styles.what_is_ukraine}>What is Ukraine?</Typography>
                        <UkraineTextInfo variant='body1'>You are going to explore the largest country in Europe – a picturesque place where innovative creativity meets ancient traditions, and wonderful legends come into reality.
                            Upon the road you will come to know lots of brave and kind-hearted people.
                            They are fighting for freedom and dignity.
                            They are searching for peace and prosperity.
                            They are transforming Ukraine into a modern country, unique business hub and new all-season tourist destination.
                        </UkraineTextInfo>
                        <UkraineTextInfo variant='body1'>
                            Now get closer. The time has come to unlock the great and still less than fully realized potential of Ukraine.
                            It is our time.
                            And it starts right NOW.
                            So, you’ve got the answer to the question ‘What is Ukraine?’… Welcome, and don’t forget to take a big backpack for some great memories with you!
                        </UkraineTextInfo>
                </AboutUkraineContainer>
            </UkraineInfoBlock>
        </Box>
    );
}

export default AboutUkraine;
