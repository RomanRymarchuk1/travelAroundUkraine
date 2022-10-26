import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = () => (
  <>
    <header>Header</header>
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
