import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../layout/Footer/components';
import { Header } from '../../layout/Header/components';

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
