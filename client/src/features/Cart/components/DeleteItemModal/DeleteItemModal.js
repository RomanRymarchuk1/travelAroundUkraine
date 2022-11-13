import {
  Button as MuiButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const Button = styled(MuiButton)({
  padding: '12px 24px',
});

const DeleteItemModal = ({ open, onClose, onDelete, tourTitle }) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="delete-dialog-title"
    aria-describedby="delete-dialog-description"
  >
    <DialogTitle id="delete-dialog-title">Delete this tour?</DialogTitle>
    <DialogContent>
      <DialogContentText id="delete-dialog-description">
        Are you sure you want to delete tour:{' '}
        <Typography component="span" fontStyle="italic">
          {tourTitle}
        </Typography>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} disableElevation>
        Cancel
      </Button>
      <Button onClick={onDelete} disableElevation autoFocus>
        Delete
      </Button>
    </DialogActions>
  </Dialog>
);

DeleteItemModal.propTypes = {
  open: PropTypes.bool.isRequired,
  tourTitle: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

DeleteItemModal.defaultProps = {
  tourTitle: '',
};

export default DeleteItemModal;
