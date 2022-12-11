import React from 'react';
import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

const headerBoxSX = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const userNameSX = { px: { xs: '5%' }, lineHeight: '40px', my: '30px', fontSize: '30px' };

const UserHeader = ({ userData: { firstName, lastName } }) => (
  <Box sx={headerBoxSX}>
    <Typography sx={userNameSX} variant="h2">{`${firstName} ${lastName}`}</Typography>
  </Box>
);

UserHeader.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UserHeader;
