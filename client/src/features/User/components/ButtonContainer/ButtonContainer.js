import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AlertModal } from '../../../../components';
import { toggleIsLogin } from '../../../../store/slices/userSlice/userSlice';
import { setCart } from '../../../../store/slices/cartSlice/cartSlice';

const buttonBoxSX = { display: 'flex', width: '100%', justifyContent: 'end', my: '20px' };

const buttonSX = {
  width: { xs: '86px', mobile: '110px', tablet: '140px', laptop: '150px' },
  px: 0,
  py: { xs: '8px', mobile: '12px', desktop: '14px' },
  mx: 4,
  fontSize: { xs: '12px', laptop: '14px' },
};

const ButtonContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem('token');
    dispatch(toggleIsLogin());
    dispatch(setCart([]));
    navigate('/');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box sx={buttonBoxSX}>
      <AlertModal
        open={isModalOpen}
        onSubmit={logOut}
        onClose={closeModal}
        title="Confirm your actions"
        submitButtonText="Log Out"
      >
        Are you sure you want to log out of your account?
      </AlertModal>
      <Button onClick={openModal} sx={buttonSX}>
        log out
      </Button>
    </Box>
  );
};

export default ButtonContainer;
