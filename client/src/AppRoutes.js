import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TourPage, HomePage, CataloguePage, ErrorPage, CheckoutPage, SignupPage } from './pages';
import CartPage from './features';
import Layout from './layout/Layout/Layout';

// TODO: add navigation from tour page to catalogue page
// TODO: add protected routes after incorporating sign in feature

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/catalogue" element={<CataloguePage />} />
      <Route path="/tour/:tourId" element={<TourPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
