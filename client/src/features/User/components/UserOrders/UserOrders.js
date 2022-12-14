import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const UserOrders = ({ orders, ordersError }) => {
  console.log(orders, ordersError);

  return <Box>sdadasd</Box>;
};

UserOrders.propTypes = {
  orders: PropTypes.array.isRequired,
  ordersError: PropTypes.object,
};

UserOrders.defaultProps = {
  ordersError: null,
};

export default UserOrders;
