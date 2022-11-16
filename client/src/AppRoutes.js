import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CheckoutPage from './pages';
import { HomePage, CartPage, ErrorPage, CataloguePage, AppLayout, TourPage } from './features';

// TODO: add navigation from tour page to catalogue page

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/catalogue" element={<CataloguePage />} />
      <Route path="/tour/:tourId" element={<TourPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
