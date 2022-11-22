/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, Dialog, DialogContent, Typography, Box, DialogActions, DialogTitle } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { AlertModal } from '../../../../components';

const PaymentSuccess = ({ activeStep, steps }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseBttn = () => {
    setIsOpen(false);
  };

  if (activeStep !== steps.length) return null;

  const titleJsx = (
    <Box display="flex" justifyContent="center" alignItems="center" columnGap="5px">
      <Typography variant="h2" sx={{ color: 'success.main', mb: 0 }}>
        Payment Successfull
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
      <Typography>Your order number #425435 will be shipped shortly.</Typography>
    </AlertModal>
  );
};

export default PaymentSuccess;
