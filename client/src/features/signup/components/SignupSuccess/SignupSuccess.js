/* eslint-disable react/prop-types */
import React from 'react';
import { Dialog, DialogContent, Typography, Box, DialogActions, DialogTitle, Button } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useNavigate } from 'react-router-dom';

const SignupSuccess = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleCloseBttn = () => {
    onClose();
    navigate('/catalogue');
  };

  return (
    <Dialog open={open} onClose={handleCloseBttn}>
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
