import React from 'react';
import { Field } from 'formik';
import { TextField, RadioGroup } from 'formik-mui';
import { DatePicker } from 'formik-mui-x-date-pickers';
import { Grid, Typography, FormLabel, Radio, FormControlLabel } from '@mui/material';
import { formModel } from '../../data';

const UserInfoForm = () => {
  const FormControlLabelSx = {
    '& .MuiTypography-gutterBottom': {
      mb: 0,
    },
  };

  const { firstName, lastName, gender, birthDate, phone } = formModel;

  return (
    <>
      <Typography variant="h3" mb={3}>
        User Info
      </Typography>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} laptop={6}>
          <Field component={TextField} name={firstName.name} label={firstName.label} fullWidth required />
        </Grid>

        <Grid item xs={12} laptop={6}>
          <Field component={TextField} name={lastName.name} label={lastName.label} fullWidth required />
        </Grid>

        <Grid item xs={12} laptop={4}>
          <FormLabel id={gender.name}>{gender.label}</FormLabel>
          <Field component={RadioGroup} aria-labelledby={gender.name} row name={gender.name}>
            <FormControlLabel sx={FormControlLabelSx} value="male" control={<Radio />} label="Male" />
            <FormControlLabel sx={FormControlLabelSx} value="female" control={<Radio />} label="Female" />
            <FormControlLabel sx={FormControlLabelSx} value="other" control={<Radio />} label="Other" />
          </Field>
        </Grid>

        <Grid item xs={12} laptop={4}>
          <Field component={DatePicker} disableFuture name={birthDate.name} label={birthDate.label} />
        </Grid>

        <Grid item xs={12} laptop={4}>
          <Field component={TextField} name={phone.name} label={phone.label} fullWidth />
        </Grid>
      </Grid>
    </>
  );
};

export default UserInfoForm;
