/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Typography } from '@mui/material';
import { TextField } from 'formik-mui';
import { Field } from 'formik';
import checkoutFormModel from '../../utils/checkoutFormModels/checkoutFormModel';

const UserDetailsForm = () => {
  const { firstName, lastName, email, phone } = checkoutFormModel;

  return (
    <>
      <Typography variant="h3" align="center" sx={{ mb: '20px' }}>
        User Details
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} laptop={6}>
          <Field component={TextField} required name={firstName.name} label={firstName.label} fullWidth />
        </Grid>

        <Grid item xs={12} laptop={6}>
          <Field component={TextField} required name={lastName.name} label={lastName.label} fullWidth />
        </Grid>

        <Grid item xs={12} laptop={6}>
          <Field component={TextField} required name={email.name} label={email.label} fullWidth />
        </Grid>

        <Grid item xs={12} laptop={6}>
          <Field component={TextField} required name={phone.name} label={phone.label} fullWidth />
        </Grid>
      </Grid>
    </>
  );
};
export default UserDetailsForm;
