import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../components';

const AppLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default AppLayout;
