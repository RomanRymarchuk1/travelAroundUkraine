import {
  Button as MuiButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  styled,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const Button = styled(MuiButton)({
  padding: '12px 24px',
});

const AlertModal = ({ open, onClose, onSubmit, title, children }) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">{children}</DialogContentText>
    </DialogContent>
    <DialogActions sx={{ paddingBottom: 2 }}>
      <Button onClick={onClose} disableElevation>
        Cancel
      </Button>
      <Button onClick={onSubmit} disableElevation autoFocus>
        Submit
      </Button>
    </DialogActions>
  </Dialog>
);

AlertModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

AlertModal.defaultProps = {
  title: 'Alert!',
};

export default AlertModal;
