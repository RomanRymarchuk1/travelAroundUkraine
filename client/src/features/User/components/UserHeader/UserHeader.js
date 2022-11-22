import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const Img = styled('img')({
  display: 'block',
  margin: 'auto 0',
  width: '80px',
  borderRadius: '50%',
  minWidth: '80px',
  height: '80px',
  backgroundColor: 'yellow',
});

const headerBoxSX = {
  display: 'flex',
  alignItems: 'start',
  m: '0 auto',
  width: '70%',
  maxWidth: '400px',
  minWidth: '300px',
};

const userNameSX = { px: { xs: '5%' }, lineHeight: '40px', my: '30px', fontSize: '30px' };

const UserHeader = ({ userData: { firstName, lastName } }) => (
  <Box sx={headerBoxSX}>
    <Img
    // src={userData.avatarUrl}
    />
    <Typography sx={userNameSX} variant="h2">{`${firstName} ${lastName}`}</Typography>
  </Box>
);

UserHeader.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UserHeader;
