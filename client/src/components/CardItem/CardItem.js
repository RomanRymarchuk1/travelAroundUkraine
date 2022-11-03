import React from 'react';
// import PropTypes from 'prop-types';
import {Typography, Box, styled} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CardItemWrapper = styled("div")({
    minWidth: "265px",
    maxWidth: "265px",
    height: "400px",
    background: "url('../../../public/assets/images/hotDeals/aerial-view-of-colorful-mixed-forest-shrouded-in-morning-fog-on-a-beautiful-autumn-day.jpg')",
    backgroundSize: "cover",
    color: "white",
    position: "relative",
    cursor: "pointer",

    "&::after": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.3)",
        left: "0",
        top: "0",
        transition: "opacity 0.5s",
        opacity: "1",
    },

    "&:hover::after": {
        opacity: "0",
        cursor: "pointer",
    }
})

const CardItemPrice = styled('div')({
    backgroundColor: "#007aff",
    textAlign: "center",
    width: "108px",
    fontSize: "18px",
    paddingTop: "19px",
    paddingBottom: "19px",
    fontWeight: "bold",
    letterSpacing: "1px",
    marginTop: "0",
    position: "absolute",
    zIndex: "1",
})

const CardItemHeader = styled("div")({
    position: "absolute",
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "265px",
    paddingLeft: "25px",
    zIndex: "2",
    textTransform: "uppercase",
})

const CardItemLocation = styled('div')({
    display: "flex",
    paddingLeft: "25px",
    paddingRight: "25px",
    zIndex: "2",
    position: "absolute",
    width: "100%",
    alignItems: "center",
    marginTop: "350px",
})

const CardItemText = styled('div')(
    {
        fontSize: "14px",
        margin: "0",
    }
)


const CardItem = () =>
    <CardItemWrapper>
        <CardItemPrice>
            <Typography color="common.white">$ 200.00</Typography>
        </CardItemPrice>
        <CardItemHeader>
            <Typography color="common.white" variant="h3">Kyiv city walk</Typography>
        </CardItemHeader>
        <CardItemLocation>
            <Box component="img" src="https://visitukraine.today/assets/img/fromukraine/maps-and-flags.png"
                 alt="location" sx={{paddingRight: "10px"}}/>
            <CardItemText>
                <Typography color="common.white">Kyiv region</Typography>
            </CardItemText>
            <ArrowForwardIosIcon sx={{marginLeft: "80px"}} fontSize="small"/>
        </CardItemLocation>
    </CardItemWrapper>


// CardItem.PropTypes = {
//     name: PropTypes.string.isRequired,
//     region: PropTypes.string.isRequired,
// };


export default CardItem;

