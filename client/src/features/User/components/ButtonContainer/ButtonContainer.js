import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleIsLogin } from '../../../../store/slices/userSlice/userSlice';

const buttonBoxSX = { display: 'flex', width: '100%', justifyContent: 'end', my: '20px' };

const buttonSX = {
  width: { xs: '86px', mobile: '110px', tablet: '140px', laptop: '150px' },
  px: 0,
  py: { xs: '8px', mobile: '12px', desktop: '14px' },
  mx: 4,
  fontSize: { xs: '12px', laptop: '14px' },
};

const ButtonContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem('token');
    dispatch(toggleIsLogin());
    navigate('/');
  };

  return (
    <Box sx={buttonBoxSX}>
      <Button onClick={logOut} sx={buttonSX}>
        log out
      </Button>
    </Box>
  );
};

export default ButtonContainer;
