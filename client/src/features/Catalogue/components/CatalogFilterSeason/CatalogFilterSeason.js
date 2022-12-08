import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { FilterAccordion } from '..';
import { setSeasons, setAllSeasons } from '../../../../store/slices/filterSlice/filterSlice';

const seasons = ['Summer', 'Autumn', 'Winter', 'Spring'];

const CatalogFilterSeason = () => {
  const dispatch = useDispatch();
  const filterSeasons = useSelector((store) => store.filter.seasons);

  const initialValue = () => {
    let value = Array(seasons.length).fill(false);
    if (filterSeasons.length > 0) {
      value = seasons.map((season) => filterSeasons.indexOf(season) !== -1);
      return value;
    }
    return value;
  };

  const [checked, setChecked] = useState(() => initialValue());

  const isAllChecked = checked.every((el) => el === true);

  const handleChangeAll = () => {
    setChecked((current) => {
      const newChecked = [...current];
      if (!isAllChecked) {
        newChecked.fill(true);
        dispatch(setAllSeasons(seasons));
      } else {
        newChecked.fill(false);
        dispatch(setAllSeasons([]));
      }
      return newChecked;
    });
  };

  const handleChange = async (event) => {
    const value = event.target.id;
    const index = seasons.indexOf(value);
    setChecked((current) => {
      const newChecked = [...current];
      newChecked[index] = !newChecked[index];
      return newChecked;
    });
    dispatch(setSeasons(value));
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      {seasons.map((el) => (
        <FormControlLabel
          key={el}
          label={el}
          control={<Checkbox id={el} checked={checked[seasons.indexOf(el)]} onChange={handleChange} />}
        />
      ))}
    </Box>
  );

  return (
    <FilterAccordion title="Season">
      <FormControlLabel label="All seasons" control={<Checkbox checked={isAllChecked} onChange={handleChangeAll} />} />
      {children}
    </FilterAccordion>
  );
};

export default CatalogFilterSeason;
