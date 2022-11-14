import React from 'react';
import { Paper, TextField, Typography, Box, Button } from '@mui/material';
import { useFormik, FormikProvider } from 'formik';
import * as yup from 'yup';

const initialValues = {
  email: '',
  pwd: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().min(2, 'Min 2 characters in Title').required('Title is required!'),
  pwd: yup.string().required('Description is required!').required('Title is required!'),
});

const handleSubmit = (values) => {
  const user = {
    email: values.email,
    pwd: values.pwd,
  };
  console.log(user);
};

const paperSX = {
  textAlign: 'center',
  px: { xs: 2 },
  py: { xs: 4 },
  backgroundColor: 'rgb(245, 245, 245)',
  borderRadius: '24px',
  width: { desktop: '90%' },
  m: '0 auto',
};

const inputBoxSX = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputSX = {
  width: { xs: '90%', tablet: '60%', laptop: '45%', desktop: '30%' },
  my: { xs: '4%', tablet: '3%', desktop: '2%' },
};

const buttonSX = {
  width: { xs: '86px', mobile: '110px', tablet: '140px', laptop: '150px' },
  px: 0,
  py: { xs: '8px', mobile: '12px', desktop: '14px' },
  mx: 4,
  fontSize: { xs: '12px', laptop: '14px' },
};

const titleSX = {
  marginBottom: { xs: 2 },
  color: 'primary.main',
  my: { tablet: 2 },
  fontSize: { xs: '20px', tablet: '28px' },
};

const LogIn = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Paper sx={paperSX}>
      <Typography sx={titleSX} component="h1">
        Log In
      </Typography>
      <FormikProvider value={formik}>
        <Box component="form" sx={inputBoxSX} onSubmit={formik.onSubmit}>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            name="email"
            label="Email"
            sx={inputSX}
          />
          <TextField
            onChange={formik.handleChange}
            value={formik.values.pwd}
            error={formik.touched.pwd && Boolean(formik.errors.pwd)}
            helperText={formik.touched.pwd && formik.errors.pwd}
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
      </FormikProvider>
    </Paper>
  );
};
export default LogIn;
