/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// Form components
import { Formik, Form } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { enAU } from 'date-fns/locale';
// MUI Stepper
import { Stepper, Step, StepLabel, Button } from '@mui/material';
// Child Forms and model
import { UserDetailsForm, ShippingAddressForm, PaymentForm, PaymentSuccess, CheckoutSummary } from '..';
import { initialValues, validationSchema } from '../../data';

const steps = ['User Details', 'Shipping Address', 'Payment Details'];

const CheckoutForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const lastStep = steps.length - 1;
  const currentValidationSchema = validationSchema[activeStep];

  const GoToNextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const GoToPrevStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const formSubmitHandler = (values, actions) => {
    GoToNextStep();
    actions.setSubmitting(false);
    console.log(actions);
  };

  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: '100px' }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <CheckoutSummary />
      ) : (
        <Formik initialValues={initialValues} validationSchema={currentValidationSchema} onSubmit={formSubmitHandler}>
          {({ isSubmitting }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enAU}>
              <Form>
                {activeStep === 0 && <UserDetailsForm />}
                {activeStep === 1 && <ShippingAddressForm />}
                {activeStep === 2 && <PaymentForm />}

                {activeStep !== 0 && <Button onClick={GoToPrevStep}>Back</Button>}
                <Button type="submit">{activeStep !== lastStep ? 'Continue' : 'Pay'}</Button>
              </Form>
            </LocalizationProvider>
          )}
        </Formik>
      )}

      <PaymentSuccess activeStep={activeStep} steps={steps} />
    </>
  );
};

export default CheckoutForm;
