import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { styled, Stack, CardMedia, Typography, CardContent, Box } from '@mui/material';
import { ReactComponent as CoinsIcon } from '../../../../assets/svg/CoinsIcon.svg';

const CardContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  borderRadius: 10,
  boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.05)',
  maxWidth: '1000px',
  margin: '20px',
}));

const CardImage = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  height: 240,
  borderRadius: '10px 10px 0 0',

  [theme.breakpoints.up('laptop')]: {
    width: 250,
    height: 'auto',
    borderRadius: '10px 0 0 10px',
  },
}));

const CardTitle = styled((props) => <Typography variant="h3" {...props} />)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginTop: 20,
  marginBottom: 20,
  textTransform: 'uppercase',
}));

const TourDescription = styled(Typography)(({ theme }) => ({
  borderLeft: `3px solid ${theme.palette.primary.main}`,
  paddingLeft: 24,
  height: '50px',
  overflow: 'hidden',
  WebkitLineClamp: '3',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
}));

const Product = ({ name, currentPrice, itemNo, image, cartQuantity, description }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/tour/${itemNo}`);

  return (
    <CardContainer onClick={handleClick} direction={{ xs: 'column', laptop: 'row' }} spacing={1}>
      <CardImage component="img" image={image} alt="tour photo" />
      <CardContent sx={{ padding: '0 30px 0 36px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <CardTitle>{name}</CardTitle>
        </Box>
        <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: '20px' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <CoinsIcon />
            <Typography
              sx={{ fontWeight: 500, fontSize: { xs: '14px', mobile: '16px', tablet: '18px' } }}
              variant="h3"
              component="span"
            >
              {currentPrice} €
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography
              sx={{ mb: 0, fontWeight: 500, fontSize: { xs: '14px', mobile: '16px', tablet: '18px' } }}
              variant="h3"
              component="span"
            >
              Pieces: {cartQuantity}
            </Typography>
          </Stack>
        </Stack>
        <TourDescription>{description}</TourDescription>
      </CardContent>
    </CardContainer>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  itemNo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cartQuantity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Product;
