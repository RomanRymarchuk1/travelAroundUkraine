/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// Form components
import { Formik, Form } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { enAU } from 'date-fns/locale';
// MUI Components
import { Stepper, Step, StepLabel, Button, CircularProgress, Box } from '@mui/material';
// Redux store
import { useSelector, useDispatch } from 'react-redux';
import { increaseStep, decreaseStep, createNewOrder } from '../../../../store/slices/orderSlice/orderSlice';
// Child Forms and model
import { UserDetailsForm, ShippingAddressForm, PaymentForm, PaymentSuccess, CheckoutSummary } from '..';
import { initialValues, validationSchema } from '../../data';

const steps = ['User Details', 'Shipping Address', 'Payment Details'];

const CheckoutForm = () => {
  const { currentStep, orderInfo } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const lastStep = steps.length - 1;
  const currentValidationSchema = validationSchema[currentStep];

  const GoToNextStep = () => {
    dispatch(increaseStep());
  };

  const GoToPrevStep = () => {
    dispatch(decreaseStep());
  };

  const formSubmitHandler = async (values, actions) => {
    // actions.setSubmitting(false);
    // console.log(actions);

    if (currentStep === lastStep) {
      // console.log('Last step', values);
      try {
        dispatch(createNewOrder(values));
      } catch (e) {
        console.error(e);
      }
      console.log(orderInfo);
    } else {
      GoToNextStep();
    }
  };

  return (
    <>
      <Stepper activeStep={currentStep} alternativeLabel sx={{ mb: '100px' }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {currentStep === steps.length ? (
        <CheckoutSummary />
      ) : (
        <Formik initialValues={initialValues} validationSchema={currentValidationSchema} onSubmit={formSubmitHandler}>
          {({ isSubmitting }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enAU}>
              <Form>
                {currentStep === 0 && <UserDetailsForm />}
                {currentStep === 1 && <ShippingAddressForm />}
                {currentStep === 2 && <PaymentForm />}
                <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: 3, position: 'relative' }}>
                  {currentStep !== 0 && !isSubmitting && <Button onClick={GoToPrevStep}>Back</Button>}

                  {!isSubmitting ? (
                    <Button disabled={isSubmitting} type="submit">
                      {currentStep !== lastStep ? 'Continue' : 'Confirm'}
                    </Button>
                  ) : (
                    <CircularProgress
                      size={50}
                      sx={{
                        color: 'primary.dark',
                      }}
                    />
                  )}
                </Box>
              </Form>
            </LocalizationProvider>
          )}
        </Formik>
      )}

      <PaymentSuccess />
    </>
  );
};

export default CheckoutForm;
