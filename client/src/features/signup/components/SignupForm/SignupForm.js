/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Stepper, StepLabel, Step, Button, Box, CircularProgress } from '@mui/material';
import { Formik, Form } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { initialValues, validationSchema } from '../../data';
import { UserInfoForm, LoginInfoForm, SignupSuccess } from '..';

const steps = ['User Info', 'Login Info'];

const SignupForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const currentValidationSchema = validationSchema[activeStep];
  const lastStep = steps.length - 1;

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const formSubmitHandler = (values, { setSubmitting }) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      nextStep();
      setSubmitting(false);
    }, 2000);

    // console.log(values);
  };

  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep !== steps.length ? (
        <Formik initialValues={initialValues} validationSchema={currentValidationSchema} onSubmit={formSubmitHandler}>
          {({ isSubmitting }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Form>
                {activeStep === 0 && <UserInfoForm />}
                {activeStep === 1 && <LoginInfoForm />}

                <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: 3 }}>
                  {activeStep !== 0 && <Button onClick={previousStep}>Back</Button>}

                  <Button disabled={isSubmitting} type="submit">
                    {activeStep !== lastStep ? 'Continue' : 'Sign up'}
                    {loading && (
                      <CircularProgress
                        size={30}
                        sx={{
                          color: 'primary.dark',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          marginTop: '-15px',
                          marginLeft: '-15px',
                        }}
                      />
                    )}
                  </Button>
                </Box>
              </Form>
            </LocalizationProvider>
          )}
        </Formik>
      ) : null}

      <SignupSuccess activeStep={activeStep} steps={steps} />
    </>
  );
};

export default SignupForm;
