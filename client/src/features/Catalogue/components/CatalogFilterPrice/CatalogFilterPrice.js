import React, { useState, useEffect } from 'react';
import {
  useLocation,
  // useParams
} from 'react-router-dom';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { styled, alpha, Box, Slider, InputBase, Button } from '@mui/material';
import { FilterAccordion } from '..';
import {
  setMinPrice,
  setMaxPrice,
  // setPrices,
  // setFilterParams,
  setIsFilter,
  // fetchFilteredTours,
} from '../../../../store/slices/filterSlice/filterSlice';

const FilterInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 40,
    border: '1px solid',
    borderColor: '#EDEDED',
    width: 85,
    height: 30,
    paddingLeft: 16,
    fontSize: 12,
    boxSizing: 'border-box',

    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.15)} 0 0 0 0.12rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ConfirmButton = styled(Button)(() => ({
  fontSize: 12,
  alignSelf: 'center',
  minWidth: 50,
  height: 30,
  padding: 0,

  '&:disabled': {
    background: '#EDEDED',
  },
}));

// let minTourPrice = 0;
// let maxTourPrice = 0;

function valuetext(value) {
  return `${value}`;
}

const CatalogFilterPrice = () => {
  const dispatch = useDispatch();
  const [prices, setPrices] = useState([0, 0]);
  const [minPrice, maxPrice] = prices;
  const allPrices = useSelector((state) => state.filter.allToursPrices, shallowEqual);
  const minTourPrice = Math.min.apply(null, allPrices);
  const maxTourPrice = Math.max.apply(null, allPrices);
  const filterParams = useSelector((store) => store.filter.filterParams);
  const location = useLocation();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (allPrices.length > 0 && !location.search) {
      dispatch(setIsFilter(false));
      setPrices([minTourPrice, maxTourPrice]);
    }
  }, [allPrices]);

  useEffect(() => {
    if (location.search) {
      const priceFrom = Number(filterParams.price_from);
      const priceTo = Number(filterParams.price_to);
      if (priceFrom && priceTo) {
        dispatch(setMinPrice(priceFrom));
        dispatch(setMaxPrice(priceTo));
        setPrices([priceFrom, priceTo]);
      };
    } else if(!location.search && Object.keys(filterParams).length === 0){
      setPrices([minTourPrice, maxTourPrice]);
    }
  }, [filterParams]);

  useEffect(() => {
    setError(() => {
      if (minPrice > maxPrice) {
        return true;
      }
      return false;
    });
  }, [prices]);

  const handleChange = (event, newValue) => {
    setPrices(newValue);
  };

  const changeMinPrice = (event) => {
    const newValue = Number(event.target.value);
    if (!Number.isNaN(newValue)) {
      setPrices([newValue, maxPrice]);
    } else {
      setPrices([minTourPrice, maxPrice]);
    }
  };

  const changeMaxPrice = (event) => {
    const newValue = Number(event.target.value);
    if (!Number.isNaN(newValue)) {
      setPrices([minPrice, newValue]);
    } else {
      setPrices([minPrice, maxTourPrice]);
    }
  };


  const setPriceFilter = async () => {
    dispatch(setIsFilter(true));
    dispatch(setMinPrice(minPrice));
    dispatch(setMaxPrice(maxPrice));
  };

  return (
    <FilterAccordion title="Price">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '5px' }}>
        <FilterInput
          sx={error && { '& .MuiInputBase-input, & .MuiInputBase-input:focus': { borderColor: 'red' } }}
          placeholder={String(minTourPrice)}
          value={minPrice}
          onChange={changeMinPrice}
        />
        <span style={{ color: '#c6c6c6', fontSize: '20px' }}>-</span>
        <FilterInput
          sx={error && { '& .MuiInputBase-input, & .MuiInputBase-input:focus': { borderColor: 'red' } }}
          placeholder={String(maxTourPrice)}
          value={maxPrice}
          onChange={changeMaxPrice}
        />
        <ConfirmButton disabled={error} onClick={setPriceFilter}>
          OK
        </ConfirmButton>
      </Box>

      <Box sx={{ m: '0 auto', pt: '20px' }}>
        <Slider
          min={minTourPrice}
          max={maxTourPrice}
          getAriaLabel={() => 'Price range'}
          value={prices}
          onChange={handleChange}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          disableSwap
        />
      </Box>
    </FilterAccordion>
  );
};

export default CatalogFilterPrice;
