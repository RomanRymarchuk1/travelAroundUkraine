/* eslint-disable react/prop-types */
import React from 'react';
import { Typography, Box } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { AlertModal } from '../../../../components';

const PaymentSuccess = ({ open, onClose }) => {
  const handleCloseBttn = () => {
    onClose();
  };

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
      open={open}
      onClose={handleCloseBttn}
      onSubmit={handleCloseBttn}
      title={titleJsx}
      disableCancelButton
      submitButtonText="Great !"
      success
    >
      Your order number #425435 will be shipped shortly.
    </AlertModal>
  );
};

export default PaymentSuccess;
