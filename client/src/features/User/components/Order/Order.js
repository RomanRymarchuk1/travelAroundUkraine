import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Typography, Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// TODO: add tourList render

const Order = ({ totalSum, orderNo, date, products }) => {
  console.log(products);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Order №{orderNo}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {/* {products.map(({ product: { name, currentPrice, itemNo }, cartQuantity }) => (

        ))} */}

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Date: {date}</Typography>
            <Typography>Total price: {totalSum}€</Typography>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

Order.propTypes = {
  orderNo: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  totalSum: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default memo(Order);
