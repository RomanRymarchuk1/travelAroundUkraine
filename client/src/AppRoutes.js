import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, CartPage, ErrorPage, CataloguePage, TourPage, CheckoutPage, AppLayout } from './pages';

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
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
