/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Paper, MenuList, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/system';

const items = [
    {
        image: '../../assets/images/headerFilter/1.jpeg',
        name: 'karpaty - 1 day + spa',
        price: ' 4000 uah',
        amountOfDay: '1 day',
    },
    {
        image: '../../assets/images/headerFilter/2.jpeg',
        name: 'winter karpaty',
        price: ' 3500 uah',
        amountOfDay: '2 day',
    },
    {
        image: '../../assets/images/headerFilter/3.jpeg',
        name: 'weel in karpaty',
        price: ' 7000 uah',
        amountOfDay: '7 day',
    },
];

const ItemBox = styled((props) => <Box  {...props} />)(() => ({
    paddingLeft: 0,
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridColumnGap: ' 10px',
    gridRowGap: '0px',
    boxSizing: 'border-box'
}));

const PaperContainer = styled((props) => <Paper  {...props} />)(() => ({
    width: '242px',
    maxWidth: '100%',
    borderRadius: '5px',
    position: 'absolute'
}));

function HeaderFilterItems() {
    return (
        <PaperContainer>
            <Typography sx={{ paddingTop: '14px', paddingLeft: '10px' }}>found: 3</Typography>
            {items.map(({ image, name, price, amountOfDay }) => (
                <MenuList key={name}>
                    <MenuItem sx={{ paddingLeft: 1 }}>
                        <ItemBox>
                            <Box sx={{ gridArea: '1 / 1 / 3 / 3' }}>
                                <img src={image} alt="" />
                            </Box>
                            <Box sx={{ gridArea: '1 / 3 / 2 / 5' }}>{name}</Box>
                            <Box sx={{ gridArea: '2 / 3 / 3 / 4' }}>{price}</Box>
                            <Box sx={{ gridArea: '2 / 4 / 3 / 5' }}>{amountOfDay}</Box>
                        </ItemBox>
                    </MenuItem>
                </MenuList>
            ))}
            <Typography sx={{ textAlign: 'center' }}>no results.</Typography>
            <Typography sx={{ textAlign: 'center', marginBottom: '15px' }}>please, change your request</Typography>
        </PaperContainer>
    )
}

export default HeaderFilterItems;