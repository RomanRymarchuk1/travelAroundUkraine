/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useNavigate } from 'react-router-dom';
import { AlertModal } from '../../../../components';

const SignupSuccess = ({ activeStep, steps }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleCloseBttn = () => {
    setIsOpen(false);
    navigate('/catalogue');
  };

  if (activeStep !== steps.length) return null;

  const titleJsx = (
    <Box display="flex" justifyContent="center" alignItems="center" columnGap="5px">
      <Typography variant="h2" sx={{ color: 'success.main', mb: 0 }}>
        Sign up Successfull
      </Typography>
      <CheckCircleOutlineRoundedIcon fontSize="large" color="success" />
    </Box>
  );

  return (
    <AlertModal
      open={isOpen}
      onClose={handleCloseBttn}
      onSubmit={handleCloseBttn}
      title={titleJsx}
      disableCancelButton
      submitButtonText="Great !"
      success
    >
      <Typography>You can enjoy your shopping with us now.</Typography>
    </AlertModal>
  );
};

export default SignupSuccess;
