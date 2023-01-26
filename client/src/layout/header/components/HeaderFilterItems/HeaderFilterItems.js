/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';
import { Box, Paper, MenuList, MenuItem, Typography, styled, ClickAwayListener } from '@mui/material';

const ItemBox = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridTemplateRows: 'repeat(2, 1fr)',
  gridColumnGap: '15px',
  gridRowGap: '15px',
  boxSizing: 'border-box',
});

const HeaderFilterItems = ({ closeSearchBar }) => {
  const { data, error } = useSelector((store) => store.searchBar, shallowEqual);

  const searchBarList = data.map(({ imageUrls, name, currentPrice, season }) => (
    <MenuItem key={name}>
      <ItemBox>
        <Box sx={{ gridArea: '1 / 1 / 3 / 3' }}>
          <img src={imageUrls[0]} alt={name} width="90px" height="50px" />
        </Box>
        <Box sx={{ gridArea: '1 / 3 / 2 / 5' }}>{name}</Box>
        <Box sx={{ gridArea: '2 / 3 / 3 / 4' }}>{currentPrice}€</Box>
        <Box sx={{ gridArea: '2 / 4 / 3 / 5' }}>{season}</Box>
      </ItemBox>
    </MenuItem>
  ));

  const searchResults = (
    <>
      <Typography align="center" sx={{ paddingTop: '14px' }} variant="h3">
        Search results: {data.length}
      </Typography>
      <MenuList>{searchBarList}</MenuList>
    </>
  );

  return (
    <ClickAwayListener onClickAway={closeSearchBar}>
      <Paper sx={{ borderRadius: '5px', position: 'absolute', minWidth: '200px', padding: '20px' }}>
        {data.length ? searchResults : null}

        {!data.length && !error && (
          <Typography variant="h3" align="center" gutterBottom={false}>
            No results found
          </Typography>
        )}

        {error && (
          <Typography align="center" gutterBottom={false} sx={{ color: 'error.main' }}>
            {error}
          </Typography>
        )}
      </Paper>
    </ClickAwayListener>
  );
};

HeaderFilterItems.propTypes = {
  closeSearchBar: PropTypes.func.isRequired,
};

export default HeaderFilterItems;
