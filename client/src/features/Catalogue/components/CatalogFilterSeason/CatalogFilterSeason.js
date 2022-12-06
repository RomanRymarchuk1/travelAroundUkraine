import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { FilterAccordion } from '..';
import { setSeasons, setAllSeasons } from '../../../../store/slices/filterSlice/filterSlice';

const seasons = ['Summer', 'Autumn', 'Winter', 'Spring'];

const CatalogFilterSeason = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(Array(seasons.length).fill(false));

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

  const handleChange = (event) => {
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
