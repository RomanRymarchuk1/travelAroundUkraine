import React from 'react';
import PropTypes from 'prop-types';
import { styled, alpha, ToggleButton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { FilterAccordion } from '../index';

const StyledToggleButton = styled((props) => <ToggleButton {...props} />)(({ theme }) => ({
  borderRadius: 40,
  border: '1px solid #EDEDED',
  background: 'none',
  fontWeight: 500,
  fontSize: 12,
  textTransform: 'none',
  padding: theme.spacing(1),
  textAlign: 'center',
  width: '100%',
  color: theme.palette.text.primary,

  '&:hover': {
    boxShadow: `${alpha(theme.palette.primary.main, 0.15)} 0 0 0 0.12rem`,
    borderColor: theme.palette.primary.main,
    backgroundColor: `${alpha(theme.palette.primary.main, 0.05)}`,
  },

  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

    '&:hover': {
      backgroundColor: `${alpha(theme.palette.primary.main, 0.85)}`,
    },
  },
}));

const NumberButton = ({ value, children }) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <StyledToggleButton
      value={value}
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      {children}
    </StyledToggleButton>
  );
};

const touristsNumber = Array(10)
  .fill()
  .map((_, i) => i + 1);

const CatalogFilterTourists = () => (
  <FilterAccordion title="Tourists">
    <Grid container spacing={1}>
      {touristsNumber.map((el) => (
        <Grid xs={4} key={el}>
          <NumberButton value={el}>{el} pers.</NumberButton>
        </Grid>
      ))}

      <Grid xs={8}>
        <NumberButton>More than 10 pers.</NumberButton>
      </Grid>
    </Grid>
  </FilterAccordion>
);

NumberButton.propTypes = {
  children: PropTypes.any,
  value: PropTypes.number,
};

NumberButton.defaultProps = {
  children: '',
  value: 0,
};

export default CatalogFilterTourists;
