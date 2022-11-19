import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TextField } from 'formik-mui';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import postLogIn from '../../../api/postLogIn';

const initialValues = {
  email: '',
  pwd: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().email('It will be an valid email').required('Email is required'),
  pwd: yup.string().min(6, 'Password must have at least 6 characters').required('Password is required!'),
});

const inputBoxSX = (isLoading) => ({
  display: isLoading ? 'none' : 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

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

const preloaderSX = (isLoading) => ({
  display: isLoading ? 'inline-block' : 'none',
  my: 5,
  width: '80px !important',
  height: '80px !important',
  color: 'secondary',
});

const LogInForm = () => {
  const [errorMassage, setErrorMassage] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();

  const myHandleSubmit = async (values) => {
    setIsLoading(true);

    const userData = {
      loginOrEmail: values.email,
      password: values.pwd,
    };
    const response = await postLogIn(userData).then((res) => res);

    if (response.success) {
      localStorage.setItem('token', response.token);
      setErrorMassage(null);
      navigate('/');
    } else {
      setErrorMassage(response?.password || response?.loginOrEmail);
    }
    setIsLoading(false);
  };

  const handleClickSignUp = () => {
    navigate('/signup');
  };

  return (
    <>
      <CircularProgress sx={preloaderSX(isLoading)} />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={myHandleSubmit}>
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Box
            component={Form}
            sx={inputBoxSX(isLoading)}
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
            {errorMassage && <Typography sx={{ color: '#d32f2f', textAlign: 'right' }}>{errorMassage}</Typography>}

            <Box sx={{ my: { xs: 1.5, laptop: 2.5 } }}>
              <Button sx={buttonSX} onClick={handleClickSignUp}>
                sign up
              </Button>
              <Button type="submit" sx={buttonSX}>
                log in
              </Button>
            </Box>
          </Box>
        )}
      </Formik>
    </>
  );
};

export default LogInForm;
