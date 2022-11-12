/* eslint-disable react/prop-types */
import React from 'react';
import {Box, Paper, MenuList, MenuItem,Typography} from '@mui/material';
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

const PaperContainer = styled((props) => <Paper  {...props} />)(({ theme }) => ({
    width: '242px',
    maxWidth: '100%',
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: '5px',
    position: 'absolute'
}));

const ImageGrid = styled((props) => <Box  {...props} />)(() => ({
    gridArea: '1 / 1 / 3 / 3'
}));

const TourNameGrid = styled((props) => <Box  {...props} />)(() => ({
    gridArea: '1 / 3 / 2 / 5'
}));

const TourPriceGrid = styled((props) => <Box  {...props} />)(() => ({
    gridArea: '2 / 3 / 3 / 4'
}));

const TourAmountOfPeopleGrid = styled((props) => <Box  {...props} />)(() => ({
    gridArea: '2 / 4 / 3 / 5'
}));

const Item = styled((props) => <MenuItem  {...props} />)(() => ({
    paddingLeft: 1
}));

const NothingToFoundText = styled((props) => <Typography  {...props} />)(() => ({
    display: 'block', textAlign: 'center'
}));

function HeaderFilterItems() {
    return(  
    <PaperContainer> 
        <Typography sx={{ paddingTop: '14px', paddingLeft: '10px'}}>found: 3</Typography>
        {items.map(({ image, name, price, amountOfDay }) => (
           <MenuList key={name}>
           <Item>
               <ItemBox>
                   <ImageGrid>
                       <img src={image} alt="" />
                   </ImageGrid>
                   <TourNameGrid>{name}</TourNameGrid>
                   <TourPriceGrid>{price}</TourPriceGrid>
                   <TourAmountOfPeopleGrid>{amountOfDay}</TourAmountOfPeopleGrid>
               </ItemBox>
           </Item>
       </MenuList>
        ))}
         <NothingToFoundText>no results.</NothingToFoundText>
         <NothingToFoundText sx={{ marginBottom: '15px'}}>please, change your request</NothingToFoundText>
    </PaperContainer>
     )
    }
    
export default HeaderFilterItems;