/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Dialog, DialogContent, Typography, Box, DialogActions, DialogTitle, Button } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useNavigate } from 'react-router-dom';

const SignupSuccess = ({ activeStep, steps }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleCloseBttn = () => {
    setIsOpen(false);
    navigate('/catalogue');
  };

  if (activeStep !== steps.length) return null;

  return (
    <Dialog open={isOpen} onClose={handleCloseBttn}>
      <DialogTitle>
        <Box display="flex" justifyContent="center" alignItems="center" columnGap="5px">
          <Typography variant="h2" sx={{ color: 'success.main', mb: 0 }}>
            Sign up Successfull
          </Typography>
          <CheckCircleOutlineRoundedIcon fontSize="large" color="success" />
        </Box>
      </DialogTitle>

      <DialogContent>
        <Typography>You can enjoy your shopping with us now.</Typography>
      </DialogContent>

      <DialogActions>
        <Button success="true" onClick={handleCloseBttn} autoFocus>
          Great !
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignupSuccess;
