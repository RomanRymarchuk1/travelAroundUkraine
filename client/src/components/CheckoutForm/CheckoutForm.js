/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import { UserDetailsForm, ShippingAddressForm, PaymentForm, PaymentSuccess, CheckoutSummary } from '..';
import CheckoutFormInitialValues from '../../utils/checkoutFormModels/CheckoutFormInitialValues';
import CheckoutFormvalidationSchema from '../../utils/checkoutFormModels/CheckoutFormvalidationSchema';

const steps = ['User Details', 'Shipping Address', 'Payment Details'];

const CheckoutForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const lastStep = steps.length - 1;
  const currentValidationSchema = CheckoutFormvalidationSchema[activeStep];

  const GoToNextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const GoToPrevStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const formSubmitHandler = (values, actions) => {
    GoToNextStep();
    console.log(values);
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
        <Formik
          initialValues={CheckoutFormInitialValues}
          validationSchema={currentValidationSchema}
          onSubmit={formSubmitHandler}
        >
          {({ isSubmitting }) => (
            <Form>
              {activeStep === 0 && <UserDetailsForm />}
              {activeStep === 1 && <ShippingAddressForm />}
              {activeStep === 2 && <PaymentForm />}

              {activeStep !== 0 && <Button onClick={GoToPrevStep}>Back</Button>}
              <Button type="submit">{activeStep !== lastStep ? 'Continue' : 'Pay'}</Button>
            </Form>
          )}
        </Formik>
      )}

      <PaymentSuccess activeStep={activeStep} steps={steps} />
    </>
  );
};

export default CheckoutForm;
