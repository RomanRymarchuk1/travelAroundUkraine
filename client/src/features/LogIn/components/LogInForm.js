import React from 'react';
import { Box, Button } from '@mui/material';
import { TextField } from 'formik-mui';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import axiosLogIn from '../../../api/axoisLogIn';

const initialValues = {
  email: '',
  pwd: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().email('It will be an valid email').required('Email is required'),
  pwd: yup.string().min(6, 'Password must have at least 6 characters').required('Password is required!'),
});

const myHandleSubmit = async (values, { resetForm }) => {
  const userData = {
    email: values.email,
    password: values.pwd,
  };

  await axiosLogIn(userData);

  resetForm();
};

const inputBoxSX = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputSX = {
  width: { xs: '80%', tablet: '60%', laptop: '40%' },
  my: { xs: '4%', tablet: '3%' },
};

const buttonSX = {
  width: { xs: '86px', mobile: '110px', tablet: '140px', laptop: '150px' },
  px: 0,
  py: { xs: '8px', mobile: '12px', desktop: '14px' },
  mx: 4,
  fontSize: { xs: '12px', laptop: '14px' },
};

const LogInForm = () => (
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={myHandleSubmit}>
    {({ handleSubmit, handleChange, values, touched, errors }) => (
      <Box
        component={Form}
        sx={inputBoxSX}
        onSubmit={(e) => {
          e.preventDefault();
          return handleSubmit();
        }}
      >
        <Field
          component={TextField}
          onChange={handleChange}
          value={values.email}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          name="email"
          label="Email"
          sx={inputSX}
        />
        <Field
          component={TextField}
          onChange={handleChange}
          value={values.pwd}
          error={touched.pwd && Boolean(errors.pwd)}
          helperText={touched.pwd && errors.pwd}
          type="password"
          name="pwd"
          label="Password"
          sx={inputSX}
        />
        <Box sx={{ my: { xs: 1.5, laptop: 2.5 } }}>
          <Button sx={buttonSX}>sing up</Button>
          <Button type="submit" sx={buttonSX}>
            log in
          </Button>
        </Box>
      </Box>
    )}
  </Formik>
);

export default LogInForm;
