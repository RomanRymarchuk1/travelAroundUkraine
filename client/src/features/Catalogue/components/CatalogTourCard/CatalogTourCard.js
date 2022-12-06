import React from 'react';
import { styled, Stack, CardActions, CardMedia, Button, Typography, CardContent } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CoinsIcon } from '../../../../assets/svg/CoinsIcon.svg';

const CardContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  borderRadius: 10,
  boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.05)',
}));

const CardImage = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  height: 240,
  borderRadius: '10px 10px 0 0',

  [theme.breakpoints.up('tablet')]: {
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

const CardButton = styled(Button)(({ theme }) => ({
  padding: '12px 85px',
  marginTop: 15,

  [theme.breakpoints.up('tablet')]: {
    padding: '12px 43px',
  },
}));

const CatalogTourCard = ({ name, currentPrice, duration, description, imageUrls, itemNo }) => {
  const navigate = useNavigate();

  return (
    <CardContainer direction={{ xs: 'column', tablet: 'row' }} spacing={1}>
      <CardImage component="img" image={imageUrls[0]} alt="tour photo" />
      <CardContent sx={{ padding: '0 30px 0 36px' }}>
        <CardTitle>{name}</CardTitle>
        <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: '20px' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <CoinsIcon />
            <Typography variant="h3" component="span">
              {currentPrice} €
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <AccessTimeIcon color="primary" sx={{ height: '21px' }} />
            <Typography variant="h3" component="span">
              {duration}
            </Typography>
          </Stack>
        </Stack>
        <TourDescription>{description}</TourDescription>
        <CardActions>
          <CardButton onClick={() => navigate(`/tour/${+itemNo}`)}>More details</CardButton>
        </CardActions>
      </CardContent>
    </CardContainer>
  );
};

CatalogTourCard.propTypes = {
  name: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  itemNo: PropTypes.string.isRequired,
};

export default CatalogTourCard;
