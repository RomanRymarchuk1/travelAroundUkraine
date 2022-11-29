/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Typography, MenuItem } from '@mui/material';
import { TextField } from 'formik-mui';
import { DatePicker } from 'formik-mui-x-date-pickers';
import { Field } from 'formik';
import { formModel } from '../../data';

const PaymentForm = () => {
  const { cardType, nameOnCard, cardNumber, expiryDate, cvv } = formModel;

  return (
    <>
      <Typography variant="h3" align="center" sx={{ mb: '20px' }}>
        Payment Details
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} laptop={6}>
          <Field component={TextField} name={cardType.name} select label={cardType.label} fullWidth>
            <MenuItem value="visa">
              <img src="./assets/images/checkoutPageForm/visa.png" alt="visa" />
            </MenuItem>
            <MenuItem value="masterCard">
              <img src="./assets/images/checkoutPageForm/mastercard.png" alt="mastercard" />
            </MenuItem>
          </Field>
        </Grid>

        <Grid item xs={12} laptop={6}>
          <Field component={TextField} required name={nameOnCard.name} label={nameOnCard.label} fullWidth />
        </Grid>

        <Grid item xs={12} laptop={6}>
          <Field component={TextField} required name={cardNumber.name} label={cardNumber.label} fullWidth />
        </Grid>

        <Grid item xs={12} laptop={3}>
          <Field component={DatePicker} disablePast required name={expiryDate.name} label={expiryDate.label} />
        </Grid>

        <Grid item xs={12} laptop={3}>
          <Field component={TextField} required name={cvv.name} label={cvv.label} fullWidth />
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentForm;
