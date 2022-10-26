import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <footer>Footer</footer>
    </>
);

export default Layout;
