/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, Dialog, DialogContent, Typography, Box, DialogActions, DialogTitle } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

const PaymentSuccess = ({ activeStep, steps }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseBttn = () => {
    setIsOpen(false);
  };

  if (activeStep !== steps.length) return null;

  return (
    <Dialog open={isOpen} onClose={handleCloseBttn}>
      <DialogTitle>
        <Box display="flex" justifyContent="center" alignItems="center" columnGap="5px">
          <Typography variant="h2" sx={{ color: 'success.main', mb: 0 }}>
            Payment Successfull
          </Typography>
          <CheckCircleOutlineRoundedIcon fontSize="large" color="success" />
        </Box>
      </DialogTitle>

      <DialogContent>
        <Typography>Your order number #425435 will be shipped shortly.</Typography>
      </DialogContent>

      <DialogActions>
        <Button sx={{ m: '0 10px 10px 0' }} onClick={handleCloseBttn} autoFocus>
          Great !
        </Button >
      </DialogActions>
    </Dialog>
  );
};

export default PaymentSuccess;
