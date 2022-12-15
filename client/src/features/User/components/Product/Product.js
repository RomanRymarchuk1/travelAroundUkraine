import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Product = ({ name, currentPrice, itemNo, image, cartQuantity }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/tour/${itemNo}`);

  //   TODO: refactore name render

  return (
    <Box
      onClick={handleClick}
      component="li"
      sx={{
        display: 'flex',
        my: '3%',
        cursor: 'pointer',
        border: '1px solid',
        borderColor: 'secondary.main',
        borderRadius: '20px',
        minHeight: '100px',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ width: '140px', height: '100px' }}>
        <img src={image} alt="aaa" width="100%" height="100%" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '65%',
          px: 2,
        }}
      >
        <Typography
          sx={{
            maxWidth: '300px',
            color: 'primary.main',
            fontSize: { xs: '12px', tablet: '16px' },
            fontWeight: 700,
            paddingTop: 1,
          }}
        >
          {name.length > 25 && `${name.slice(0, 20)}...`.toUpperCase()}
          {name.length < 25 && name.toUpperCase()}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: { tablet: '10px' } }}>
          <Typography>Price: {currentPrice}€ </Typography>
          <Typography>Quantity: {cartQuantity} </Typography>
        </Box>
      </Box>
    </Box>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  itemNo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cartQuantity: PropTypes.number.isRequired,
};

export default Product;
