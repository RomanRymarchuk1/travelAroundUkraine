import React from 'react';
import { NavLink } from 'react-router-dom';

const LogoHeader = () => (
  <NavLink to="/" style={{ textDecoration: 'none' }}>
    <img src="/assets/images/logo/logo.png" alt="logo" width="75" height="60" />
  </NavLink>
);

export default LogoHeader;
