import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  ContactUsPage,
  HomePage,
  CartPage,
  ErrorPage,
  CataloguePage,
  TourPage,
  CheckoutPage,
  AppLayout,
  SignupPage,
  LogInPage,
  UserPage,
} from './pages';

// TODO: add navigation from tour page to catalogue page
// TODO: add protected routes after incorporating sign in feature

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/catalogue" element={<CataloguePage />} />
      <Route path="/tour/:tourId" element={<TourPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/contacts" element= {<ContactUsPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
