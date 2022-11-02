import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  transition: '0.2s',

  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    transition: '0.2s',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('mobile')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    color: 'rgb(40, 40, 40)',
    // fontSize: { xs: '14px', tablet: '16px', laptop: '20px' },
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('mobile')]: {
      width: '12ch',
      '&:focus': {
        border: '1px solid #FFC700',
        borderRadius: theme.shape.borderRadius,
        width: '20ch',
      },
    },
  },
}));

const HeaderSearchField = () => (
  <Search>
    <SearchIconWrapper>
      <SearchIcon sx={{ color: 'rgb(40, 40, 40)' }} />
    </SearchIconWrapper>
    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
  </Search>
);

export default HeaderSearchField;
